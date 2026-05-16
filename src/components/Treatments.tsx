import FallbackImg from "@/components/FallbackImg";

const treatments = [
  {
    img: "/images/treatments/armonizacion.jpg",
    title: "Armonización Facial",
    desc: "Equilibra y realza los rasgos de tu rostro con ácido hialurónico y técnicas avanzadas de inyectables.",
  },
  {
    img: "/images/treatments/botox.jpg",
    title: "Toxina Botulínica",
    desc: "Suaviza líneas de expresión y arrugas con resultados naturales que preservan tu expresividad.",
    fallback: true,
  },
  {
    img: "/images/treatments/bioestimuladores.jpg",
    title: "Bioestimuladores de Colágeno",
    desc: "Estimula la producción natural de colágeno para una piel más firme, luminosa y rejuvenecida.",
    fallback: true,
  },
  {
    img: "/images/treatments/laser.jpg",
    title: "Tratamientos Láser",
    desc: "Tecnología láser de última generación para rejuvenecimiento, manchas y mejora de la textura cutánea.",
    fallback: true,
  },
  {
    img: "/images/treatments/corporal.jpg",
    title: "Estética Corporal",
    desc: "Tratamientos corporales para modelar, tonificar y mejorar la apariencia de tu cuerpo de forma segura.",
    fallback: true,
  },
  {
    img: "/images/treatments/skincare.jpg",
    title: "Skincare Médico",
    desc: "Protocolos de cuidado de la piel con productos médicos de alta gama para una piel radiante y saludable.",
    fallback: true,
  },
];

export default function Treatments() {
  return (
    <section className="py-[100px] bg-[#111111] relative" id="tratamientos">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Nuestros Servicios
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tratamientos <em className="text-[#D4A017] italic">Exclusivos</em>
        </h2>
        <p className="text-center text-[0.95rem] text-[#888888] max-w-xl mx-auto mb-12 leading-[1.85]">
          Cada tratamiento es diseñado a la medida de tus necesidades para lograr resultados armoniosos y duraderos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <div
              key={t.title}
              className="fade-up bg-[#0E0E0E] border border-[#B8860B]/12 hover:border-[#B8860B]/45 hover:-translate-y-1 transition-all duration-350 overflow-hidden group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="overflow-hidden h-[220px]">
                <FallbackImg
                  src={t.img}
                  alt={t.title}
                  fallback={`https://placehold.co/400x300/0E0E0E/B8860B?text=${encodeURIComponent(t.title)}`}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.07] group-hover:brightness-105 transition-all duration-500"
                />
              </div>
              <div className="p-7">
                <h3
                  className="text-[1.35rem] font-normal text-white mb-2.5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t.title}
                </h3>
                <p className="text-[0.87rem] text-[#888888] leading-[1.75] mb-5">{t.desc}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017] group-hover:gap-3.5 transition-all duration-300"
                >
                  Más información <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
