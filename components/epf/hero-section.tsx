"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, CheckCircle } from "lucide-react"

export default function HeroSection() {
  const handleLearnMore = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-background to-background relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fadeInDown mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Your Trusted EPF & Financial Support Partner</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fadeInUp">
          PF WALLAH -{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Expert EPF Assistance
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          Facing claim rejections from EPFO? Take a deep breath because PF WALLAH has a highly experienced team of PF
          consultants to solve your problems.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="https://wa.me/918307749595" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#25D366] to-[#20BA5C] hover:from-[#20BA5C] hover:to-[#1a9850] text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Now
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-green-50 transition-all duration-300 bg-transparent"
            onClick={handleLearnMore}
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { number: "1000+", label: "Happy Clients", icon: "👥" },
            { number: "10+", label: "Years Experience", icon: "⭐" },
            { number: "99%", label: "Success Rate", icon: "✓" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-white to-green-50 border border-green-100 shadow-lg stat-card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
