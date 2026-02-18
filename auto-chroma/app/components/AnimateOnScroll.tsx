"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  delay?: string;
  className?: string;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "animate-fadeInUp",
  delay = "",
  className = "",
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `${animation} ${delay}` : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
