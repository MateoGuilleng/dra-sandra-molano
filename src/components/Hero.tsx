"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 28; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        width:${size}px;
        height:${size}px;
        --dur:${Math.random() * 8 + 6}s;
        --delay:${Math.random() * 6}s;
        border-radius:${Math.random() > 0.5 ? "50%" : "0"};
        background:${Math.random() > 0.5 ? "#D4A017" : "#B8860B"};
      `;
      container.appendChild(p);
    }
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="inicio">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-[#111111] scale-[1.06] hover:scale-100 transition-transform duration-[10s]"
        style={{ backgroundImage: "url('/images/hero/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808]/88 via-[#080808]/55 to-[#080808]/78" />
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[820px] px-6">
        <p className="flex items-center justify-center gap-4 text-[0.68rem] font-semibold tracking-[0.35em] uppercase text-[#D4A017] mb-5">
          <span className="block w-10 h-px bg-[#B8860B]/60" />
          Medicina Estética de Excelencia
          <span className="block w-10 h-px bg-[#B8860B]/60" />
        </p>
        <h1
          className="text-[clamp(3.2rem,9vw,6.5rem)] font-light text-white leading-[1.02] mb-6 tracking-[0.02em]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Dra. Sandra Molano
        </h1>
        <p className="text-base text-[#BBBBBB] max-w-[520px] mx-auto mb-11 leading-[1.85]">
          Realza tu belleza natural con los tratamientos más avanzados y seguros, diseñados especialmente para ti.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo("#tratamientos")}
            className="px-10 py-3.5 bg-[#B8860B] text-[#080808] text-[0.72rem] font-semibold tracking-[0.14em] uppercase border border-[#B8860B] hover:bg-[#E8C97A] hover:border-[#E8C97A] hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver Tratamientos
          </button>
          <button
            onClick={() => scrollTo("#contacto")}
            className="px-10 py-3.5 border border-[#B8860B] text-[#B8860B] text-[0.72rem] font-semibold tracking-[0.14em] uppercase hover:bg-[#B8860B] hover:text-[#080808] hover:-translate-y-0.5 transition-all duration-300"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#B8860B]/50">Scroll</span>
        <span className="block w-px h-14 bg-gradient-to-b from-transparent to-[#D4A017] scroll-line" />
      </div>
    </section>
  );
}
