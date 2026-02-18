"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-navy-dark via-navy to-navy-dark text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2.5 gap-1.5 sm:gap-0">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="tel:+97165566979" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
                <Phone size={12} className="text-red-light" />
                <span>+971 6 5566979</span>
              </a>
              <span className="hidden sm:block w-px h-3 bg-white/20"></span>
              <a href="mailto:info@colourcorneruae.com" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
                <Mail size={12} className="text-red-light" />
                <span>info@colourcorneruae.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400">
              <MapPin size={12} className="text-red-light" />
              <span>Industrial Area 11, Sharjah, UAE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]" : "bg-white shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <Image src="/logo.jpg" alt="Rukn Al Alwan Logo" width={48} height={48} className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-lg shadow-sm group-hover:shadow-md transition-shadow" />
              <div className="hidden sm:block">
                <h1 className="text-sm lg:text-[15px] font-bold text-navy leading-tight tracking-tight">Rukn Al Alwan</h1>
                <p className="text-[10px] lg:text-[11px] text-gray-400 leading-tight font-medium tracking-wide uppercase">Auto Paints & Spare Parts</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${pathname === link.href ? "text-red" : "text-gray-600 hover:text-navy"}`}>
                  {link.name}
                  {pathname === link.href && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[3px] bg-gradient-to-r from-red to-crimson rounded-full"></span>}
                </Link>
              ))}
              <Link href="/contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-red to-crimson text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-red/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5">
                Get a Quote <ChevronRight size={14} className="opacity-70" />
              </Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2.5 rounded-xl text-navy hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 py-4 bg-white border-t border-gray-100 space-y-1.5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${pathname === link.href ? "bg-gradient-to-r from-red to-crimson text-white shadow-md shadow-red/20" : "text-gray-600 hover:bg-gray-50 hover:text-navy"}`}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="block px-4 py-3 bg-gradient-to-r from-navy to-navy-light text-white text-sm font-bold rounded-xl text-center mt-3 shadow-md">Get a Quote</Link>
          </div>
        </div>
      </nav>
    </>
  );
}
