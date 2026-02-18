"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-red to-crimson rounded-full shadow-[0_4px_15px_rgba(220,38,38,0.4)] flex items-center justify-center text-white hover:shadow-[0_6px_20px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all duration-300 z-40 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
