import FallbackImg from "@/components/FallbackImg";

const photos = [
  { src: "/images/gallery/foto1.jpg", alt: "Consultorio", tall: true },
  { src: "/images/gallery/foto2.jpg", alt: "Sala de tratamiento" },
  { src: "/images/gallery/foto3.jpg", alt: "Equipos" },
  { src: "/images/gallery/foto4.jpg", alt: "Recepción", wide: true },
];

export default function Gallery() {
  return (
    <section className="py-[100px] bg-[#111111]" id="galeria">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Nuestro Espacio
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-12 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Galería <em className="text-[#D4A017] italic">Exclusiva</em>
        </h2>

        {/* Grid: 4 cols, auto rows 220px */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 auto-rows-[220px]">
          {photos.map((p) => (
            <div
              key={p.alt}
              className={`fade-up relative overflow-hidden group cursor-pointer
                ${p.tall ? "row-span-2" : ""}
                ${p.wide ? "col-span-2" : ""}
              `}
            >
              <FallbackImg
                src={p.src}
                alt={p.alt}
                fallback={"https://placehold.co/400x220/0E0E0E/B8860B?text=" + encodeURIComponent(p.alt)}
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.07] group-hover:brightness-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#B8860B]/0 group-hover:bg-[#B8860B]/8 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
