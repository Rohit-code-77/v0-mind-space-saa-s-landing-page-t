"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is EPF (Employees' Provident Fund) and how does it work?",
    answer:
      "EPF is a retirement savings scheme under the Employees' Provident Fund Organisation (EPFO) where both the employee and employer contribute a fixed percentage of salary every month. This corpus earns interest and can be used for retirement and specific withdrawals under EPFO rules.",
  },
  {
    question: "What is UAN and why is it required to check PF balance online?",
    answer:
      "UAN (Universal Account Number) is a unique 12-digit number allotted to every EPF member nationwide. It links all your PF accounts under one number and is mandatory for accessing online services such as balance check, passbook download, claim status tracking, and withdrawal submissions.",
  },
  {
    question: "How to activate UAN through the UMANG app in 2025?",
    answer:
      "EPFO now mandates UAN generation and activation only via the UMANG App using Face Authentication Technology (FAT) for enhanced security. Upload your Aadhaar details and complete face verification to activate UAN and manage EPF services online.",
  },
  {
    question: "What are the latest EPFO rules for final PF withdrawal in 2025?",
    answer:
      "Recent EPFO updates now allow full PF withdrawal after 12 months of unemployment (formerly shorter duration) and pension withdrawal after 36 months of unemployment, reflecting recent regulatory changes to strengthen retirement savings.",
  },
  {
    question: "Can EPF funds be misused after withdrawal?",
    answer:
      "EPFO warns that unauthorized use of EPF funds for non-eligible purposes (like luxury purchases) could lead to recovery actions under the EPF Scheme, 1952. Always withdraw for sanctioned reasons such as medical, home, or education needs.",
  },
  {
    question: "What is EPS and how is it linked to EPF withdrawals?",
    answer:
      "In addition to EPF, EPS (Employee Pension Scheme) savings are part of your overall retirement corpus. Some claims may be blocked due to EPS discrepancies, service duration issues, or incorrect details. Ensure EPS records and service history are accurate before applying.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-green-50/20 to-white relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInDown">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200 mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Common Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Find answers to common EPF and PF-related questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group"
              >
                <span className="font-bold text-foreground text-left group-hover:text-green-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform duration-300 group-hover:text-green-700 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-gray-100 bg-gradient-to-r from-green-50/50 to-emerald-50/50 animate-fadeInDown">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
