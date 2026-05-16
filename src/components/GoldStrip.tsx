const items = [
  { icon: "fa-leaf", text: "Resultados Naturales" },
  { icon: "fa-star", text: "Tecnología de Vanguardia" },
  { icon: "fa-leaf", text: "Atención Personalizada" },
  { icon: "fa-star", text: "Experiencia & Confianza" },
];

export default function GoldStrip() {
  const repeated = [...items, ...items];
  return (
    <div className="bg-gradient-to-r from-[#8B6508] via-[#D4A017] to-[#8B6508] py-4 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 mx-[30px] text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#080808]"
          >
            <i className={`fas ${item.icon} text-[0.6rem]`} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
