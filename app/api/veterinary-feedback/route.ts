import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      credentials,
      lesson,
      category,
      feedback,
    } = body;


    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY || "",
        },
        body: JSON.stringify({
          sender: {
            name: "ScalesWiki Veterinary Review",
            email: "contact@scaleswiki.org",
          },

         to: [
  {
    email: "scalesandtailsrescue72@gmail.com",
    name: "ScalesWiki",
  },
],
          subject:
            "New ScalesWiki Veterinary Review Feedback",

          htmlContent: `
            <h2>New Veterinary Review Feedback</h2>

            <p><strong>Name:</strong> ${name}</p>

            <p><strong>Email:</strong> ${email}</p>

            <p><strong>Credentials:</strong> ${credentials}</p>

            <p><strong>Lesson Reviewed:</strong> ${lesson}</p>

            <p><strong>Category:</strong> ${category}</p>

            <hr />

            <p><strong>Feedback:</strong></p>

            <p>${feedback}</p>
          `,
        }),
      }
    );


    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Brevo error:",
        errorText
      );

      throw new Error(
        "Brevo email failed"
      );
    }


    console.log(
      "Veterinary feedback email sent"
    );


    return NextResponse.json({
      success: true,
      message: "Feedback received successfully",
    });


  } catch (error) {

    console.error(
      "Feedback submission error:",
      error
    );


    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit feedback",
      },
      {
        status: 500,
      }
    );
  }
}