import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send email notification
    // 4. Add to CRM/lead system

    console.log("New lead received:", body);
    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
