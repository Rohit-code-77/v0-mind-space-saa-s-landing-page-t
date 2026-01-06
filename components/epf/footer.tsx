"use client"

import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full mix-blend-screen filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-slate-700/50">
          <div className="group">
            <div className="flex items-center gap-2 mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <p className="text-slate-400 leading-relaxed">
              A leading consultant from Delhi NCR providing transparent EPF solutions to secure your future.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { name: "Services", href: "#services" },
                { name: "Why Us", href: "#why-us" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "FAQ", href: "#faq" },
              ].map((link, index) => (
                <li key={index} className="group/link">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 group-hover/link:translate-x-1 transform transition-transform"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { name: "PF Balance Check", href: "#services" },
                { name: "PF Withdrawal", href: "#services" },
                { name: "PF Transfer", href: "#services" },
                { name: "EPS Help", href: "#services" },
              ].map((link, index) => (
                <li key={index} className="group/link">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300 group-hover/link:translate-x-1 transform transition-transform"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">WhatsApp</p>
                  <a
                    href="https://wa.me/918307749595"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition-colors"
                  >
                    +91-8307749595
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href="mailto:epfcentre123@gmail.com" className="hover:text-blue-400 transition-colors">
                    epfcentre123@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Hours</p>
                  <p className="text-sm">09 AM – 10 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mb-8">
          <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-colors">
            <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Address</p>
              <p className="text-slate-400">Phase 1, 294, Industrial Area, Panchkula, Haryana 134113, India</p>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-400 border-t border-slate-700/50">
          <p>
            &copy; 2025 PF WALLAH. All rights reserved. | We are not an official EPFO website. We provide consultancy
            and assistance services only.
          </p>
        </div>
      </div>
    </footer>
  )
}
