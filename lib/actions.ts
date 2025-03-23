"use server"

import { z } from "zod"
import { sendEmail } from "./email-service"

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  serviceType: z.enum(["security", "development", "both"]).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    serviceType?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const serviceType = formData.get("serviceType") as string
    const message = formData.get("message") as string

    // Validate form data
    const validatedFields = ContactFormSchema.safeParse({
      name,
      email,
      company,
      serviceType,
      message,
    })

    // If validation fails, return errors
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
        message: "Please fix the errors in the form.",
      }
    }

    // Prepare email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Service Type:</strong> ${serviceType || "Not provided"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    // Send the email
    const emailResult = await sendEmail({
      to: "ashobal@sinfosecurity.com",
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
      replyTo: email,
    })

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send email")
    }

    // Return success response
    return {
      success: true,
      message: "Your message has been received. We will contact you shortly.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      errors: {
        _form: [`Failed to submit the form: ${error instanceof Error ? error.message : "Unknown error"}`],
      },
      success: false,
      message: "An error occurred while submitting the form.",
    }
  }
}

