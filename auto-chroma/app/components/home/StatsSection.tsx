"use client";

import AnimateOnScroll from "../AnimateOnScroll";
import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Award, Package } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Happy Clients", icon: Users, color: "from-red to-crimson" },
  { value: 15, suffix: "+", label: "Years of Excellence", icon: Calendar, color: "from-blue-500 to-blue-700" },
  { value: 6, suffix: "+", label: "Brand Partners", icon: Award, color: "from-amber-500 to-orange-600" },
  { value: 1000, suffix: "+", label: "Products Available", icon: Package, color: "from-emerald-500 to-emerald-700" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -top-14 sm:-top-20">
          <AnimateOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-6 sm:p-8 text-center border border-gray-100 hover:border-red/20 hover:shadow-[0_12px_40px_rgba(220,38,38,0.12)] transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon size={22} className="text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
