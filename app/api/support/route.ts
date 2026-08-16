import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      type,
      subject,
      message,
    } = body;

    console.log("=== New ScalesWiki Support Request ===");

    console.log({
      name,
      email,
      type,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Support request received successfully",
    });

  } catch (error) {

    console.error("Support submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit support request",
      },
      {
        status: 500,
      }
    );
  }
}