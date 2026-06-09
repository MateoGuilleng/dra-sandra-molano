import FallbackImg from "@/components/FallbackImg";

const photos = [
  { src: "/images/gallery/foto1.jpg", alt: "Consultorio" },
  { src: "/images/gallery/foto2.jpg", alt: "Sala de tratamiento" },
  { src: "/images/gallery/foto3.jpg", alt: "Equipos" },
  { src: "/images/gallery/foto4.jpg", alt: "Recepción" },
  { src: "/images/gallery/foto5.jpg", alt: "Detalle tratamiento" },
  { src: "/images/gallery/foto6.jpg", alt: "Área de espera" },
];

function Cell({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer w-full h-full">
      <FallbackImg
        src={src}
        alt={alt}
        fallback={`https://placehold.co/800x600/0E0E0E/B8860B?text=${encodeURIComponent(alt)}`}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
      />
      {/* Gradient + label — always on mobile, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400" />
      <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <p className="absolute bottom-0 left-0 right-0 px-4 py-3 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#D4A017] lg:translate-y-1 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-300">
        {alt}
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-[100px] bg-[#111111] overflow-hidden" id="galeria">
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

        {/* ── Desktop layout (lg+) ── */}
        {/* Row 1: foto1 (1fr) · foto2 (1.6fr) · foto3 (1fr) */}
        {/* Row 2: foto4 wide (2fr) · foto5+foto6 stacked (1fr) */}
        <div className="hidden lg:flex flex-col gap-3 overflow-hidden">
          {/* Row 1 */}
          <div className="grid gap-3 h-[280px]" style={{ gridTemplateColumns: "1fr 1.6fr 1fr" }}>
            <div className="h-[280px] overflow-hidden"><Cell src={photos[0].src} alt={photos[0].alt} /></div>
            <div className="h-[280px] overflow-hidden"><Cell src={photos[1].src} alt={photos[1].alt} /></div>
            <div className="h-[280px] overflow-hidden"><Cell src={photos[2].src} alt={photos[2].alt} /></div>
          </div>
          {/* Row 2 */}
          <div className="grid gap-3 h-[400px]" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div className="h-[400px] overflow-hidden">
              <Cell src={photos[3].src} alt={photos[3].alt} />
            </div>
            <div className="flex flex-col gap-3 h-[400px]">
              <div className="flex-1 overflow-hidden min-h-0">
                <Cell src={photos[4].src} alt={photos[4].alt} />
              </div>
              <div className="flex-1 overflow-hidden min-h-0">
                <Cell src={photos[5].src} alt={photos[5].alt} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Tablet (sm–lg): 2 columns ── */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3">
          {photos.map((p) => (
            <div key={p.alt} className="h-[220px]">
              <Cell src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>

        {/* ── Mobile: 1 column ── */}
        <div className="grid sm:hidden grid-cols-1 gap-3">
          {photos.map((p) => (
            <div key={p.alt} className="h-[220px]">
              <Cell src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
