import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.redirect(
    new URL("/downloads/ScalesWiki-Ball-Python-Quick-Start-Guide-FREE.pdf", "https://scaleswiki.org"),
    307
  );
}
