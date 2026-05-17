import FallbackImg from "@/components/FallbackImg";

// Layout fijo de 6 fotos:
//  Row 1: foto1 (2 cols tall) | foto2 | foto3  → 2+1+1 = 4 cols
//  Row 2:                     | foto4 | foto5  → continúa bajo foto2/3
//  Row 3: foto6 (ancho completo)
const photos = [
  { src: "/images/gallery/foto1.jpg", alt: "Consultorio" },
  { src: "/images/gallery/foto2.jpg", alt: "Sala de tratamiento" },
  { src: "/images/gallery/foto3.jpg", alt: "Equipos" },
  { src: "/images/gallery/foto4.jpg", alt: "Recepción" },
  { src: "/images/gallery/foto5.jpg", alt: "Detalle tratamiento" },
  { src: "/images/gallery/foto6.jpg", alt: "Área de espera" },
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer w-full h-full">
      <FallbackImg
        src={src}
        alt={alt}
        fallback={`https://placehold.co/800x600/0E0E0E/B8860B?text=${encodeURIComponent(alt)}`}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
      />
      {/* Gradient: always visible on mobile, hover-only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400" />
      {/* Corner accents — desktop hover only */}
      <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Label: always visible on mobile, hover-only on desktop */}
      <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#D4A017] lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
        {alt}
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-[100px] bg-[#111111]" id="galeria">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
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

        {/* ── Desktop grid (lg+) ── */}
        <div className="hidden lg:grid gap-3" style={{ gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "300px 300px" }}>
          {/* foto1 — tall left */}
          <div style={{ gridRow: "1 / 3" }}>
            <Img src={photos[0].src} alt={photos[0].alt} />
          </div>
          {/* foto2 — top center */}
          <div><Img src={photos[1].src} alt={photos[1].alt} /></div>
          {/* foto3 — top right */}
          <div><Img src={photos[2].src} alt={photos[2].alt} /></div>
          {/* foto4 — bottom center */}
          <div><Img src={photos[3].src} alt={photos[3].alt} /></div>
          {/* foto5 — bottom right */}
          <div><Img src={photos[4].src} alt={photos[4].alt} /></div>
        </div>

        {/* foto6 — full width strip (desktop) */}
        <div className="hidden lg:block h-[220px] mt-3">
          <Img src={photos[5].src} alt={photos[5].alt} />
        </div>

        {/* ── Tablet grid (sm–lg) ── */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3">
          {photos.map((p) => (
            <div key={p.alt} className="h-[220px]">
              <Img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>

        {/* ── Mobile grid ── */}
        <div className="grid sm:hidden grid-cols-1 gap-3">
          {photos.map((p) => (
            <div key={p.alt} className="h-[220px]">
              <Img src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
