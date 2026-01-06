"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current!,
        "YOUR_PUBLIC_KEY"
      )

      setStatus("success")
      setStatusMessage("Thank you! Your message has been sent successfully.")
      setFormData({ name: "", email: "", phone: "", message: "" })
      formRef.current.reset()

      setTimeout(() => setStatus("idle"), 5000)
    } catch (err) {
      console.error(err)
      setStatus("error")
      setStatusMessage("Failed to send message. Please try again.")
    }
  }

  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50" />

      <div className="relative max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-600">
            Have questions? Fill the form and we’ll get back within 24 hours.
          </p>
        </div>

        {/* CONTACT OPTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" id="contact-form">
          <div className="p-6 rounded-2xl bg-white shadow">
            <Phone className="text-emerald-600 mb-3" />
            <h3 className="font-bold">Call Us</h3>
            <a
              href="tel:+918307749595"
              className="text-emerald-600 text-sm"
            >
              +91-8307749595
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow">
            <Mail className="text-blue-600 mb-3" />
            <h3 className="font-bold">Email Us</h3>
            <a
              href="mailto:epfcentre123@gmail.com"
              className="text-blue-600 text-sm"
            >
              epfcentre123@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow">
            <MessageSquare className="text-amber-600 mb-3" />
            <h3 className="font-bold">WhatsApp</h3>
            <a
              href="https://wa.me/918307749595"
              className="text-amber-600 text-sm"
            >
              Start Chat
            </a>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            {/* STATUS */}
            {status === "success" && (
              <p className="flex items-center gap-2 text-green-600">
                <CheckCircle /> {statusMessage}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-red-600">
                <AlertCircle /> {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
