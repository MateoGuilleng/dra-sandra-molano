import Image from "next/image";

const reviews = [
  {
    avatar: "/images/reviews/gustavo-castro.jpg",
    initial: "G",
    name: "Gustavo Castro",
    text: "Es un centro con buena locación, sin embargo, a mi punto de vista la atención al cliente es su fortaleza más grande porque tienen la prestación de diferentes servicios y le orientan a cada persona según la necesidad con soluciones prácticas y tangibles. La Dra Sandra y su grupo de colaboradores son muy atentos.",
  },
  {
    avatar: "/images/reviews/rodrigo-uribe.jpg",
    initial: "R",
    name: "Rodrigo Uribe",
    text: "Profesionalismo y gran atención fue el mejor regalo que pude darle a mi madre, infinitas gracias.",
  },
  {
    avatar: "/images/reviews/juan-castiblanco.jpg",
    initial: "J",
    name: "Juan Carlos Castiblanco",
    text: "Excelente servicio y personas muy profesionales. La doctora Sandra sabe muy bien del cuidado estético en general. Muy recomendados.",
  },
];

function Avatar({ src, initial }: { src: string; initial: string }) {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#B8860B]/40">
      <Image
        src={src}
        alt={initial}
        fill
        className="object-cover"
        onError={undefined}
        unoptimized
      />
    </div>
  );
}

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
          Lo que dicen <em className="text-[#D4A017] italic">nuestros pacientes</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="fade-up flex flex-col bg-[#0E0E0E] border border-[#B8860B]/10 hover:border-[#B8860B]/40 hover:-translate-y-1 transition-all duration-300 p-8"
            >
              {/* Stars */}
              <div className="text-[#D4A017] text-[0.85rem] tracking-[4px] mb-5">★★★★★</div>

              {/* Quote — grows to fill space, pushing author to bottom */}
              <blockquote
                className="flex-1 text-[1.02rem] italic text-[#BBBBBB] leading-[1.9] mb-8"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {r.text}
              </blockquote>

              {/* Divider */}
              <div className="w-full h-px bg-[#B8860B]/15 mb-6" />

              {/* Author — always at the bottom */}
              <div className="flex items-center gap-3">
                <Avatar src={r.avatar} initial={r.initial} />
                <strong className="text-white text-[0.92rem] font-medium">{r.name}</strong>
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
