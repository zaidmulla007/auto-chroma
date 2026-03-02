import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Paintbrush,
    Factory,
    Car,
    Palette,
    Layers,
    Sofa,
    Wrench,
    Droplets,
    FlaskConical,
    Building2,
    Brush,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Rukn Al Alwan provides premium automotive paint supplies and industrial coating solutions across the UAE. Auto coating materials, industrial paints, oil field coatings, and more.",
};

const autoServices = [
    {
        icon: Car,
        title: "Refurbished Car Painting",
        description:
            "Complete range of paints and materials for vehicle repainting and restoration — bringing cars back to their original or upgraded appearance.",
    },
    {
        icon: Palette,
        title: "Decorative & Custom Paint Finishes",
        description:
            "Premium paint supplies for unique designs, color customization, and surface treatments tailored to client preferences.",
    },
    {
        icon: Layers,
        title: "Matte Finishing (Mat Finish Coating)",
        description:
            "Professional-grade matte and satin coating products for a modern, stylish look on any vehicle.",
    },
    {
        icon: Wrench,
        title: "Car Modification Paint Works",
        description:
            "Custom paint solutions and materials for modified vehicles, body kits, and performance upgrades.",
    },
    {
        icon: Sofa,
        title: "Car Interior Decoration & Refinishing",
        description:
            "Interior color customization supplies — dashboard refinishing, trim detailing, and aesthetic enhancement products.",
    },
];

const industrialServices = [
    {
        icon: Droplets,
        title: "Oil Field Coatings",
        description:
            "Heavy-duty protective coatings designed for oil & gas industry equipment, pipelines, and structures operating in extreme conditions.",
    },
    {
        icon: Building2,
        title: "Commercial Paint Solutions",
        description:
            "Industrial-grade coatings for warehouses, factories, commercial buildings, and large-scale infrastructure projects.",
    },
    {
        icon: Brush,
        title: "Decorative Industrial Paint",
        description:
            "High-quality decorative finishes and coatings for commercial and industrial properties, balancing aesthetics with durability.",
    },
    {
        icon: FlaskConical,
        title: "Chemical-Resistant Coatings",
        description:
            "Specialized coatings engineered for protection against chemicals, corrosion, and harsh environmental conditions.",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#080e2a]"></div>
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
                        Our Services
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Paint Solutions &{" "}
                        <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">
                            Services
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        We supply premium automotive paints, industrial coatings, and
                        ancillary products — empowering workshops, contractors, and
                        industries across the UAE.
                    </p>
                </div>
            </section>

            {/* Auto Coating & Customization */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        subtitle="Automotive Solutions"
                        title="Auto Coating & Customization"
                        description="We supply high-quality automotive paint products and materials for professional painting and customization. Our experienced team ensures you get the right products for precision, durability, and a flawless finish."
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {autoServices.map((service, i) => (
                            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                                <div className="group bg-gray-50 rounded-2xl p-7 lg:p-8 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-gray-100 transition-all duration-500 h-full hover:-translate-y-1.5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red to-crimson flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <service.icon size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-lg font-extrabold text-navy mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>

                    <AnimateOnScroll className="text-center mt-10">
                        <p className="text-gray-500 text-base italic max-w-2xl mx-auto">
                            We combine premium automotive coatings with expert product
                            guidance to ensure long-lasting beauty and protection for every
                            vehicle.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Industrial Paint Solutions */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#080e2a] via-[#0f1b4c] to-[#0a1035]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-red/8 blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <SectionHeading
                        subtitle="Industrial Solutions"
                        title="Industrial Paint Solutions"
                        description="We supply and distribute high-performance industrial paints suitable for the most demanding environments. Our products are designed for durability, corrosion resistance, and long-term protection."
                        light
                    />

                    <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
                        {industrialServices.map((service, i) => (
                            <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                                <div className="group rounded-2xl p-7 lg:p-8 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 h-full hover:-translate-y-2">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <service.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-extrabold text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimateOnScroll>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
                            Need the Right Paint Solution?
                        </h2>
                        <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                            Whether it&apos;s automotive refinish, industrial coatings, or
                            custom paint — our team can help you find exactly what you need.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1"
                            >
                                Get a Free Quote
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-all duration-300 border-2 border-navy"
                            >
                                View Products
                            </Link>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
