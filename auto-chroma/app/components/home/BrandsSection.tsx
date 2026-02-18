import AnimateOnScroll from "../AnimateOnScroll";
import SectionHeading from "../SectionHeading";
import { Star, Sparkles } from "lucide-react";

const brands = [
  {
    name: "AutoChroma",
    type: "Our Premium Brand",
    description: "Our flagship in-house automotive paint brand — exceptional quality, value, and performance.",
    initials: "AC",
    gradient: "from-red via-crimson to-red-dark",
    featured: true,
  },
  {
    name: "Pure Care",
    type: "Our Care Brand",
    description: "Complete car care solutions — polishes, compounds, cleaners, and maintenance products.",
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
    type: "Principal Partner",
    description: "High-performance decorative and protective coating solutions for every surface.",
    initials: "SP",
    gradient: "from-emerald-500 to-emerald-700",
    featured: false,
  },
  {
    name: "Jotun Paints",
    type: "Principal Partner",
    description: "Norwegian excellence in protective and marine coatings trusted worldwide.",
    initials: "JP",
    gradient: "from-sky-500 to-sky-700",
    featured: false,
  },
  {
    name: "Hempel Paints",
    type: "Principal Partner",
    description: "Industry-leading coating solutions for industrial and infrastructure projects.",
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a] via-[#0f1b4c] to-[#0a1035]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red/8 blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          subtitle="Our Brands & Partners"
          title="Powered by World-Class Brands"
          description="We partner with leading global manufacturers and offer our own premium brands to deliver unmatched quality and variety."
          light
        />

        {/* Brand cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {brands.map((brand, i) => (
            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
              <div className={`group rounded-2xl p-6 lg:p-8 border transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden ${
                brand.featured
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
