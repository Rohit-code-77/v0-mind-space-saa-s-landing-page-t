"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kiran Karthikeyan",
    date: "3 January 2026",
    text: "EPF processes are usually something people dread because of unclear steps, portal issues, and long wait times. EPF Wallah completely changes that...",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    verified: true,
    delay: "0s",
  },
  {
    name: "Shivakumar BS",
    date: "30 December 2025",
    text: "Recommend the EPF Wallah support to any one who are stuck. They are very professional and timely. A big shout out to Ankit who was able to identify the...",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    verified: true,
    delay: "0.1s",
  },
  {
    name: "Madhanagopal Pattabiram",
    date: "30 December 2025",
    text: "Excellent service, prompt response. Very professional. The paramount is settled in a week period.",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    verified: true,
    delay: "0.2s",
  },
  {
    name: "J Y",
    date: "26 December 2025",
    text: "Outstanding Support from the Team - a very special Thanks to Ankit & Tanvi!",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    verified: true,
    delay: "0.3s",
  },
  {
    name: "Sunandan Ghosh",
    date: "24 December 2025",
    text: "I am extremely pleased with the excellent services provided by EPF Wallah. Their sincerity, diligence, and professionalism...",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    verified: true,
    delay: "0.4s",
  },
  {
    name: "Review Summary",
    date: "Based on 753 reviews",
    text: "EPF Wallah is highly praised for its exceptional professionalism, dedication, and quick resolution of PF-related issues. The team, notably Ankit and Nikhil, has been...",
    rating: 5,
    avatar: "https://via.placeholder.com/48",
    isReviewSummary: true,
    verified: true,
    delay: "0.5s",
  },
]

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Real feedback from satisfied clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp relative overflow-hidden"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {testimonial.isReviewSummary && (
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground text-base">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-xs">{testimonial.date}</p>
                  </div>
                )}

                {!testimonial.isReviewSummary && (
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-sm">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-xs">{testimonial.date}</p>
                      </div>
                      {testimonial.verified && (
                        <div className="text-blue-500 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                )}

                {testimonial.isReviewSummary && (
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}

                <p className="text-foreground text-sm leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors">
                  {testimonial.text}
                </p>

                <button className="mt-4 text-blue-600 hover:text-blue-700 text-xs font-semibold transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
