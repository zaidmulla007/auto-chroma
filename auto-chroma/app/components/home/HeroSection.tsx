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
        {/* Spray Gun on LEFT, spraying RIGHT toward feature cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* ===== THE SPRAY GUN (left side, nozzle pointing right) ===== */}
          <svg className="absolute left-[-2%] top-[15%] w-[350px] h-[500px] lg:w-[420px] lg:h-[600px] opacity-40" viewBox="0 0 200 300" fill="none" style={{ animation: "gunRecoil 0.6s ease-in-out infinite" }}>
            {/* Canister on top */}
            <rect x="85" y="10" width="30" height="75" rx="8" fill="none" stroke="#7B8CA8" strokeWidth="2" />
            <rect x="89" y="16" width="22" height="62" rx="5" fill="#3A4D6E" opacity="0.5" />
            <rect x="80" y="5" width="40" height="10" rx="4" fill="none" stroke="#7B8CA8" strokeWidth="2" />
            {/* Paint level */}
            <rect x="91" y="40" width="18" height="30" rx="4" fill="#EF4444" opacity="0.25" />
            <rect x="91" y="55" width="18" height="15" rx="4" fill="#3B82F6" opacity="0.2" />

            {/* Gun body */}
            <rect x="60" y="82" width="80" height="30" rx="6" fill="#3A4D6E" opacity="0.6" stroke="#7B8CA8" strokeWidth="1.5" />
            <rect x="55" y="88" width="90" height="18" rx="5" fill="#4A5F80" opacity="0.5" />
            <rect x="65" y="93" width="65" height="4" rx="2" fill="#7B8CA8" opacity="0.4" />

            {/* Nozzle */}
            <rect x="25" y="92" width="35" height="10" rx="3" fill="#4A5F80" opacity="0.6" stroke="#7B8CA8" strokeWidth="1" />
            <rect x="12" y="94" width="18" height="6" rx="2" fill="#5A6F90" opacity="0.7" />
            {/* Air cap */}
            <circle cx="8" cy="97" r="12" fill="none" stroke="#8B9CB8" strokeWidth="2.5" />
            <circle cx="8" cy="97" r="7" fill="#4A5F80" opacity="0.5" stroke="#7B8CA8" strokeWidth="1" />
            <circle cx="8" cy="97" r="3.5" fill="#7B8CA8" opacity="0.6" />

            {/* Top knob */}
            <rect x="95" y="-2" width="10" height="12" rx="4" fill="#4A5F80" stroke="#7B8CA8" strokeWidth="1" />
            {/* Side knob */}
            <rect x="140" y="92" width="18" height="8" rx="4" fill="#4A5F80" stroke="#7B8CA8" strokeWidth="1" />

            {/* Trigger - PRESSED */}
            <path d="M 90 112 Q 100 135 110 112" fill="#3A4D6E" stroke="#8B9CB8" strokeWidth="1.5" />

            {/* Handle */}
            <rect x="82" y="110" width="36" height="70" rx="8" fill="#3A4D6E" opacity="0.6" stroke="#7B8CA8" strokeWidth="1.5" />
            <rect x="87" y="118" width="26" height="55" rx="5" fill="#4A5F80" opacity="0.4" />
            <line x1="90" y1="130" x2="110" y2="130" stroke="#7B8CA8" strokeWidth="1" opacity="0.5" />
            <line x1="90" y1="138" x2="110" y2="138" stroke="#7B8CA8" strokeWidth="1" opacity="0.5" />
            <line x1="90" y1="146" x2="110" y2="146" stroke="#7B8CA8" strokeWidth="1" opacity="0.5" />
            <line x1="90" y1="154" x2="110" y2="154" stroke="#7B8CA8" strokeWidth="1" opacity="0.5" />
            <ellipse cx="100" cy="180" rx="18" ry="5" fill="#3A4D6E" stroke="#7B8CA8" strokeWidth="1" />

            {/* Nozzle glow — only this part is bright */}
            <circle cx="0" cy="97" r="8" fill="#EF4444" opacity="0.9">
              <animate attributeName="r" values="6;12;6" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="97" r="5" fill="#3B82F6" opacity="0.7">
              <animate attributeName="r" values="4;9;4" dur="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="97" r="3" fill="#ffffff" opacity="0.9">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="0.6s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* ===== SPRAY PAINT CONE — starts right at gun nozzle, fans out RIGHT ===== */}
          <div className="absolute" style={{
            left: "22%",
            top: "8%",
            width: "78%",
            height: "70%",
            clipPath: "polygon(0% 46%, 0% 50%, 100% 100%, 100% 0%)",
          }}>
            {/* Red spray — upper */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(239,68,68,0.7) 0%, rgba(239,68,68,0.35) 15%, rgba(239,68,68,0.15) 35%, rgba(239,68,68,0.05) 55%, transparent 75%)",
              filter: "blur(20px)",
              animation: "sprayCone 3s ease-in-out infinite",
            }} />
            {/* Blue spray — lower */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to right, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.3) 15%, rgba(59,130,246,0.1) 35%, rgba(59,130,246,0.03) 55%, transparent 75%)",
              filter: "blur(22px)",
              animation: "sprayCone 3.5s ease-in-out infinite 0.5s",
            }} />
            {/* White-hot center core at nozzle tip */}
            <div className="absolute" style={{
              left: "0%",
              top: "35%",
              width: "30%",
              height: "30%",
              background: "linear-gradient(to right, rgba(255,255,255,0.5) 0%, rgba(255,220,220,0.15) 30%, transparent 70%)",
              filter: "blur(12px)",
              animation: "sprayCone 2.5s ease-in-out infinite 0.3s",
            }} />
            {/* Mixed color depth layer */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(170deg, rgba(239,68,68,0.2) 0%, transparent 35%), linear-gradient(190deg, rgba(59,130,246,0.2) 0%, transparent 35%)",
              filter: "blur(30px)",
              animation: "sprayCone 4s ease-in-out infinite 1s",
            }} />
          </div>
        </div>

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
                Premium Paint Solution Providers
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
