"use client"

import { Send } from "lucide-react"
import { useState } from "react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href="https://wa.me/918307749595"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 group z-40"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BA5C] opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 animate-pulse"></div>

        {/* Floating orbit animation */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#25D366] border-r-[#25D366] group-hover:border-t-[#fff] group-hover:border-r-[#fff] transition-all duration-300 animate-spin"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Main button with enhanced gradient and shadow */}
        <button
          className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] via-[#23B55F] to-[#1FA052] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-125 group/btn animate-float"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Icon with pulse on hover */}
          <div className={`transition-transform duration-300 ${isHovered ? "scale-125 rotate-12" : ""}`}>
            <Send className="w-7 h-7 fill-current" />
          </div>

          {/* Floating text label on hover */}
          {isHovered && (
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold animate-bounce opacity-100">
              Chat
            </span>
          )}
        </button>

        {/* Animated message bubble tooltip */}
        <div className="absolute bottom-full right-0 mb-6 group-hover:mb-8 pointer-events-none transition-all duration-300">
          <div
            className={`px-4 py-3 bg-gradient-to-r from-[#25D366] to-[#20BA5C] text-white text-sm font-semibold rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap transform group-hover:translate-y-0 translate-y-2`}
          >
            💬 Quick Message
            <div className="absolute top-full right-4 w-3 h-3 bg-[#20BA5C] rounded-full"></div>
          </div>
        </div>

        {/* Animated dots around button */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#25D366] rounded-full transform -translate-x-1/2 -translate-y-6 opacity-0 group-hover:opacity-100 animate-ping"></div>
          <div
            className="absolute right-0 top-1/2 w-2 h-2 bg-[#25D366] rounded-full transform translate-x-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-ping"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#25D366] rounded-full transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:opacity-100 animate-ping"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </a>
  )
}
