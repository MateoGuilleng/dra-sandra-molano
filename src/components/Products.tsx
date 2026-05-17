"use client";

import { useRef, useState, useCallback } from "react";
import FallbackImg from "@/components/FallbackImg";

const products = [
  {
    img: "/images/products/producto1.jpg",
    name: "Sérum Vitamina C",
    brand: "SkinMedica",
    desc: "Antioxidante de alta potencia que ilumina y unifica el tono de la piel.",
    tag: "Más vendido",
  },
  {
    img: "/images/products/producto2.jpg",
    name: "Crema Hidratante FPS 50",
    brand: "EltaMD",
    desc: "Protección solar diaria con hidratación profunda para todo tipo de piel.",
    tag: "Protección solar",
  },
  {
    img: "/images/products/producto3.jpg",
    name: "Retinol 0.5%",
    brand: "ZO Skin Health",
    desc: "Renovación celular acelerada para reducir líneas finas y mejorar textura.",
    tag: "Anti-edad",
  },
  {
    img: "/images/products/producto4.jpg",
    name: "Ácido Hialurónico Sérum",
    brand: "Obagi",
    desc: "Hidratación intensa en múltiples capas para un efecto relleno visible.",
    tag: "Hidratación",
  },
  {
    img: "/images/products/producto5.jpg",
    name: "Limpiador Enzimático",
    brand: "iS Clinical",
    desc: "Limpieza profunda con enzimas naturales que respetan la barrera cutánea.",
    tag: "Limpieza",
  },
  {
    img: "/images/products/producto6.jpg",
    name: "Contorno de Ojos",
    brand: "Revision Skincare",
    desc: "Reduce ojeras, bolsas y líneas de expresión en el área periocular.",
    tag: "Ojos",
  },
];

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // How many cards visible depends on viewport — we track via CSS, but for
  // dot/arrow logic we treat each "page" as 1 card on mobile, 2 on md, 3 on lg.
  // We use a simple scroll-snap approach: each card is a snap point.
  const total = products.length;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setCurrent(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, current - 1));
  const next = () => scrollTo(Math.min(total - 1, current + 1));

  // Keep current in sync when user scrolls manually
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setCurrent(Math.min(idx, total - 1));
  };

  return (
    <section className="py-[100px] bg-[#080808] relative overflow-hidden" id="productos">
      {/* Subtle gold glow top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Skincare de Élite
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Nuestros <em className="text-[#D4A017] italic">Productos</em>
        </h2>
        <p className="text-center text-[0.9rem] text-[#888888] max-w-lg mx-auto mb-14 leading-[1.85]">
          Líneas médicas seleccionadas por la Dra. Sandra Molano para complementar y potenciar tus tratamientos.
        </p>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-11 h-11 border border-[#B8860B]/30 bg-[#080808] text-[#D4A017] flex items-center justify-center hover:border-[#D4A017] hover:bg-[#B8860B]/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 hidden md:flex"
          >
            <i className="fas fa-chevron-left text-xs" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((p, i) => (
              <div
                key={p.name}
                className="snap-start shrink-0 w-[80vw] sm:w-[45vw] lg:w-[calc(33.333%-14px)] bg-[#0E0E0E] border border-[#B8860B]/10 hover:border-[#B8860B]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[260px]">
                  <FallbackImg
                    src={p.img}
                    alt={p.name}
                    fallback={`https://placehold.co/400x260/0E0E0E/B8860B?text=${encodeURIComponent(p.name)}`}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
                  />
                  {/* Tag badge */}
                  <span className="absolute top-4 left-4 bg-[#B8860B] text-[#080808] text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    {p.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7">
                  <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#D4A017] mb-1">
                    {p.brand}
                  </p>
                  <h3
                    className="text-[1.25rem] font-normal text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[0.85rem] text-[#888888] leading-[1.75] flex-1">{p.desc}</p>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#B8860B]/12 my-5" />

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017] group-hover:gap-3 transition-all duration-300"
                  >
                    Consultar disponibilidad <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 border border-[#B8860B]/30 bg-[#080808] text-[#D4A017] flex items-center justify-center hover:border-[#D4A017] hover:bg-[#B8860B]/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 hidden md:flex"
          >
            <i className="fas fa-chevron-right text-xs" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir al producto ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-[#D4A017]"
                  : "w-2 h-2 bg-[#B8860B]/30 hover:bg-[#B8860B]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
