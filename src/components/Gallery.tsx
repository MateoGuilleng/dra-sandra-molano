import FallbackImg from "@/components/FallbackImg";

const photos = [
  { src: "/images/gallery/foto1.jpg", alt: "Consultorio" },
  { src: "/images/gallery/foto2.jpg", alt: "Sala de tratamiento" },
  { src: "/images/gallery/foto3.jpg", alt: "Equipos" },
  { src: "/images/gallery/foto4.jpg", alt: "Recepción" },
];

export default function Gallery() {
  return (
    <section className="py-[100px] bg-[#111111] overflow-hidden" id="galeria">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Nuestro Espacio
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Galería <em className="text-[#D4A017] italic">Exclusiva</em>
        </h2>
        <p className="text-center text-[0.9rem] text-[#888888] max-w-lg mx-auto mb-14 leading-[1.85]">
          Un espacio diseñado para tu bienestar, donde la elegancia y la tecnología se unen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {photos.map((p) => (
            <div key={p.alt} className="relative h-[320px] overflow-hidden group cursor-pointer">
              <FallbackImg
                src={p.src}
                alt={p.alt}
                fallback={`https://placehold.co/800x600/0E0E0E/B8860B?text=${encodeURIComponent(p.alt)}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-110"
              />
              {/* Gradient + label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-400" />
              <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#D4A017] sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                {p.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
