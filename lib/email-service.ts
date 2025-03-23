import nodemailer from "nodemailer"

// Create a simplified email transporter
export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string
  subject: string
  html: string
  replyTo?: string
}) {
  try {
    // Create a simple transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "ashobal@sinfosecurity.com",
        pass: process.env.EMAIL_PASSWORD || "edvrjyjzyyqjmuhk",
      },
    })

    // Send the email
    const info = await transporter.sendMail({
      from: `"Supreme InfoSec Website" <${process.env.EMAIL_USER || "ashobal@sinfosecurity.com"}>`,
      to,
      subject,
      html,
      replyTo,
    })

    console.log("Message sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: error.message }
  }
}

