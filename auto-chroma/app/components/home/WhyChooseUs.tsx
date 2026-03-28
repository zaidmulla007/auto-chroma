import Image from "next/image";
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
    description: "From automotive refinish paints, industrial coatings to various consumables like polishes, abrasives etc everything under one roof.",
    color: "from-violet-500 to-purple-700",
    bg: "bg-purple-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Comprehensive technical guidance, colour matching support, and overall after sales support.",
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Truck,
    title: "Reliable Supplier",
    description: "Efficient distribution ensuring timely delivery across the UAE with consistent uninterrupted stock availability.",
    color: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: ShieldCheck,
    title: "Certified Products",
    description: "All products are certified and tested to meet international standards considering stringent industry requirements for every application.",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
  },
  {
    icon: Handshake,
    title: "Customer Focus",
    description: "We prioritize on your profitability with competitively priced, highest standard of products with strong focus on partnerships.",
    color: "from-teal-500 to-teal-700",
    bg: "bg-teal-50",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Full section background image */}
      <div className="absolute inset-0">
        <Image src="/png-08.jpg" alt="Professional spray painting" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/85"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Your Success Is Our Priority"
          description="Only one thing lasts longer than our coatings is our commitment to our customers. Here's why hundreds of businesses trust Rukn Al Alwan."
          light
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((reason, i) => (
            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-7 lg:p-8 border border-white/10 hover:bg-white/20 hover:border-white/25 transition-all duration-500 h-full hover:-translate-y-1.5 relative overflow-hidden">
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
