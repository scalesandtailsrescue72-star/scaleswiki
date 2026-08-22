import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error("STRIPE_SECRET_KEY is not configured.");

      return NextResponse.json(
        {
          error: "Stripe is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const stripe = new Stripe(stripeKey);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: "price_1U57UCAC7CAaOpm0V7eHznN7",
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/success`,

      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/species/ball-python`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe checkout error:");

    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to create Stripe checkout session.",
      },
      {
        status: 500,
      }
    );
  }
}