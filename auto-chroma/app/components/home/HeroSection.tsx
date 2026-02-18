"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Paintbrush, Shield, Factory, HeadphonesIcon } from "lucide-react";

const featureCards = [
  { icon: Paintbrush, title: "Automotive Paints", desc: "Premium refinish from world-leading brands", color: "from-red to-rose-600" },
  { icon: Shield, title: "Quality Assured", desc: "Certified to international standards", color: "from-emerald-500 to-emerald-700" },
  { icon: Factory, title: "Industrial Coatings", desc: "Protective coatings for all industries", color: "from-blue-500 to-blue-700" },
  { icon: HeadphonesIcon, title: "Expert Support", desc: "Guidance from experienced professionals", color: "from-amber-500 to-orange-600" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Vivid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#080e2a]"></div>
        {/* Colorful paint splashes */}
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-red/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[100px]"></div>
        <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full bg-crimson/10 blur-[100px]"></div>
        <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-amber-500/8 blur-[80px]"></div>
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`, backgroundSize: "80px 80px" }}></div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080e2a] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6 lg:pt-8 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="animate-fadeInUp">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold text-white border border-white/10 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-light animate-pulse"></span>
                Premium Auto Paints Since Establishment
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold leading-[1.08] mb-6 animate-fadeInUp delay-100 text-white">
              Adding{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">Colour</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round"/><defs><linearGradient id="grad"><stop stopColor="#EF4444"/><stop offset="1" stopColor="#E11D48"/></linearGradient></defs></svg>
              </span>
              <br />to Your Drive
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed animate-fadeInUp delay-200">
              Premium automotive &amp; industrial paints, coatings, and accessories.
              Your one-stop destination for the finest paint solutions in the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-300">
              <Link href="/products" className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1 text-[15px]">
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-full hover:bg-white/15 transition-all duration-300 border border-white/25 backdrop-blur-sm text-[15px]">
                Contact Us
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/10 animate-fadeInUp delay-400">
              <div className="text-center px-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">500<span className="text-red-light">+</span></p>
                <p className="text-gray-400 text-xs font-medium mt-1">Happy Clients</p>
              </div>
              <div className="w-px h-10 bg-white/15"></div>
              <div className="text-center px-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15<span className="text-red-light">+</span></p>
                <p className="text-gray-400 text-xs font-medium mt-1">Years Experience</p>
              </div>
              <div className="w-px h-10 bg-white/15"></div>
              <div className="text-center px-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">6<span className="text-red-light">+</span></p>
                <p className="text-gray-400 text-xs font-medium mt-1">Major Brands</p>
              </div>
            </div>
          </div>

          {/* Right - Feature cards */}
          <div className="hidden lg:grid grid-cols-2 gap-5 animate-fadeInUp delay-300">
            {featureCards.map((card, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 flex flex-col">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-white/40" />
        </div>
      </div>
    </section>
  );
}
