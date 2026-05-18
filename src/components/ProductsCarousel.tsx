"use client";

import { useRef, useState, useCallback } from "react";
import FallbackImg from "@/components/FallbackImg";
import type { IProducto } from "@/models/Producto";

export default function ProductsCarousel({ products }: { products: IProducto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
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

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setCurrent(Math.min(idx, total - 1));
  };

  if (total === 0) {
    return (
      <p className="text-center text-[#888888] text-[0.9rem] py-16">
        No hay productos disponibles en este momento.
      </p>
    );
  }

  return (
    <div className="relative">
      {/* Prev */}
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
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((p) => (
          <div
            key={String(p._id ?? p.nombre)}
            className="snap-start shrink-0 w-[80vw] sm:w-[45vw] lg:w-[calc(33.333%-14px)] bg-[#0E0E0E] border border-[#B8860B]/10 hover:border-[#B8860B]/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[260px]">
              <FallbackImg
                src={p.imagen}
                alt={p.nombre}
                fallback={`https://placehold.co/400x260/0E0E0E/B8860B?text=${encodeURIComponent(p.nombre)}`}
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
              />
              <span className="absolute top-4 left-4 bg-[#B8860B] text-[#080808] text-[0.6rem] font-bold tracking-[0.15em] uppercase px-3 py-1">
                {p.tag}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-7">
              <p className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[#D4A017] mb-1">
                {p.marca}
              </p>
              <h3
                className="text-[1.25rem] font-normal text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {p.nombre}
              </h3>
              <p className="text-[0.85rem] text-[#888888] leading-[1.75] flex-1">{p.descripcion}</p>
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

      {/* Next */}
      <button
        onClick={next}
        disabled={current === total - 1}
        aria-label="Siguiente"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-11 h-11 border border-[#B8860B]/30 bg-[#080808] text-[#D4A017] flex items-center justify-center hover:border-[#D4A017] hover:bg-[#B8860B]/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 hidden md:flex"
      >
        <i className="fas fa-chevron-right text-xs" />
      </button>

      {/* Dots */}
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
  );
}
