"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "Shop No: 4, Building No: 20",
      "Al-Rehan Street, Ind Area: 11",
      "Sharjah, UAE",
      "PO Box: 64047",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      { text: "+971 6 5566979", href: "tel:+97165566979" },
      { text: "+971 50 6553018", href: "tel:+971506553018" },
      { text: "+971 56 3930767", href: "tel:+971563930767" },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [
      {
        text: "info@colourcorneruae.com",
        href: "mailto:info@colourcorneruae.com",
      },
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Saturday - Thursday: 9:00 AM - 6:00 PM", "Friday: Closed"],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#080e2a]"></div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-red/15 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`, backgroundSize: "80px 80px" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-red-light">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question, need a quote, or want to discuss your paint requirements? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100 hover:border-red/20 hover:shadow-[0_12px_40px_rgba(220,38,38,0.1)] transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center mb-4">
                      <info.icon size={24} className="text-red" />
                    </div>
                    <h3 className="font-bold text-navy mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.lines.map((line, li) =>
                        typeof line === "string" ? (
                          <p key={li} className="text-gray-600 text-sm">
                            {line}
                          </p>
                        ) : (
                          <a
                            key={li}
                            href={line.href}
                            className="block text-gray-600 text-sm hover:text-red transition-colors"
                          >
                            {line.text}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
        </div>
      </section>

      {/* Contact form + Map */}
      <section className="section-padding bg-white pt-0 sm:pt-0 lg:pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <AnimateOnScroll animation="animate-slideInLeft">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-navy">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-500 text-sm">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We&apos;ll respond shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                          placeholder="+971 XX XXXXXXX"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1.5"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="quote">Request a Quote</option>
                          <option value="product">Product Inquiry</option>
                          <option value="technical">Technical Support</option>
                          <option value="partnership">
                            Partnership / Distribution
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red text-white font-semibold rounded-xl hover:bg-red-dark transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {sending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimateOnScroll>

            {/* Map */}
            <AnimateOnScroll animation="animate-slideInRight">
              <div className="h-full min-h-[400px] lg:min-h-0">
                <div className="rounded-2xl overflow-hidden shadow-xl h-full border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.123456789!2d55.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f595d125e4185%3A0x999b47f5d5a31370!2sRukn%20Al%20Alwan%20Auto.%20Paints%20%26%20Spare%20Parts%20Tr.%20LLC!5e0!3m2!1sen!2sae!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rukn Al Alwan Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Social + Direct contact */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media for the latest updates, products, and
                industry news.
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white hover:bg-red transition-colors shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white hover:bg-red transition-colors shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white hover:bg-red transition-colors shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              <div className="mt-10 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-600 text-sm mb-2">
                  For direct inquiries, contact:
                </p>
                <p className="font-bold text-navy text-lg">Dayanand Shetty</p>
                <p className="text-gray-500 text-sm">Managing Director</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
                  <a
                    href="tel:+971506553018"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-red transition-colors"
                  >
                    <Phone size={14} />
                    +971 50 6553018
                  </a>
                  <span className="hidden sm:inline text-gray-300">|</span>
                  <a
                    href="tel:+971563930767"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-red transition-colors"
                  >
                    <Phone size={14} />
                    +971 56 3930767
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
