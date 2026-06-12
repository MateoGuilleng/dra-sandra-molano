export default function Contact() {
  return (
    <section className="py-[100px] bg-[#111111]" id="contacto">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Ubicación
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Encuéntranos en <em className="text-[#D4A017] italic">Google Maps</em>
        </h2>
        <p className="text-center text-[0.9rem] text-[#888888] max-w-lg mx-auto mb-12 leading-[1.85]">
          Visítanos en Bogotá. Estamos disponibles de lunes a sábado de 8am a 6pm.
        </p>

        {/* Map */}
        <div className="relative border border-[#B8860B]/18 overflow-hidden">
          <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#B8860B] z-[1] pointer-events-none" />
          <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#B8860B] z-[1] pointer-events-none" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.00124409853!2d-74.138358!3d4.5937979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f0dfebb1f0d%3A0x900558588140dc8e!2sDra%20Sandra%20Molano!5e0!3m2!1ses!2sco!4v1777998465627!5m2!1ses!2sco"
            title="Ubicación Dra. Sandra Molano"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[460px] block grayscale-[30%] contrast-110 brightness-85 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-500"
          />
        </div>

        {/* Open in Maps link */}
        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/LM2KhoyTJfzZyd4Y7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-[#D4A017] border-b border-[#B8860B]/30 pb-1 hover:text-[#E8C97A] hover:border-[#E8C97A] transition-colors duration-300"
          >
            Abrir en Google Maps <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </section>
  );
}
