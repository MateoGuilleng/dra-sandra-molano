"use client";

import { useState } from "react";

export default function Contact() {
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("#D4A017");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nombre = (form.elements.namedItem("nombre") as HTMLInputElement).value.trim();
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value.trim();
    if (!nombre || !telefono) {
      setMsgColor("#e07070");
      setMsg("Por favor completa los campos requeridos.");
      return;
    }
    setMsgColor("#D4A017");
    setMsg("¡Mensaje enviado! Te contactaremos pronto.");
    form.reset();
    setTimeout(() => setMsg(""), 5000);
  };

  const inputCls =
    "w-full bg-white/[0.03] border border-[#B8860B]/18 px-4 py-3.5 text-[#F8F2E6] text-[0.9rem] placeholder:text-[#555555] focus:outline-none focus:border-[#D4A017] focus:bg-[#B8860B]/4 transition-all duration-300";

  return (
    <>
      <section className="py-[100px] bg-[#111111]" id="contacto">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            {/* Info */}
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
                Contáctanos
              </p>
              <span className="block w-12 h-px bg-[#B8860B] mb-5" />
              <h2
                className="text-[2.2rem] font-light text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Agenda tu <em className="text-[#D4A017] italic">consulta</em>
              </h2>
              <p className="text-[0.95rem] text-[#BBBBBB] leading-[1.85] mb-8">
                Estamos aquí para ayudarte a alcanzar tus objetivos estéticos. Contáctanos y agenda tu consulta personalizada.
              </p>
              <ul className="flex flex-col gap-5 mb-9">
                {[
                  { icon: "fa-phone", label: "Teléfono", value: "+57 300 000 0000", href: "tel:+573000000000" },
                  { icon: "fa-envelope", label: "Email", value: "info@drasandramolano.com", href: "mailto:info@drasandramolano.com" },
                  { icon: "fa-map-marker-alt", label: "Dirección", value: "Bogotá, Colombia" },
                  { icon: "fa-clock", label: "Horario", value: "Lun – Sáb: 8am – 6pm" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <i className={`fas ${item.icon} text-[#D4A017] mt-1 w-4 shrink-0`} />
                    <div>
                      <strong className="block text-white text-[0.78rem] tracking-[0.1em] uppercase mb-0.5">
                        {item.label}
                      </strong>
                      {item.href ? (
                        <a href={item.href} className="text-[0.9rem] text-[#BBBBBB] hover:text-[#D4A017] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-[0.9rem] text-[#BBBBBB]">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-[#0E0E0E] border border-[#B8860B]/12 p-12">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017]">
                    Nombre *
                  </label>
                  <input name="nombre" type="text" placeholder="Tu nombre completo" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017]">
                    Teléfono *
                  </label>
                  <input name="telefono" type="tel" placeholder="+57 300 000 0000" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017]">
                    Tratamiento de interés
                  </label>
                  <select name="tratamiento" className={inputCls + " cursor-pointer"}>
                    <option value="">Selecciona un tratamiento</option>
                    <option>Armonización Facial</option>
                    <option>Toxina Botulínica</option>
                    <option>Bioestimuladores de Colágeno</option>
                    <option>Tratamientos Láser</option>
                    <option>Estética Corporal</option>
                    <option>Skincare Médico</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017]">
                    Mensaje
                  </label>
                  <textarea name="mensaje" rows={4} placeholder="¿En qué podemos ayudarte?" className={inputCls + " resize-y min-h-[110px]"} />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#B8860B] text-[#080808] text-[0.72rem] font-semibold tracking-[0.14em] uppercase border border-[#B8860B] hover:bg-[#E8C97A] hover:border-[#E8C97A] transition-all duration-300 mt-1"
                >
                  Enviar Mensaje
                </button>
                {msg && (
                  <p className="text-center text-[0.85rem] transition-opacity" style={{ color: msgColor }}>
                    {msg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-[100px] bg-[#111111]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <h3 className="text-[1.4rem] font-light text-white" style={{ fontFamily: "var(--font-serif)" }}>
              Encuéntranos en <em className="text-[#D4A017] italic">Google Maps</em>
            </h3>
            <a
              href="https://maps.app.goo.gl/LM2KhoyTJfzZyd4Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#D4A017] hover:text-[#E8C97A] transition-colors"
            >
              Abrir en Google Maps <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="relative border border-[#B8860B]/18 overflow-hidden">
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-15 h-15 border-t-2 border-l-2 border-[#B8860B] z-[1] pointer-events-none" />
            <span className="absolute bottom-0 right-0 w-15 h-15 border-b-2 border-r-2 border-[#B8860B] z-[1] pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.00124409853!2d-74.138358!3d4.5937979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f0dfebb1f0d%3A0x900558588140dc8e!2sPiel%20Medical%20Spa!5e0!3m2!1ses!2sco!4v1777998465627!5m2!1ses!2sco"
              title="Ubicación Dra. Sandra Molano"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] block grayscale-[30%] contrast-110 brightness-85 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-500 md:h-[300px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
