import Navbar from "@/components/epf/navbar"
import HeroSection from "@/components/epf/hero-section"
import ServicesSection from "@/components/epf/services-section"
import WhyChooseUs from "@/components/epf/why-choose-us"
import TestimonialsSection from "@/components/epf/testimonials-section"
import FaqSection from "@/components/epf/faq-section"
import Footer from "@/components/epf/footer"
import WhatsAppButton from "@/components/epf/whatsapp-button"
import ContactForm from "@/components/epf/contact-form"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
