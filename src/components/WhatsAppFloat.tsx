export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col gap-3 items-center">
      {/* Ubicación */}
      <a
        href="/ubicacion"
        aria-label="Ver ubicación"
        className="w-12 h-12 bg-[#B8860B] rounded-full flex items-center justify-center text-[#080808] text-xl shadow-[0_4px_20px_rgba(184,134,11,0.4)] hover:scale-110 hover:bg-[#D4A017] transition-all duration-300"
      >
        <i className="fas fa-map-marker-alt" />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/dra.sandramolano/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300"
        style={{
          background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        }}
      >
        <i className="fab fa-instagram" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/drasandramolano/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white text-xl shadow-[0_4px_20px_rgba(24,119,242,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(24,119,242,0.6)] transition-all duration-300"
      >
        <i className="fab fa-facebook-f" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/573508013250"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}
