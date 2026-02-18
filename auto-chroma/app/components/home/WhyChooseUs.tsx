import AnimateOnScroll from "../AnimateOnScroll";
import SectionHeading from "../SectionHeading";
import {
  Award,
  Truck,
  Palette,
  HeadphonesIcon,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only from world-renowned manufacturers, ensuring every product meets the highest international standards.",
    color: "from-red to-crimson",
    bg: "bg-red-50",
  },
  {
    icon: Palette,
    title: "Extensive Range",
    description: "From automotive refinish paints to industrial coatings, polishes, abrasives — everything under one roof.",
    color: "from-violet-500 to-purple-700",
    bg: "bg-purple-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Comprehensive technical guidance, colour matching expertise, and after-sales support for all your needs.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description: "Efficient distribution ensuring timely delivery across the UAE with consistent stock availability.",
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Certified Products",
    description: "All products are certified and tested to meet stringent industry requirements for every application.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description: "We prioritize your profitability with competitively priced, high-value products and strong partnerships.",
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Success Is Our Priority"
          description="Only one thing lasts longer than our coatings — our commitment to you. Here's why hundreds of businesses trust Rukn Al Alwan."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
              <div className="group bg-white rounded-2xl p-7 lg:p-8 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-transparent transition-all duration-500 h-full hover:-translate-y-1.5 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 ${reason.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy mb-3">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
