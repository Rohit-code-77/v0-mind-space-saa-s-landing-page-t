"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="#why-us" className="text-foreground hover:text-primary transition">
              Why Us
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </Link>
            <Link href="#faq" className="text-foreground hover:text-primary transition">
              FAQ
            </Link>
            <a href="https://wa.me/918307749595" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20BA5C] text-white">Contact on WhatsApp</Button>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block py-2 text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="#why-us" className="block py-2 text-foreground hover:text-primary">
              Why Us
            </Link>
            <Link href="#testimonials" className="block py-2 text-foreground hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="block py-2 text-foreground hover:text-primary">
              FAQ
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BA5C] text-white">WhatsApp</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
