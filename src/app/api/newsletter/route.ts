import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    //Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service:
    // - Mailchimp
    // - ConvertKit
    // - SendGrid
    // - Brevo (formerly Sendinblue)

    console.log("Newsletter subscription request for email:", email);

    return NextResponse.json(
      { message: "Subscription successful (simulated)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing subscription request:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
