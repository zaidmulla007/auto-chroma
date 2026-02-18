import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e] via-[#0f1b4c] to-[#1a0a0a]"></div>
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red/15 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-crimson/10 rounded-full blur-[100px]"></div>
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-red-light">Get Started Today</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Transform Your<br />
          <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">Paint Solutions?</span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you need automotive refinish paints, industrial coatings, or expert advice — we&apos;re here to help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1 text-[15px]"
          >
            Get a Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+97165566979"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-white font-bold rounded-full hover:bg-white/15 transition-all duration-300 border border-white/20 backdrop-blur-sm text-[15px]"
          >
            <Phone size={18} className="text-red-light" />
            +971 6 5566979
          </a>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="relative z-10 border-b border-white/10"></div>
    </section>
  );
}
