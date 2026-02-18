"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import SectionHeading from "../SectionHeading";

const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    role: "Workshop Owner, Dubai",
    content:
      "Rukn Al Alwan has been our go-to supplier for automotive paints for years. Their product quality and customer service are unmatched. The AutoChroma range delivers consistent results every time.",
    rating: 5,
  },
  {
    name: "Khalid Rahman",
    role: "Fleet Manager, Abu Dhabi",
    content:
      "The technical expertise they provide alongside their products sets them apart from the competition. Their team helped us choose the perfect coating solution for our entire fleet.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "Auto Body Shop Owner, Sharjah",
    content:
      "From ordering to delivery, the service is seamless. The Nexa Autocolor products they supply are top quality, and their colour matching support is outstanding.",
    rating: 5,
  },
  {
    name: "Faisal Al Qasimi",
    role: "Industrial Contractor, Ajman",
    content:
      "We use their industrial coatings for our projects and the quality speaks for itself. Reliable supply chain and competitive pricing make them an excellent partner.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-red/5 blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-navy/5 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it — hear from the businesses that trust us with their paint and coating needs."
        />

        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto">
            {/* Main testimonial card */}
            <div className="relative bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 sm:p-12 lg:p-14 border border-gray-100">
              {/* Large quote mark */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-10">
                <Quote size={56} className="text-red/8" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[active].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 text-lg sm:text-xl lg:text-[22px] leading-relaxed mb-10 italic font-medium">
                  &ldquo;{testimonials[active].content}&rdquo;
                </p>

                {/* Author & navigation */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                      {testimonials[active].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-extrabold text-navy text-lg">{testimonials[active].name}</p>
                      <p className="text-gray-400 text-sm font-medium">{testimonials[active].role}</p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2.5">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-navy hover:to-navy-light hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-red hover:to-crimson hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === active
                      ? "w-9 h-3 bg-gradient-to-r from-red to-crimson shadow-sm"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
