import { NextResponse } from "next/server";

const STRIPE_API_URL = "https://api.stripe.com/v1/checkout/sessions";
const STRIPE_PRICE_ID = "price_1U57UCAC7CAaOpm0V7eHznN7";
const DEFAULT_SITE_URL =
  "https://scaleswiki.scalesandtailsrescue72.workers.dev";

export async function POST() {
  const startedAt = Date.now();

  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error("[Stripe] STRIPE_SECRET_KEY is missing");

      return NextResponse.json(
        { error: "Stripe is not configured on the server." },
        { status: 500 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

    const body = new URLSearchParams();
    body.set("mode", "payment");
    body.set("line_items[0][price]", STRIPE_PRICE_ID);
    body.set("line_items[0][quantity]", "1");
    body.set("success_url", `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`);
    body.set("cancel_url", `${siteUrl}/species/ball-python`);
    body.set("billing_address_collection", "auto");

    console.log("[Stripe] Creating checkout session");
    console.log("[Stripe] Price:", STRIPE_PRICE_ID);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let response: Response;

    try {
      response = await fetch(STRIPE_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
        signal: controller.signal,
        cache: "no-store",
      });
    } finally {
      clearTimeout(timeout);
    }

    const elapsed = Date.now() - startedAt;
    const data = await response.json();

    console.log(`[Stripe] Response received after ${elapsed}ms: ${response.status}`);

    if (!response.ok) {
      console.error("[Stripe] API error:", data);

      return NextResponse.json(
        {
          error:
            data?.error?.message ||
            "Stripe could not create the checkout session.",
        },
        { status: 502 }
      );
    }

    if (!data?.url) {
      console.error("[Stripe] Missing checkout URL:", data);

      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 502 }
      );
    }

    console.log(`[Stripe] Checkout session created successfully in ${elapsed}ms`);

    return NextResponse.json(
      { url: data.url },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error) {
    const elapsed = Date.now() - startedAt;

    if (error instanceof Error && error.name === "AbortError") {
      console.error(`[Stripe] Request timed out after ${elapsed}ms`);

      return NextResponse.json(
        { error: "Stripe did not respond within 10 seconds. Please try again." },
        { status: 504 }
      );
    }

    console.error("[Stripe] Checkout route failed:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create Stripe checkout session.",
      },
      { status: 500 }
    );
  }
}
