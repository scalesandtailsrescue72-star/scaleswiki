import { FREE_BALL_PYTHON_PDF_BASE64 } from "@/app/lib/guides/freeBallPythonPdf";

export const dynamic = "force-dynamic";

export async function GET() {
  const binary = atob(FREE_BALL_PYTHON_PDF_BASE64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="ScalesWiki-Ball-Python-Quick-Start-Guide-FREE.pdf"',
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
