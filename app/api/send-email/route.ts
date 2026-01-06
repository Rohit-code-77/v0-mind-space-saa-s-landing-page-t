import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Update these with your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message - PF WALLAH",
      html: `
        <h2>Thank you for contacting PF WALLAH!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>PF WALLAH Team</p>
      `,
    }

    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
