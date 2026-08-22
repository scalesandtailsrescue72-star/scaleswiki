import { NextResponse } from "next/server";
import { createClient } from "@/app/lib/database/server";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "An unsubscribe token is required." }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase.rpc("unsubscribe_newsletter", { p_token: token });

  if (error) {
    console.error("[Newsletter] unsubscribe failed", error);
    return NextResponse.json({ error: "We couldn't process your unsubscribe request." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, unsubscribed: Boolean(data) });
}
