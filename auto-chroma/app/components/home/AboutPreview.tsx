import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const highlights = [
  "Authorized distributors of international paint brands",
  "Comprehensive range of automotive & industrial coatings",
  "Expert technical guidance and colour matching",
  "Committed to customer profitability and quality",
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white -mt-8 sm:-mt-12" id="about-preview">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image composition */}
          <AnimateOnScroll animation="animate-slideInLeft">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,27,76,0.15)]">
                <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark aspect-[4/3] relative">
                  {/* Decorative paint drops */}
                  <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-red/30 blur-xl"></div>
                  <div className="absolute bottom-16 left-12 w-16 h-16 rounded-full bg-blue-500/20 blur-lg"></div>
                  <div className="absolute top-1/3 left-1/4 w-12 h-12 rounded-full bg-amber-500/15 blur-lg"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/logo.jpg"
                      alt="Rukn Al Alwan"
                      width={240}
                      height={240}
                      className="w-36 h-36 sm:w-52 sm:h-52 object-contain opacity-25 drop-shadow-2xl"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-white text-xl font-bold mb-1">Excellence in Every Coat</p>
                    <p className="text-gray-300 text-sm">Serving the UAE since establishment</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-gradient-to-br from-red to-crimson text-white rounded-2xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(220,38,38,0.35)] hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl font-extrabold leading-none">15+</p>
                <p className="text-xs sm:text-sm font-semibold opacity-90 mt-1">Years of<br />Excellence</p>
              </div>

              {/* Small floating card */}
              <div className="absolute -top-4 -left-3 sm:-left-5 bg-white rounded-xl p-3 sm:p-4 shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-gray-100">
                <p className="text-2xl sm:text-3xl font-extrabold text-navy leading-none">6+</p>
                <p className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-1">Brand Partners</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right - Content */}
          <AnimateOnScroll animation="animate-slideInRight">
            <div>
              <span className="inline-block text-sm font-bold tracking-widest uppercase mb-3 text-red">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy mb-6 leading-[1.15] red-line">
                Your Trusted Partner in Automotive Paints
              </h2>
              <p className="text-gray-500 text-base lg:text-[17px] leading-relaxed mb-5">
                Rukn Al Alwan is one of the fastest growing suppliers of
                automotive paints, industrial coatings, and ancillary products in
                the UAE. We believe that success is not a destination but a
                journey — and along the way, strong business relationships are
                formed between our partners and us.
              </p>
              <p className="text-gray-500 text-base lg:text-[17px] leading-relaxed mb-8">
                By listening to our partners&apos; needs and providing products
                researched extensively in terms of quality and value, we ensure
                the long-term success of our customers.
              </p>

              {/* Highlights */}
              <ul className="space-y-3.5 mb-8">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red to-crimson flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span className="text-gray-600 text-sm sm:text-[15px] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-navy to-navy-light text-white font-bold rounded-full hover:shadow-[0_8px_25px_rgba(15,27,76,0.3)] transition-all duration-300 hover:-translate-y-1">
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
