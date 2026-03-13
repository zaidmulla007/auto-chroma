import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  Car,
  SprayCan,
  Sparkles,
  Shield,
  Droplets,
  Layers,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our comprehensive range of automotive paints, industrial coatings, and car detailing products. AutoChroma, Pure Care, Nexa Autocolor, Sigma, Jotun, Nippon, National, Hempel.",
};

const productCategories = [
  {
    id: "autochroma",
    name: "AutoChroma",
    tagline: "Our Value line Paint Brand",
    description:
      "AutoChroma is our flagship in-house automotive paint brand, engineered to deliver professional quality finishes with exceptional colour accuracy, durability, and ease of application. AutoChroma offers a complete range of paint items that includes 2K paints, Basecoats, Clear coats, Hardner Primer, Thinner, Polyster putty, Polyurethanes, Epoxys for the modern refinish bodyshop. The range also includes varied consumable items.",
    icon: Palette,
    features: [
      "Complete 2K, Basecoat & Ancillary system",
      "High durability & Easy to Apply",
      "Competitive pricing — Value for Money",
      "Full technical and colour support",
    ],
    accent: "from-red to-red-dark",
    featured: true,
    website: null,
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
    website: "https://www.nexaautocolor.com",
  },
];

const industrialBrands = [
  {
    id: "sigma",
    name: "Sigma Paints",
    initials: "SP",
    gradient: "from-emerald-500 to-emerald-700",
    description:
      "Sigma Protective Coatings concentrates on the development of high quality products which solve problems for customers and provide distinctive benefits. Sigma has a global operation covering all continents in 70 countries. PMC offers best-in-class products for marine, infrastructure, chemical processing, power, oil and gas, offshore and rail industry segments. PMC protects customer's assets in some of the world's most demanding conditions and environments.",
    segments: [
      "Marine",
      "Infrastructure",
      "Chemical Processing",
      "Power",
      "Oil & Gas",
      "Offshore",
      "Rail",
    ],
    website: "https://protective-en.sigmapaints.com",
  },
  {
    id: "jotun",
    name: "Jotun Paints",
    initials: "JP",
    gradient: "from-sky-500 to-sky-700",
    description:
      "Jotun Protects Property. Jotun is one of the world's leading paints and coatings manufacturers, combining the best quality with constant innovation and creativity. For almost a century, Jotun has protected all types of property — from iconic structures and buildings to beautiful homes.",
    segments: [
      "Protective Coatings",
      "Marine",
      "Decorative",
      "Powder Coatings",
    ],
    website: "https://www.jotun.com",
  },
  {
    id: "nippon",
    name: "Nippon Paints",
    initials: "NP",
    gradient: "from-orange-500 to-red-600",
    description:
      "NIPPON PAINT provides protective coatings in a wide range of fields, including bridges, other infrastructures and plants, based on accumulated technology through a long history of experience. Nippon Paint also applies cutting-edge technology cultivated in automotive coatings to auto refinish technology, providing optimal solutions for the automotive aftermarket with water-based products that contribute to safe working environments and reduced environmental impact.",
    segments: [
      "Protective Coatings",
      "Automotive Refinish",
      "Infrastructure",
      "Industrial",
    ],
    website: "https://www.nipponpaint.co.jp/en/products/protective-coatings/",
    websiteAuto:
      "https://www.nipponpaint.co.jp/en/products/automotive-refinish/",
  },
  {
    id: "national",
    name: "National Paints",
    initials: "NP",
    gradient: "from-teal-500 to-teal-700",
    description:
      "National Paints is a leading paint manufacturer in the Middle East, offering a comprehensive range of interior and exterior paints, professional coatings, and decorative finishes. Known for quality and innovation, National Paints serves both home users and professional contractors across the region.",
    segments: [
      "Interior Paints",
      "Exterior Paints",
      "Professional Coatings",
      "Decorative Finishes",
    ],
    website: "https://nationalpaints.com",
  },
  {
    id: "hempel",
    name: "Hempel Paints",
    initials: "HP",
    gradient: "from-amber-500 to-orange-600",
    description:
      "Hempel provides industry-leading protective coating solutions for energy, infrastructure, marine, and industrial applications. With the mission to make the world last longer beautifully, Hempel delivers high-performance coatings that optimise asset performance and protect against corrosion in the most demanding environments.",
    segments: [
      "Energy & Infrastructure",
      "Marine",
      "Industrial",
      "Decorative",
    ],
    website: "https://www.hempel.com",
  },
];

