import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY;

console.log("Stripe key loaded:", !!stripeKey);

const stripe = new Stripe(stripeKey || "");

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: "price_1U57UCAC7CAaOpm0V7eHznN7",
          quantity: 1,
        },
      ],

      success_url:
        "http://localhost:3000/success",

      cancel_url:
        "http://localhost:3000/species/ball-python",
    });

    return NextResponse.json({
      url: session.url,
    });

  } catch (error: any) {

    console.error("Stripe checkout error:");
    console.error(error.message);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}