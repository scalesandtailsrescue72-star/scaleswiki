import { getCloudflareContext } from "@opennextjs/cloudflare";
import { NextResponse } from "next/server";

const STRIPE_API_BASE = "https://api.stripe.com/v1/checkout/sessions";
const STRIPE_PRICE_ID = "price_1U57UCAC7CAaOpm0V7eHznN7";
const GUIDE_OBJECT_KEY = "guides/ball-python-101-care-guide.pdf";
const STRIPE_TIMEOUT_MS = 10000;

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeKey) {
      console.error("[GuideDownload] STRIPE_SECRET_KEY is missing");
      return NextResponse.json(
        { error: "Downloads are temporarily unavailable." },
        { status: 500 }
      );
    }

    const sessionId = new URL(request.url).searchParams.get("session_id");

    if (!sessionId || !/^cs_[A-Za-z0-9_]+$/.test(sessionId)) {
      return NextResponse.json(
        { error: "A valid checkout session is required." },
        { status: 400 }
      );
    }

    const stripeUrl = new URL(`${STRIPE_API_BASE}/${encodeURIComponent(sessionId)}`);
    stripeUrl.searchParams.append("expand[]", "line_items.data.price");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), STRIPE_TIMEOUT_MS);

    let stripeResponse: Response;

    try {
      stripeResponse = await fetch(stripeUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${stripeKey}`,
        },
        cache: "no-store",
        signal: controller.signal,
      });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        console.error("[GuideDownload] Stripe session lookup timed out");
        return NextResponse.json(
          { error: "Purchase verification timed out. Please try again." },
          { status: 504 }
        );
      }

      throw error;
    } finally {
      clearTimeout(timeout);
    }

    const session = await stripeResponse.json();

    if (!stripeResponse.ok) {
      console.error("[GuideDownload] Stripe session lookup failed:", session);

      const availabilityFailure =
        stripeResponse.status === 429 || stripeResponse.status >= 500;

      return NextResponse.json(
        {
          error: availabilityFailure
            ? "Stripe is temporarily unavailable. Please try again."
            : "We could not verify this purchase.",
        },
        { status: availabilityFailure ? 503 : 403 }
      );
    }

    if (
      session?.status !== "complete" ||
      session?.payment_status !== "paid" ||
      session?.mode !== "payment"
    ) {
      console.warn("[GuideDownload] Session is not a completed paid checkout", {
        sessionId,
        status: session?.status,
        paymentStatus: session?.payment_status,
      });

      return NextResponse.json(
        { error: "This purchase has not been completed." },
        { status: 403 }
      );
    }

    const lineItems = session?.line_items?.data;
    const purchasedPrice = lineItems?.[0]?.price?.id;

    if (purchasedPrice !== STRIPE_PRICE_ID) {
      console.warn("[GuideDownload] Session price does not match guide price", {
        sessionId,
        purchasedPrice,
      });

      return NextResponse.json(
        { error: "This checkout does not include the requested guide." },
        { status: 403 }
      );
    }

    const { env } = await getCloudflareContext({ async: true });
    const bucket = (env as typeof env & { scaleswiki_guides: R2Bucket })
      .scaleswiki_guides;

    if (!bucket) {
      console.error("[GuideDownload] R2 binding is missing");
      return NextResponse.json(
        { error: "Guide storage is temporarily unavailable." },
        { status: 500 }
      );
    }

    const object = await bucket.get(GUIDE_OBJECT_KEY);

    if (!object) {
      console.error("[GuideDownload] Guide PDF is missing from R2", {
        key: GUIDE_OBJECT_KEY,
      });
      return NextResponse.json(
        { error: "The guide file is temporarily unavailable." },
        { status: 404 }
      );
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      'attachment; filename="ScalesWiki-Ball-Python-101-Care-Guide.pdf"'
    );
    headers.set("Cache-Control", "private, no-store, max-age=0");
    headers.set("X-Content-Type-Options", "nosniff");

    if (object.httpEtag) {
      headers.set("ETag", object.httpEtag);
    }

    return new Response(object.body, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("[GuideDownload] Download failed:", error);

    return NextResponse.json(
      { error: "Unable to download the guide right now." },
      { status: 500 }
    );
  }
}
