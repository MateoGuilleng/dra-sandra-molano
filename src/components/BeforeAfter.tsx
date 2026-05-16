import FallbackImg from "@/components/FallbackImg";

const cases = [
  { img: "/images/before-after/caso1.jpg", label: "Armonización Facial" },
  { img: "/images/before-after/caso2.jpg", label: "Toxina Botulínica" },
  { img: "/images/before-after/caso3.jpg", label: "Bioestimuladores" },
];

export default function BeforeAfter() {
  return (
    <section className="py-[100px] bg-[#080808]" id="resultados">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Resultados Reales
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Antes &amp; <em className="text-[#D4A017] italic">Después</em>
        </h2>
        <p className="text-center text-[0.95rem] text-[#888888] max-w-xl mx-auto mb-12 leading-[1.85]">
          Resultados reales de nuestros pacientes, con procedimientos seguros y personalizados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.label}
              className="fade-up relative overflow-hidden border border-[#B8860B]/15 group cursor-pointer"
            >
              <FallbackImg
                src={c.img}
                alt={`Antes y después — ${c.label}`}
                fallback="https://placehold.co/500x300/0E0E0E/B8860B?text=Antes+%26+Después"
                className="w-full h-[300px] object-cover group-hover:scale-[1.05] transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080808]/92 to-transparent pt-8 pb-4 px-5">
                <span className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#D4A017]">
                  {c.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
