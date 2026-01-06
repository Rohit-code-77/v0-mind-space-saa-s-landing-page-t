"use client"

import { FileText, Send, HandshakeIcon, Shield, CheckCircle2, DollarSign, KeyIcon } from "lucide-react"

const services = [
  {
    title: "PF Balance Check",
    description: "Do you want to know how much money you have in your PF or pension account?",
    features: ["Service starting @ Rs. 99/- only", "Quick verification", "Online check"],
    icon: DollarSign,
    color: "from-blue-500 to-blue-600",
    delay: "0s",
  },
  {
    title: "PF Withdrawal Assistance",
    description: "Includes partial withdrawal in terms of advance or full withdrawal upon retirement.",
    features: ["Expert guidance", "Document assistance", "99% success rate or fees returned"],
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    delay: "0.1s",
  },
  {
    title: "PF Transfer Support",
    description: "Your transfer of service and smooth coordination for timely PF transfer.",
    features: ["Expert coordination", "Fast processing", "Status tracking"],
    icon: Send,
    color: "from-pink-500 to-pink-600",
    delay: "0.2s",
  },
  {
    title: "EPF Claim Status Tracking",
    description: "Track the status of your claim and get personalized help based on your problem.",
    features: ["Real-time updates", "Status verification", "Expert support"],
    icon: HandshakeIcon,
    color: "from-orange-500 to-orange-600",
    delay: "0.3s",
  },
  {
    title: "Pension (EPS) Help",
    description: "Facing trouble regarding your monthly pension settlement? We help with expert guidance.",
    features: ["Fast processing", "Document guidance", "Error-free submission"],
    icon: Shield,
    color: "from-green-500 to-green-600",
    delay: "0.4s",
  },
  {
    title: "UAN Activation & KYC Update",
    description: "Claims often get rejected due to KYC details mismatch. Fix all your KYC related issues.",
    features: ["KYC resolution", "UAN activation", "Rejection prevention"],
    icon: KeyIcon,
    color: "from-red-500 to-red-600",
    delay: "0.5s",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-green-50/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive EPF solutions from Delhi NCR to solve all your PF problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-lg service-card-hover animate-fadeInUp overflow-hidden relative"
                style={{ animationDelay: service.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 transform group-hover:translate-x-2 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} transform group-hover:w-full transition-all duration-300 w-0`}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
