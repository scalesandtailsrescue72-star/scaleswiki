import { NextResponse } from "next/server";
import Stripe from "stripe";

const DEFAULT_PRICE_ID = "price_1U57UCAC7CAaOpm0V7eHznN7";

export async function POST() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error("STRIPE_SECRET_KEY is not configured.");

      return NextResponse.json(
        { error: "Stripe is not configured." },
        { status: 500 }
      );
    }

    // STRIPE_PRICE_ID can override this when switching between Test and Live mode.
    const priceId = process.env.STRIPE_PRICE_ID || DEFAULT_PRICE_ID;

    const stripe = new Stripe(stripeKey);
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://scaleswiki.scalesandtailsrescue72.workers.dev";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/species/ball-python`,
    });

    if (!session.url) {
      console.error("Stripe returned a checkout session without a URL.");

      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 502 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unable to create Stripe checkout session.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
