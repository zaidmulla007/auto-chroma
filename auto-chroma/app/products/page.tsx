import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Car,
  Factory,
  SprayCan,
  Sparkles,
  Shield,
  Droplets,
  Layers,
  CheckCircle,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our comprehensive range of automotive paints, industrial coatings, polishes, abrasives, and accessories. AutoChroma, Pure Care, Nexa Autocolor, Sigma, Jotun, Hempel.",
};

const productCategories = [
  {
    id: "autochroma",
    name: "AutoChroma",
    tagline: "Our Premium Paint Brand",
    description:
      "AutoChroma is our flagship in-house automotive paint brand, engineered to deliver professional-grade finishes with exceptional colour accuracy, durability, and ease of application. Developed through extensive research, AutoChroma offers a complete range of basecoats, clearcoats, primers, and hardeners for the modern refinish workshop.",
    icon: Palette,
    features: [
      "Complete basecoat & clearcoat system",
      "Advanced colour matching technology",
      "High durability & UV resistance",
      "Easy application & fast drying",
      "Competitive pricing for maximum value",
      "Full technical support included",
    ],
    accent: "from-red to-red-dark",
    featured: true,
  },
  {
    id: "purecare",
    name: "Pure Care",
    tagline: "Complete Car Care Solutions",
    description:
      "Pure Care is our dedicated car care product line, designed to keep vehicles looking their best. From premium polishes and compounds to specialized cleaners and protectants, Pure Care offers everything needed for professional-quality vehicle detailing and maintenance.",
    icon: Sparkles,
    features: [
      "Professional-grade polishes & compounds",
      "Interior & exterior cleaners",
      "Paint protection solutions",
      "Waxes & sealants",
      "Microfiber & detailing accessories",
      "Eco-friendly formulations",
    ],
    accent: "from-blue-600 to-blue-800",
    featured: true,
  },
  {
    id: "nexa",
    name: "Nexa Autocolor",
    tagline: "World-Class Refinish Solutions",
    description:
      "Nexa Autocolor delivers state-of-the-art automotive refinish paints with one of the most comprehensive colour libraries in the world. Known for precision colour matching and superior finish quality, Nexa Autocolor products are trusted by professional body shops globally.",
    icon: Car,
    features: [
      "Extensive colour formula library",
      "Precision colour matching system",
      "Water-based & solvent-based options",
      "Complete refinish system",
      "Professional training & support",
      "Environmentally compliant formulas",
    ],
    accent: "from-navy to-navy-dark",
    featured: false,
  },
  {
    id: "industrial",
    name: "Industrial Coatings",
    tagline: "Sigma • Jotun • Hempel",
    description:
      "We are authorized distributors of the world's leading industrial coating brands — Sigma Paints, Jotun Paints, and Hempel Paints. These brands offer high-performance protective and decorative coatings for infrastructure, marine, oil & gas, and industrial applications.",
    icon: Factory,
    features: [
      "Anti-corrosion protective coatings",
      "Marine & offshore solutions",
      "Structural steel protection",
      "Floor coating systems",
      "High-temperature coatings",
      "Fire-resistant coatings",
    ],
    accent: "from-emerald-600 to-emerald-800",
    featured: false,
  },
  {
    id: "accessories",
    name: "Accessories & Ancillaries",
    tagline: "Everything You Need",
    description:
      "Beyond paints and coatings, we supply a comprehensive range of supporting products essential for professional paint application. From abrasives and masking tapes to spray guns and mixing equipment, we're your one-stop shop.",
    icon: SprayCan,
    features: [
      "Abrasive discs & sandpapers",
      "Masking tapes & films",
      "Polishing compounds & pads",
      "Spray guns & accessories",
      "Mixing cups & equipment",
      "Safety & PPE supplies",
    ],
    accent: "from-amber-500 to-amber-700",
    featured: false,
  },
];

const additionalProducts = [
  { icon: Droplets, name: "Primers & Fillers", description: "Surface preparation and filling solutions" },
  { icon: Layers, name: "Clearcoats", description: "High-gloss protective topcoat systems" },
  { icon: Shield, name: "Hardeners & Activators", description: "Curing agents for paint systems" },
  { icon: SprayCan, name: "Thinners & Reducers", description: "Solvents for paint viscosity control" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#080e2a]"></div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-red/15 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`, backgroundSize: "80px 80px" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-red-light">Our Products</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Premium Paints &{" "}
            <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">Coatings</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The best coating technologies for every need. Explore our comprehensive range of automotive refinish paints, industrial coatings, and car care products.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Product Range"
            title="Everything Under One Roof"
            description="From our own premium brands to internationally acclaimed paint manufacturers — we offer the most comprehensive range in the region."
          />

          <div className="space-y-16 lg:space-y-24">
            {productCategories.map((category, i) => (
              <AnimateOnScroll
                key={category.id}
                animation={
                  i % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
                }
              >
                <div
                  id={category.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                      i % 2 === 1 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image / Visual card */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div
                        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${category.accent} p-8 sm:p-12 min-h-[300px] sm:min-h-[380px] flex flex-col justify-between`}
                      >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                          <category.icon
                            size={48}
                            className="text-white/80 mb-6"
                          />
                          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            {category.name}
                          </h3>
                          <p className="text-white/80 text-lg">
                            {category.tagline}
                          </p>
                        </div>

                        {category.featured && (
                          <div className="relative z-10 mt-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold backdrop-blur-sm">
                              <Sparkles size={12} />
                              Rukn Al Alwan Brand
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mb-4">
                        {category.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {category.features.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-2.5">
                            <CheckCircle
                              size={16}
                              className="text-red shrink-0 mt-0.5"
                            />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-red transition-colors"
                      >
                        Enquire About {category.name}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Also Available"
            title="Supporting Products"
            description="Essential products to complement our paint and coatings range."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalProducts.map((product, i) => (
              <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg border border-gray-100 hover:border-red/20 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
                    <product.icon size={28} className="text-navy" />
                  </div>
                  <h3 className="font-bold text-navy text-sm sm:text-base mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {product.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#1a0a0a]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-crimson/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Our technical team can help you find the perfect paint or coating solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1 text-[15px]"
              >
                Contact Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#" className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-white font-bold rounded-full hover:bg-white/15 transition-all duration-300 border border-white/20 backdrop-blur-sm text-[15px]">
                Download Catalogue
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Spacer between CTA and Footer */}
      <div className="h-10 sm:h-14 bg-gray-100"></div>
    </>
  );
}
