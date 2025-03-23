import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"

export async function GET() {
  try {
    console.log("Testing email functionality...")

    // Send a test email
    const result = await sendEmail({
      to: "ashobal@sinfosecurity.com",
      subject: "Test Email from Supreme InfoSec Website",
      html: "<h1>Test Email</h1><p>This is a test email to verify the email functionality is working correctly.</p>",
    })

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      details: result,
    })
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

