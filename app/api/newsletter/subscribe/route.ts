import { NextResponse } from "next/server";
import { createClient } from "@/app/lib/database/server";

function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = normalizeEmail(body?.email);
    const firstName = typeof body?.firstName === "string" ? body.firstName.trim().slice(0, 80) : null;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: existing, error: lookupError } = await supabase
      .from("newsletter_subscribers")
      .select("id,status")
      .eq("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("[Newsletter] lookup failed", lookupError);
      return NextResponse.json({ error: "Newsletter signup is temporarily unavailable." }, { status: 500 });
    }

    if (existing?.status === "active") {
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    const { error } = await supabase.from("newsletter_subscribers").upsert(
      {
        email,
        first_name: firstName,
        track: "ball-python",
        status: "active",
        unsubscribed_at: null,
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("[Newsletter] signup failed", error);
      return NextResponse.json({ error: "We couldn't save your signup. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, alreadySubscribed: false });
  } catch (error) {
    console.error("[Newsletter] unexpected error", error);
    return NextResponse.json({ error: "We couldn't process your signup." }, { status: 500 });
  }
}
