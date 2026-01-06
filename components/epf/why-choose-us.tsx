"use client"

import { Award, Clock, Users, Shield } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified EPF consultants with years of experience in handling complex cases",
    color: "from-blue-500 to-blue-600",
    delay: "0s",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround time with regular status updates on your claims",
    color: "from-orange-500 to-orange-600",
    delay: "0.1s",
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Dedicated support team available via WhatsApp and phone for assistance",
    color: "from-purple-500 to-purple-600",
    delay: "0.2s",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description: "100% transparent process with zero hidden charges or surprises",
    color: "from-green-500 to-green-600",
    delay: "0.3s",
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden"
    >
      <div className="absolute top-10 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-10 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Choose Us?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's what makes us the preferred choice for EPF consultations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group flex gap-6 p-8 rounded-2xl bg-white border border-gray-200 shadow-lg service-card-hover animate-fadeInUp relative overflow-hidden"
                style={{ animationDelay: reason.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="flex-shrink-0 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} text-white flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
