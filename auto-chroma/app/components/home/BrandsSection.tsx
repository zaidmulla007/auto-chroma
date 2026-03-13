import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";
import SectionHeading from "../SectionHeading";
import { Star, Sparkles } from "lucide-react";

const brands = [
  {
    name: "AutoChroma",
    type: "Our Premium Brand",
    description: "Our flagship in-house automotive paint brand — 2K Basecoats, Polyurethanes, Epoxys, Clearcoats, Primers, and Putty.",
    initials: "AC",
    gradient: "from-red via-crimson to-red-dark",
    featured: true,
  },
  {
    name: "Pure Care",
    type: "Auto Accessories & Detailing",
    description: "Professional car detailing — exterior polishing, interior cleaning, ceramic coating, paint protection, and more.",
    initials: "PC",
    gradient: "from-blue-500 via-blue-600 to-blue-700",
    featured: true,
  },
  {
    name: "Nexa Autocolor",
    type: "Principal Partner",
    description: "World-class automotive refinish paints with advanced colour matching technology.",
    initials: "NA",
    gradient: "from-violet-500 to-purple-700",
    featured: false,
  },
  {
    name: "Sigma Paints",
    type: "Industrial Partner",
    description: "Global protective coatings for marine, infrastructure, chemical processing, oil & gas, and rail industries.",
    initials: "SP",
    gradient: "from-emerald-500 to-emerald-700",
    featured: false,
  },
  {
    name: "Jotun Paints",
    type: "Industrial Partner",
    description: "World-leading paints and coatings — protecting iconic structures, buildings, and homes for almost a century.",
    initials: "JP",
    gradient: "from-sky-500 to-sky-700",
    featured: false,
  },
  {
    name: "Nippon Paints",
    type: "Industrial & Auto Refinish",
    description: "Protective coatings for infrastructure and cutting-edge automotive refinish technology from Japan.",
    initials: "NP",
    gradient: "from-orange-500 to-red-600",
    featured: false,
  },
  {
    name: "National Paints",
    type: "Regional Partner",
    description: "Leading Middle East paint manufacturer — interior, exterior, and professional coating solutions.",
    initials: "NP",
    gradient: "from-teal-500 to-teal-700",
    featured: false,
  },
  {
    name: "Hempel Paints",
    type: "Industrial Partner",
    description: "Industry-leading coating solutions for energy, infrastructure, marine, and industrial applications.",
    initials: "HP",
    gradient: "from-amber-500 to-orange-600",
    featured: false,
  },
];

const clients = [
  "Polymar Paints",
  "Shaji Paints",
  "Galadari Automobiles",
  "MPE (Multiple Product Enterprises)",
  "Ugarit Paints",
  "Trichy Trading",
  "Arabian Options",
];

export default function BrandsSection() {
  return (
    <section className="section-padding overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/png-04.jpg" alt="Automotive workshop" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a]/90 via-[#0f1b4c]/88 to-[#0a1035]/90"></div>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red/8 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Our Brands & Partners"
          title="Powered by World-Class Brands"
          description="We partner with leading global manufacturers and offer our own premium brands to deliver unmatched quality and variety across automotive and industrial sectors."
          light
        />

        {/* Brand cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16">
          {brands.map((brand, i) => (
            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
              <div className={`group rounded-2xl p-6 lg:p-8 border transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden ${brand.featured
                ? "bg-white/[0.08] border-red/30 hover:border-red/50 hover:bg-white/[0.12]"
                : "bg-white/[0.04] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08]"
                }`}>
                {/* Hover glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${brand.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Brand logo placeholder */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-lg font-extrabold tracking-tight">{brand.initials}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-extrabold text-white">{brand.name}</h3>
                    {brand.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red/25 text-red-light text-[10px] font-bold rounded-full uppercase tracking-wider border border-red/20">
                        <Sparkles size={9} />
                        Ours
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mb-3 uppercase tracking-wider font-semibold">{brand.type}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{brand.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Clients */}
        <AnimateOnScroll>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">Our Trusted Business Partners</h3>
            <p className="text-gray-400 text-sm">Proudly serving leading companies across the UAE</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {clients.map((client, i) => (
              <div key={i} className="group px-5 py-3 bg-white/[0.05] border border-white/[0.08] rounded-full text-sm text-gray-300 hover:bg-white/[0.12] hover:text-white hover:border-white/20 transition-all duration-300 cursor-default flex items-center gap-2">
                <Star size={12} className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                {client}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
