import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rukn Al Alwan Auto Paints & Spare Parts Trading LLC - Our history, mission, values, and commitment to excellence in automotive and industrial paints.",
};

const coreValues = [
  { icon: Target, title: "Quality Excellence", description: "We are committed to sourcing and delivering only the highest quality products that meet international standards.", color: "from-red to-crimson" },
  { icon: Heart, title: "Customer First", description: "Our customers' profitability and satisfaction drive every decision we make. Your success is our success.", color: "from-pink-500 to-rose-600" },
  { icon: Shield, title: "Integrity & Trust", description: "We build relationships based on transparency, honesty, and mutual respect with every partner and client.", color: "from-blue-500 to-blue-700" },
  { icon: Eye, title: "Innovation", description: "We continuously explore cutting-edge coatings technology to bring the best solutions to our market.", color: "from-violet-500 to-purple-700" },
  { icon: Users, title: "Partnership", description: "We listen to our partners' problems, ideas, and solutions to provide tailored results together.", color: "from-emerald-500 to-emerald-700" },
  { icon: Award, title: "Professionalism", description: "Our emphasis is on transparency and professionalism in performing the highest quality service efficiently.", color: "from-amber-500 to-orange-600" },
];

const milestones = [
  { year: "Establishment", title: "Company Founded", description: "Rukn Al Alwan Auto Paints & Spare Parts Trading LLC was established in Sharjah, UAE.", color: "from-navy to-navy-light" },
  { year: "Growth", title: "Brand Partnerships", description: "Secured partnerships with leading international paint brands including Nexa Autocolor, Sigma, Jotun, and Hempel.", color: "from-blue-500 to-blue-700" },
  { year: "Innovation", title: "AutoChroma Launch", description: "Launched our own premium automotive paint brand AutoChroma, offering exceptional quality and value.", color: "from-red to-crimson" },
  { year: "Expansion", title: "Pure Care Introduction", description: "Introduced Pure Care product line for comprehensive car care including polishes and maintenance products.", color: "from-emerald-500 to-emerald-700" },
  { year: "Present", title: "Market Leader", description: "Serving 500+ clients across the UAE and Middle East with a comprehensive range of automotive and industrial paints.", color: "from-amber-500 to-orange-600" },
];

const certifications = [
  "ISO Quality Management Standards",
  "Authorized Nexa Autocolor Distributor",
  "Authorized Sigma Paints Distributor",
  "Authorized Jotun Paints Distributor",
  "Authorized Hempel Paints Distributor",
  "UAE Trade License - Sharjah",
];

const teamMembers = [
  { name: "Dayanand Shetty", role: "Managing Director", description: "Leading Rukn Al Alwan with decades of experience in the automotive paints and coatings industry.", gradient: "from-navy to-navy-light" },
  { name: "Technical Team", role: "Colour Matching & Technical Support", description: "Expert technicians providing colour matching, product recommendations, and application guidance.", gradient: "from-red to-crimson" },
  { name: "Sales Team", role: "Customer Relations & Business Development", description: "Dedicated professionals building lasting partnerships with clients across the UAE and Middle East.", gradient: "from-blue-500 to-blue-700" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/png-02.jpg" alt="Auto painting" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e]/90 via-[#0f1b4c]/85 to-[#080e2a]/90"></div>
        </div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-red/15 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`, backgroundSize: "80px 80px" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 text-red-light">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Our Story &{" "}
            <span className="bg-gradient-to-r from-red-light via-red to-crimson bg-clip-text text-transparent">Values</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Building trust through quality, expertise, and lasting partnerships in the automotive and industrial paints industry.
          </p>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll animation="animate-slideInLeft">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,27,76,0.15)]">
                  <div className="relative aspect-[4/3]">
                    <Image src="/png-05.jpg" alt="Professional automotive painting" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white text-2xl font-extrabold">ركن الالوان</p>
                      <p className="text-gray-300 text-sm mt-1">Rukn Al Alwan (Colour Corner)</p>
                    </div>
                  </div>
                </div>
                {/* Secondary images */}
                <div className="absolute -bottom-6 -right-4 w-40 h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                  <Image src="/png-11.jpg" alt="Car preparation and masking" fill className="object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-24 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                  <Image src="/png-17.jpg" alt="Car repair painting" fill className="object-cover" />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slideInRight">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-red">Our Company</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight red-line">
                  A Legacy of Quality in Automotive Paints
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>Welcome to Rukn Al Alwan — one of the fastest growing company distributing car paints and ancillaries for the refinish industry. At Rukn Al Alwan, we believe that success is not a destination but it is a journey.</p>
                  <p>Along the way, strong business and personal relationships are formed between our partners and us, which has ultimately allowed us to exceed the stringent demands of our industry.</p>
                  <p>By listening to our partners&apos; problems, ideas and solutions, we have quickly contested the stronghold of the major automotive refinishing suppliers in our market.</p>
                  <p className="font-semibold text-navy italic border-l-4 border-gradient-to-b border-red pl-4 py-1 bg-red-50/50 rounded-r-lg">
                    &ldquo;Only one thing lasts longer than our coatings — is our commitment to you.&rdquo;
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>

      {/* Timeline */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/png-04.jpg" alt="Car body repair workshop" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading subtitle="Our Journey" title="Milestones of Growth" description="From our humble beginnings to becoming a market leader in automotive and industrial paints." light />
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                <div className="flex gap-5 sm:gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white text-sm font-extrabold shrink-0 shadow-md`}>{i + 1}</div>
                    {i < milestones.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-2"></div>}
                  </div>
                  <div className="pb-8">
                    <span className="text-[11px] font-bold text-red-light uppercase tracking-[0.15em]">{milestone.year}</span>
                    <h3 className="text-lg font-extrabold text-white mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>

      {/* Core Values */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/png-06.jpg" alt="Professional spray painting" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading subtitle="Core Values" title="What Drives Us Forward" description="Our values define who we are and guide every interaction with our clients and partners." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {coreValues.map((value, i) => (
              <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-7 lg:p-8 border border-white/10 hover:bg-white/20 hover:border-white/25 transition-all duration-500 h-full hover:-translate-y-1.5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>

      {/* Certifications */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/png-12.jpg" alt="Professional car coating" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-red/8 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading subtitle="Certifications" title="Recognized & Authorized" description="Our certifications and authorizations reflect our commitment to quality and industry standards." light />
          <AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/[0.05] backdrop-blur-md border border-white/[0.08] rounded-xl hover:bg-white/[0.1] hover:border-white/15 transition-all duration-300">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red to-crimson flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>

      {/* Team */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/png-15.jpg" alt="Automotive workshop team" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/85"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading subtitle="Our Team" title="Meet the People Behind Our Success" description="Dedicated professionals with decades of combined experience in the automotive paints industry." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={i} delay={`delay-${(i + 1) * 100}`}>
                <div className="text-center group">
                  <div className={`w-28 h-28 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-extrabold shadow-lg group-hover:shadow-xl group-hover:scale-105 group-hover:rounded-3xl transition-all duration-500`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-1">{member.name}</h3>
                  <p className="text-red-light text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/png-16.jpg" alt="Car painting finish" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2e]/90 via-[#0f1b4c]/85 to-[#080e2a]/90"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Want to Know More?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;d love to discuss how we can support your business with our premium paints and coatings.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red to-crimson text-white font-bold rounded-full hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] transition-all duration-300 hover:-translate-y-1">
              Get In Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 sm:h-20 bg-white"></div>
    </>
  );
}
