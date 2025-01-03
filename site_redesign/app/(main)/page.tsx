import { StepsSection } from "@/components/steps-section";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f9f5ec] to-white">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-soft flex items-center">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <Badge className="bg-[#cee4f7] text-[#2d4751]">Now in Toronto</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-[#2d4751] leading-tight">
                  Home Services, <br />
                  Made Simple
                </h1>
                <p className="text-xl text-[#2d4751]/70 leading-relaxed">
                  Book trusted professionals for all your home service needs. From cleaning to repairs, we've got you covered.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#2d4751] text-white rounded-lg px-8 py-4 font-medium hover:bg-[#2d4751]/90 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#2d4751]/20">
                    Book Now
                  </button>
                  <button className="bg-white text-[#2d4751] rounded-lg px-8 py-4 font-medium hover:bg-[#2d4751]/10 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#2d4751]/20">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative h-[500px] hidden md:block">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl overflow-hidden">
                  {/* Hero image or illustration goes here */}
                </div>
              </div>
            </div>
          </div>
          <div className="section-divider absolute bottom-0 left-0 right-0"></div>
        </section>

        {/* How It Works Section */}
        <StepsSection />

        {/* Services Section */}
        <section id="services" className="container py-24">
          <div className="text-center mb-16">
            <Badge className="bg-[#c8e093] text-[#2d4751] mb-4">Services</Badge>
            <h2 className="text-3xl font-semibold mb-4 text-[#2d4751]">Available Services</h2>
            <p className="text-lg text-[#2d4751]/70 max-w-2xl mx-auto">
              Professional home services at your fingertips. Book with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Cleaning",
                icon: "🧹",
                description: "Professional cleaning services for your home",
                price: "From $89",
                features: [
                  "Regular cleaning",
                  "Deep cleaning",
                  "Move in/out cleaning",
                  "Eco-friendly products",
                  "Trained professionals"
                ]
              },
              {
                title: "Handyman",
                icon: "🔧",
                description: "General repairs and home maintenance",
                price: "From $65/hr",
                features: [
                  "Furniture assembly",
                  "TV mounting",
                  "Plumbing repairs",
                  "Electrical work",
                  "Door & window repairs"
                ]
              },
              {
                title: "Lawn Care",
                icon: "🌿",
                description: "Complete lawn and garden maintenance",
                price: "From $45",
                features: [
                  "Lawn mowing",
                  "Garden maintenance",
                  "Tree trimming",
                  "Leaf removal",
                  "Seasonal cleanup"
                ]
              },
              {
                title: "Painting",
                icon: "🎨",
                description: "Interior and exterior painting services",
                price: "From $299/room",
                features: [
                  "Interior painting",
                  "Exterior painting",
                  "Cabinet painting",
                  "Color consultation",
                  "Premium materials"
                ]
              },
              {
                title: "Moving Help",
                icon: "📦",
                description: "Professional moving assistance",
                price: "From $89/hr",
                features: [
                  "Loading & unloading",
                  "Furniture disassembly",
                  "Packing services",
                  "Local moves",
                  "Heavy lifting"
                ]
              },
              {
                title: "Smart Home",
                icon: "🏠",
                description: "Smart home device installation and setup",
                price: "From $79",
                features: [
                  "Smart thermostat",
                  "Security cameras",
                  "Smart lighting",
                  "Doorbell installation",
                  "Home automation"
                ]
              }
            ].map((service) => (
              <div 
                key={service.title} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#2d4751]">{service.title}</h3>
                <p className="text-[#2d4751]/70 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-[#2d4751] mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-[#2d4751]/70">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#2d4751] text-white rounded-lg px-4 py-2 font-medium hover:bg-[#2d4751]/90 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#2d4751]/20">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="benefits" className="border-t border-[#2d4751]/10 bg-white/50">
          <div className="container py-24">
            <div className="text-center mb-16">
              <Badge className="bg-[#fbf1cd] text-[#2d4751] mb-4">Benefits</Badge>
              <h2 className="text-3xl font-semibold mb-4 text-[#2d4751]">Why Choose Nookly</h2>
              <p className="text-lg text-[#2d4751]/70 max-w-2xl mx-auto">
                We're revolutionizing home services with technology and trust.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Verified Professionals",
                  description: "Every service provider undergoes thorough background checks and skill verification."
                },
                {
                  title: "Instant Booking",
                  description: "Book services 24/7 through our platform. No more waiting for callbacks."
                },
                {
                  title: "Quality Guarantee",
                  description: "If you're not satisfied, we'll make it right or your money back."
                },
                {
                  title: "Transparent Pricing",
                  description: "See exact prices upfront. No hidden fees or surprises."
                }
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 p-6">
                  <div className="w-12 h-12 shrink-0 bg-[#c8e093] rounded-full flex items-center justify-center">
                    <span className="text-[#2d4751]">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2d4751]">{feature.title}</h3>
                    <p className="text-[#2d4751]/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container py-24">
          <div className="text-center mb-16">
            <Badge className="bg-[#fccfb2] text-[#2d4751] mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-semibold mb-4 text-[#2d4751]">Early Access Reviews</h2>
            <p className="text-lg text-[#2d4751]/70 max-w-2xl mx-auto">
              Here's what our beta users are saying about Nookly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally, a service that just works. No more endless phone calls and uncertainty.",
                author: "Sarah M.",
                role: "Homeowner"
              },
              {
                quote: "The quality of service providers is exceptional. Every booking has been perfect.",
                author: "Michael R.",
                role: "Property Manager"
              },
              {
                quote: "Love the real-time tracking. I always know exactly when my service provider will arrive.",
                author: "David L.",
                role: "Busy Professional"
              }
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="mb-4 text-[#2d4751]">★★★★★</div>
                <p className="text-[#2d4751] mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#2d4751]">{testimonial.author}</p>
                  <p className="text-sm text-[#2d4751]/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-y border-[#2d4751]/10 bg-gradient-to-b from-white to-[#f9f5ec]">
          <div className="container py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-[#c8e093] text-[#2d4751] mb-6">Early Access Benefits</Badge>
                <h2 className="text-3xl font-bold mb-4 text-[#2d4751]">Join our founding members</h2>
                <p className="text-lg text-[#2d4751]/70">Get exclusive benefits that last forever</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4751]/10 text-center transform hover:scale-[1.02] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#cee4f7] flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-3xl font-bold mb-2 text-[#2d4751]">25%</p>
                  <p className="text-[#2d4751]/70">Lifetime Discount</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4751]/10 text-center transform hover:scale-[1.02] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#c8e093] flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-3xl font-bold mb-2 text-[#2d4751]">24/7</p>
                  <p className="text-[#2d4751]/70">Priority Support</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#2d4751]/10 text-center transform hover:scale-[1.02] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#fbf1cd] flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <p className="text-3xl font-bold mb-2 text-[#2d4751]">First</p>
                  <p className="text-[#2d4751]/70">Access to Features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-[#c8e093] text-[#2d4751] mb-6">Limited Time Offer</Badge>
            <h2 className="text-4xl font-semibold mb-6 text-[#2d4751]">Join Our Founding Members</h2>
            <p className="text-xl text-[#2d4751]/70 mb-8">
              Get exclusive benefits including 25% lifetime discount, priority support, and early access to new features.
            </p>
            <button className="bg-[#2d4751] text-white rounded-lg px-8 py-4 font-medium hover:bg-[#2d4751]/90 transition-all transform hover:scale-[1.02] focus:ring-2 focus:ring-[#2d4751]/20">
              Create my account
            </button>
            <p className="mt-4 text-sm text-[#2d4751]/70">
              No credit card required • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2d4751]/10 bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-4 gap-12">
            <div className="col-span-4 md:col-span-1">
              <h4 className="font-bold mb-4 text-[#2d4751]">About Nookly</h4>
              <p className="text-sm text-[#2d4751]/70 leading-relaxed">
                Your trusted platform for connecting homeowners with qualified local service providers. Making home services simple and reliable.
              </p>
            </div>

            <div className="col-span-4 md:col-span-1">
              <h4 className="font-bold mb-4 text-[#2d4751]">Legal</h4>
              <ul className="space-y-3">
                <li><Link href="/terms" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/cookies" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            <div className="col-span-4 md:col-span-1">
              <h4 className="font-bold mb-4 text-[#2d4751]">Contact</h4>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">Contact Us</Link></li>
                <li><Link href="/support" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">Support</Link></li>
                <li><Link href="/faq" className="text-sm text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div className="col-span-4 md:col-span-1">
              <h4 className="font-bold mb-4 text-[#2d4751]">Follow Us</h4>
              <p className="text-sm text-[#2d4751]/70 leading-relaxed mb-4">
                Stay updated on our launch and early access opportunities.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </Link>
                <Link href="#" className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </Link>
                <Link href="#" className="text-[#2d4751]/70 hover:text-[#2d4751] transition-colors">
                  <span className="sr-only">Instagram</span>
                  📸
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2d4751]/10 text-center text-sm text-[#2d4751]/60">
            &copy; 2024 Nookly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
