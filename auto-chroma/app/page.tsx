import HeroSection from "./components/home/HeroSection";
import AboutPreview from "./components/home/AboutPreview";
import WhyChooseUs from "./components/home/WhyChooseUs";
import BrandsSection from "./components/home/BrandsSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CTASection from "./components/home/CTASection";
import StatsSection from "./components/home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <WhyChooseUs />
      <BrandsSection />
      <TestimonialsSection />
      <CTASection />
      {/* Spacer between CTA and Footer */}
      <div className="h-10 sm:h-14 bg-gray-100"></div>
    </>
  );
}
