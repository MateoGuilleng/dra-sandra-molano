import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#B8860B]/10">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo/logo.jpg"
              alt="Dra. Sandra Molano"
              width={120}
              height={48}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-[0.87rem] text-[#888888] leading-[1.85] mb-6">
              Medicina estética de excelencia. Realzamos tu belleza natural con ciencia, arte y dedicación.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.instagram.com/dra.sandramolano/", icon: "fa-instagram", label: "Instagram" },
                { href: "https://www.facebook.com/drasandramolano/", icon: "fa-facebook-f", label: "Facebook" },
                { href: "https://wa.me/573000000000", icon: "fa-whatsapp", label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#B8860B]/25 flex items-center justify-center text-[#888888] hover:text-[#D4A017] hover:border-[#D4A017] transition-all duration-300"
                >
                  <i className={`fab ${s.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {["Inicio", "Nosotros", "Tratamientos", "Galería", "Reseñas", "Contacto"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("ñ", "n").replace("é", "e").replace("í", "i")}`}
                    className="text-[0.87rem] text-[#888888] hover:text-[#D4A017] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white mb-5">Tratamientos</h4>
            <ul className="flex flex-col gap-3">
              {["Armonización Facial", "Toxina Botulínica", "Bioestimuladores", "Tratamientos Láser", "Estética Corporal"].map((item) => (
                <li key={item}>
                  <a href="#tratamientos" className="text-[0.87rem] text-[#888888] hover:text-[#D4A017] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-white mb-5">Contacto</h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "fa-phone", text: "+57 300 000 0000" },
                { icon: "fa-envelope", text: "info@drasandramolano.com" },
                { icon: "fa-map-marker-alt", text: "Bogotá, Colombia" },
                { icon: "fa-clock", text: "Lun – Sáb: 8am – 6pm" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2.5 text-[0.87rem] text-[#888888]">
                  <i className={`fas ${item.icon} text-[#D4A017] w-4 shrink-0`} />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#B8860B]/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.78rem] text-[#555555]">
          <p>&copy; 2026 Dra. Sandra Molano. Todos los derechos reservados.</p>
          <p>
            Diseñado con <i className="fas fa-heart text-[#B8860B]" /> para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
}
