const reviews = [
  {
    initial: "G",
    name: "Gustavo Castro",
    time: "Hace 7 meses",
    text: "Es un centro con buena locación, sin embargo, a mi punto de vista la atención al cliente es su fortaleza más grande porque tienen la prestación de diferentes servicios y le orientan a cada persona según la necesidad con soluciones prácticas y tangibles. La Dra Sandra y su grupo de colaboradores son muy atentos.",
  },
  {
    initial: "R",
    name: "Rodrigo Uribe",
    time: "Hace una semana",
    text: "Profesionalismo y gran atención fue el mejor regalo que pude darle a mi madre, infinitas gracias.",
  },
  {
    initial: "J",
    name: "Juan Carlos Castiblanco",
    time: "Hace una semana",
    text: "Excelente servicio y personas muy profesionales. La doctora Sandra sabe muy bien del cuidado estético en general. Muy recomendados.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[100px] bg-[#080808] relative" id="resenas">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Reseñas Google
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-12 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Lo que dicen <em className="text-[#D4A017] italic">nuestras pacientes</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="fade-up bg-[#0E0E0E] border border-[#B8860B]/10 hover:border-[#B8860B]/40 hover:-translate-y-1 transition-all duration-300 p-9"
            >
              <div className="flex gap-1 text-[#D4A017] text-[0.82rem] tracking-[4px] mb-5">
                {"★★★★★"}
              </div>
              <blockquote
                className="text-[1.05rem] italic text-[#BBBBBB] leading-[1.85] mb-7"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {r.text}
              </blockquote>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B6508] to-[#D4A017] text-[#080808] flex items-center justify-center font-bold text-base shrink-0">
                  {r.initial}
                </div>
                <div>
                  <strong className="block text-white text-[0.9rem]">{r.name}</strong>
                  <span className="text-[0.72rem] text-[#D4A017] tracking-[0.08em]">{r.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=dr+sandra+molano#lrd=0x8e3f9f0dfebb1f0d:0x900558588140dc8e,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-[#D4A017] border-b border-[#B8860B]/30 pb-1 hover:text-[#E8C97A] hover:border-[#E8C97A] transition-colors duration-300"
          >
            Ver todas las reseñas en Google <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
