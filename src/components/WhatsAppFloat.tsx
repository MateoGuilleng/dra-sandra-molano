export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-8 right-8 z-[999] w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}