const additionalProducts = [
  {
    icon: Droplets,
    name: "Primers & Fillers",
    description: "Surface preparation and filling solutions",
  },
  {
    icon: Layers,
    name: "Clearcoats",
    description: "High-gloss protective topcoat systems",
  },
  {
    icon: Shield,
    name: "Hardeners & Activators",
    description: "Curing agents for paint systems",
  },
  {
    icon: SprayCan,
    name: "Thinners & Reducers",
    description: "Solvents for paint viscosity control",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/png-07.jpg" alt="Premium automotive paints" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e]/90 via-[#0f1b4c]/85 to-[#080e2a]/90"></div>
        </div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-red/15 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-red-light">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Premium Paints &{" "}
            <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">
              Consumables
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The best coating technology for every need and every space.<br/> Explore our
            comprehensive range of automotive refinish paints, industrial
            paints, and paint accessories.
          </p>
        </div>
      </section>

      {/* AutoChroma & Nexa */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Automotive Paints"
            title="Our Automotive Paint Range"
            description="From our own premium AutoChroma brand to internationally acclaimed Nexa Autocolor — professional refinish solutions for every workshop."
          />

          <div className="space-y-16 lg:space-y-24">
            {productCategories.map((category, i) => (
              <AnimateOnScroll
                key={category.id}
                animation={
                  i % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
                }
              >
                <div id={category.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""
                      }`}
                  >
                    {/* Visual card */}
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <div
                        className={`relative rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[380px]`}
                      >
                        <Image src={i === 0 ? "/png-10.jpg" : "/png-14.jpg"} alt={category.name} fill className="object-cover" />
                        <div className={`absolute inset-0 bg-gradient-to-t ${category.accent} opacity-60`}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        <div className="relative z-10 p-8 sm:p-12 flex flex-col justify-between h-full">
                          <div>
                            <category.icon
                              size={48}
                              className="text-white/90 mb-6"
                            />
                            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                              {category.name}
                            </h3>
                            <p className="text-white/80 text-lg">
                              {category.tagline}
                            </p>
                          </div>

                          {category.featured && (
                            <div className="mt-6">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold backdrop-blur-sm">
                                <Sparkles size={12} />
                                Rukn Al Alwan Brand
                              </span>
                            </div>
                          )}
                        </div>
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
                      <div className="flex flex-wrap gap-3">
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
                        {category.website && (
                          <a
                            href={category.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-red transition-colors"
                          >
                            <ExternalLink size={14} />
                            Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Paints Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a] via-[#0f1b4c] to-[#0a1035]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red/8 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            subtitle="Industrial Coatings"
            title="Industrial Paint Solutions"
            description="Authorized distributors of the world's leading industrial coating brands — delivering high-performance protective and decorative coatings for every industry."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {industrialBrands.map((brand, i) => (
              <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                <div
                  id={brand.id}
                  className="scroll-mt-24 group rounded-2xl p-6 lg:p-8 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 h-full hover:-translate-y-2 relative overflow-hidden"
                >
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${brand.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white text-lg font-extrabold tracking-tight">
                        {brand.initials}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-white mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {brand.description}
                    </p>

                    {/* Segments */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {brand.segments.map((seg, si) => (
                        <span
                          key={si}
                          className="px-2.5 py-1 bg-white/[0.08] text-gray-300 text-[11px] rounded-full font-medium"
                        >
                          {seg}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10">
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-red-light text-sm font-semibold hover:text-white transition-colors"
                      >
                        <ExternalLink size={13} />
                        Visit Website
                      </a>
                      {"websiteAuto" in brand && brand.websiteAuto && (
                        <a
                          href={brand.websiteAuto}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-red-light text-sm font-semibold hover:text-white transition-colors"
                        >
                          <ExternalLink size={13} />
                          Auto Refinish
                        </a>
                      )}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        Enquire
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories & Ancillaries */}
      <section className="section-padding bg-gray-50" id="accessories">
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
              Our technical team can help you find the perfect paint or coating
              solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1 text-[15px]"
              >
                Contact Our Team
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-white font-bold rounded-full hover:bg-white/15 transition-all duration-300 border border-white/20 backdrop-blur-sm text-[15px]"
              >
                Download Catalogue
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10 sm:h-14 bg-gray-100"></div>
    </>
  );
}
