import Image from "next/image";

export default function About() {
  return (
    <section className="py-[100px] bg-[#080808] relative overflow-hidden" id="nosotros">
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-radial-[circle] from-[#B8860B]/4 to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 right-3 bottom-3 border border-[#B8860B]/20 pointer-events-none z-0" />
            <Image
              src="/images/team/dra-sandra.jpg"
              alt="Dra. Sandra Molano"
              width={500}
              height={620}
              className="relative z-[1] w-full h-[620px] object-cover grayscale-[10%] contrast-105 md:h-[420px] lg:h-[620px]"
            />
            <div className="absolute -bottom-6 -right-6 z-[2] bg-gradient-to-br from-[#8B6508] to-[#D4A017] text-[#080808] px-7 py-6 text-center shadow-[0_4px_24px_rgba(184,134,11,0.25)]">
              <span className="block text-[2.8rem] leading-none font-semibold" style={{ fontFamily: "var(--font-serif)" }}>+10</span>
              <span className="text-[0.68rem] font-semibold tracking-[0.1em] uppercase leading-[1.5]">Años de<br />Experiencia</span>
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-5">
            <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">Sobre Nosotros</p>
            <span className="block w-12 h-px bg-[#B8860B] mb-5" />
            <h2 className="text-[2.2rem] font-light text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              Belleza con <em className="text-[#D4A017] italic">ciencia y arte</em>
            </h2>
            <p className="text-[0.95rem] text-[#BBBBBB] leading-[1.85] mb-4">
              La Dra. Sandra Molano es médica especialista en medicina estética, con más de 10 años de experiencia transformando la vida de sus pacientes a través de tratamientos seguros, personalizados y con resultados naturales.
            </p>
            <p className="text-[0.95rem] text-[#BBBBBB] leading-[1.85] mb-7">
              Su consultorio es un espacio de lujo y confianza, donde cada procedimiento es diseñado para potenciar tu belleza única, utilizando las técnicas más avanzadas y los mejores productos del mercado.
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {[
                "Médica especialista certificada",
                "Tecnología de última generación",
                "Protocolos personalizados",
                "Resultados seguros y naturales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[0.9rem] text-[#F8F2E6]">
                  <i className="fas fa-check-circle text-[#D4A017] text-[0.82rem] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-flex px-10 py-3.5 bg-[#B8860B] text-[#080808] text-[0.72rem] font-semibold tracking-[0.14em] uppercase border border-[#B8860B] hover:bg-[#E8C97A] hover:-translate-y-0.5 transition-all duration-300"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
