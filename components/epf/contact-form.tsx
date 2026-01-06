"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle, Send, ArrowRight } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully. We'll be in touch soon.")
        setFormData({ name: "", email: "", phone: "", message: "" })
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setStatusMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setStatusMessage("An error occurred. Please try again later.")
      console.error("Form submission error:", error)
    }
  }

  return (
    <section id="contact-form" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-100/80 backdrop-blur-sm border border-emerald-200">
            <span className="text-emerald-700 text-sm font-semibold flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-blue-900 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about our EPF services? Fill out the form below and our team will get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div
            className="group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 mb-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">Available Monday to Friday</p>
            <a
              href="tel:+918307749595"
              className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors flex items-center gap-2"
            >
              +91-8307749595
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            className="group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">We respond within 24 hours</p>
            <a
              href="mailto:epfcentre123@gmail.com"
              className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-2"
            >
              epfcentre123@gmail.com
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div
            className="group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-3">Quick response guaranteed</p>
            <a
              href="https://wa.me/918307749595"
              className="text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors flex items-center gap-2"
            >
              Start Chat
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-8 sm:p-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group relative">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    className={`absolute left-4 top-4 h-5 w-5 transition-colors duration-300 ${focusedField === "name" ? "text-emerald-600" : "text-gray-400"}`}
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="group relative">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className={`absolute left-4 top-4 h-5 w-5 transition-colors duration-300 ${focusedField === "email" ? "text-blue-600" : "text-gray-400"}`}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="group relative">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone
                  className={`absolute left-4 top-4 h-5 w-5 transition-colors duration-300 ${focusedField === "phone" ? "text-amber-600" : "text-gray-400"}`}
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="group relative">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare
                  className={`absolute left-4 top-4 h-5 w-5 transition-colors duration-300 ${focusedField === "message" ? "text-purple-600" : "text-gray-400"}`}
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us how we can help you with your PF needs..."
                  rows={5}
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:bg-white transition-all duration-300 resize-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl animate-fade-in">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                <p className="text-emerald-700 font-medium">{statusMessage}</p>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-fade-in">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 font-medium">{statusMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full group relative overflow-hidden rounded-xl px-6 py-4 font-bold text-white transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 group-hover:from-emerald-600 group-hover:to-blue-700 transition-all duration-300" />
              <div className="relative flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            </button>

            <p className="text-center text-sm text-gray-600">We'll respond to your inquiry within 24 business hours.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
