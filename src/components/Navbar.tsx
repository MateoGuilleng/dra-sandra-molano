"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#galeria", label: "Galería" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => handleAnchor(e, "#inicio")} className="flex items-center">
          <Image
            src="/images/logo/logo.jpg"
            alt="Dra. Sandra Molano"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#BBBBBB] hover:text-[#D4A017] transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          onClick={(e) => handleAnchor(e, "#contacto")}
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#B8860B] text-[#080808] text-[0.72rem] font-semibold tracking-[0.14em] uppercase border border-[#B8860B] hover:bg-[#E8C97A] hover:border-[#E8C97A] transition-all duration-300"
        >
          Contacto
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          aria-expanded={open}
        >
          <span className={`block w-6 h-px bg-[#D4A017] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#D4A017] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#D4A017] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 bg-[#080808]/98" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="block text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-[#BBBBBB] hover:text-[#D4A017] transition-colors py-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
