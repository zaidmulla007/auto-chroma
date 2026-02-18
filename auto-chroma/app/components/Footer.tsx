import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";
import BackToTop from "./BackToTop";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  { name: "AutoChroma Paints", href: "/products#autochroma" },
  { name: "Pure Care", href: "/products#purecare" },
  { name: "Nexa Autocolor", href: "/products#nexa" },
  { name: "Industrial Coatings", href: "/products#industrial" },
  { name: "Accessories", href: "/products#accessories" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Rukn Al Alwan"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded bg-white p-1"
              />
              <div>
                <h3 className="font-bold text-lg">Rukn Al Alwan</h3>
                <p className="text-xs text-gray-400">
                  Auto Paints & Spare Parts
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted partner for premium automotive and industrial paints,
              coatings, and accessories in the UAE since establishment.
            </p>
            <p className="text-gray-300 text-sm italic">
              &ldquo;Adding Colour to Your Drive&rdquo;
            </p>
            {/* Social media */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-red transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red"></span>
            </h4>
            <ul className="space-y-2.5 mt-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-red-light transition-colors hover:pl-1 duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative">
              Our Products
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red"></span>
            </h4>
            <ul className="space-y-2.5 mt-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-red-light transition-colors hover:pl-1 duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Download catalogue */}
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red/20 text-red-light text-sm rounded-lg hover:bg-red/30 transition-colors"
            >
              <Download size={14} />
              Download Catalogue
            </a>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-base mb-4 relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-red"></span>
            </h4>
            <div className="space-y-3 mt-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-light shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  Shop No: 4, Building No: 20, Al-Rehan Street,
                  <br />
                  Ind Area: 11, Sharjah, UAE
                  <br />
                  PO Box: 64047
                </p>
              </div>
              <a
                href="tel:+97165566979"
                className="flex items-center gap-3 text-gray-300 text-sm hover:text-red-light transition-colors"
              >
                <Phone size={16} className="text-red-light shrink-0" />
                +971 6 5566979
              </a>
              <a
                href="tel:+971506553018"
                className="flex items-center gap-3 text-gray-300 text-sm hover:text-red-light transition-colors"
              >
                <Phone size={16} className="text-red-light shrink-0" />
                +971 50 6553018
              </a>
              <a
                href="mailto:info@colourcorneruae.com"
                className="flex items-center gap-3 text-gray-300 text-sm hover:text-red-light transition-colors"
              >
                <Mail size={16} className="text-red-light shrink-0" />
                info@colourcorneruae.com
              </a>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-red-light shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Sat - Thu: 9:00 AM - 6:00 PM</p>
                  <p>Fri: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rukn Al Alwan Auto Paints &
              Spare Parts Trading LLC. All rights reserved. |{" "}
              Powered by{" "}
              <a
                href="https://www.zetacoding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Zetacoding
              </a>
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <BackToTop />
    </footer>
  );
}
