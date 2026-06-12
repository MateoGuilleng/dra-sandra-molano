import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ubicación | Dra. Sandra Molano",
  description:
    "Encuéntranos en Bogotá. Dra Sandra Molano — Dg. 46 Sur #53-27, Barrio Venecia. Abierto lunes a sábado 8am–6pm.",
};

export default function UbicacionPage() {
  return (
    <main
      className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 py-16"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Logo / back link */}
      <Link
        href="/"
        className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#B8860B] hover:text-[#D4A017] transition-colors mb-10 flex items-center gap-2"
      >
        <i className="fas fa-arrow-left text-[0.6rem]" />
        Volver al sitio
      </Link>

      {/* Header */}
      <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3 text-center">
        ¿Cómo llegar?
      </p>
      <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
      <h1
        className="text-[2.4rem] font-light text-white mb-3 text-center leading-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Nuestra <em className="text-[#D4A017] italic">Ubicación</em>
      </h1>
      <p className="text-[0.9rem] text-[#888888] text-center max-w-md mb-3 leading-[1.85]">
        Dra Sandra Molano
      </p>
      <p className="text-[0.85rem] text-[#BBBBBB] text-center max-w-md mb-10 leading-[1.85] flex items-start justify-center gap-2">
        <i className="fas fa-map-marker-alt text-[#D4A017] mt-1 shrink-0" />
        Dg. 46 Sur #53-27, Barrio Venecia, Bogotá, Cundinamarca
      </p>

      {/* Botón principal Google Maps */}
      <a
        href="https://maps.app.goo.gl/LM2KhoyTJfzZyd4Y7"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-[#B8860B] text-[#080808] text-[0.78rem] font-bold tracking-[0.18em] uppercase border border-[#B8860B] hover:bg-[#E8C97A] hover:border-[#E8C97A] hover:-translate-y-0.5 transition-all duration-300 mb-12"
      >
        <i className="fas fa-location-arrow" />
        Abrir en Google Maps
      </a>

      {/* Mapa embebido */}
      <div className="relative w-full max-w-3xl border border-[#B8860B]/20 overflow-hidden">
        <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#B8860B] z-10 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#B8860B] z-10 pointer-events-none" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.00124409853!2d-74.138358!3d4.5937979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f0dfebb1f0d%3A0x900558588140dc8e!2sDra%20Sandra%20Molano!5e0!3m2!1ses!2sco!4v1777998465627!5m2!1ses!2sco"
          title="Ubicación Dra Sandra Molano"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[420px] block"
        />
      </div>

      {/* Info extra */}
      <div className="mt-10 flex flex-col sm:flex-row gap-6 text-center">
        {[
          { icon: "fa-clock", label: "Horario", value: "Lun – Sáb: 8am – 6pm" },
          { icon: "fa-phone", label: "Teléfono", value: "+57 350 801 3250" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <i className={`fas ${item.icon} text-[#D4A017] text-lg`} />
            <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#888888]">
              {item.label}
            </span>
            <span className="text-[0.9rem] text-[#BBBBBB]">{item.value}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
