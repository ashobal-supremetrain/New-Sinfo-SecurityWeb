import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"
import { generateEmailHTML } from "@/lib/email-template"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, company, serviceType, message } = body

    console.log("Contact API received:", { name, email, company, serviceType, message })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    try {
      // Prepare email content
      const emailContent = generateEmailHTML({
        name,
        email,
        company,
        serviceType,
        message,
      })

      // Send the email
      await sendEmail({
        to: "ashobal@sinfosecurity.com",
        subject: `New Contact Form Submission from ${name}`,
        html: emailContent,
        replyTo: email,
      })

      // Return success response
      return NextResponse.json({
        success: true,
        message: "Your message has been received. We will contact you shortly.",
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return NextResponse.json({ error: "Failed to send email", details: emailError.message }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

