import FallbackImg from "@/components/FallbackImg";

// Datos estáticos de tratamientos
const tratamientosEstaticos = [
  {
    _id: "1",
    nombre: "Tratamiento Anti-Manchas",
    descripcion: "Eliminación efectiva de manchas solares, melasma y hiperpigmentación con tecnología láser y peelings médicos personalizados.",
    imagen: "/images/treatments/Tratamiento anti manchas.jpg",
    orden: 1
  },
  {
    _id: "2",
    nombre: "Depilación Láser",
    descripcion: "Tecnología láser diodo para una depilación definitiva, segura y cómoda en todas las áreas del cuerpo, con resultados duraderos.",
    imagen: "/images/treatments/Tratamiento depilacion laser.jpg",
    orden: 2
  },
  {
    _id: "3",
    nombre: "Tratamiento Capilar",
    descripcion: "Soluciones avanzadas para problemas de pérdida de cabello, fortalecimiento del folículo y mejora de la densidad capilar con resultados comprobados.",
    imagen: "/images/treatments/Tratamiento cabello.jpg",
    orden: 3
  },
  {
    _id: "4",
    nombre: "Estimulación de Colágeno",
    descripcion: "Técnicas avanzadas para estimular la producción natural de colágeno, mejorando la firmeza, elasticidad y juventud de la piel.",
    imagen: "/images/treatments/Estimulacion de colageno.jpg",
    orden: 4
  },
  {
    _id: "5",
    nombre: "Eliminación de Tatuajes",
    descripcion: "Proceso seguro y efectivo para eliminar tatuajes no deseados con tecnología láser Q-Switched, minimizando molestias y maximizando resultados.",
    imagen: "/images/treatments/Tratamiento tatuajes.jpg",
    orden: 5
  },
  {
    _id: "6",
    nombre: "Tratamiento Anti-Acné",
    descripcion: "Protocolo integral para combatir el acné activo, reducir cicatrices y prevenir futuros brotes, restaurando la salud de tu piel.",
    imagen: "/images/treatments/Tratamiento anti acne.jpg",
    orden: 6
  },


];

export default function Treatments() {
  const tratamientos = tratamientosEstaticos;

  return (
    <section className="py-[100px] bg-[#111111] relative" id="tratamientos">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Nuestros Servicios
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Tratamientos <em className="text-[#D4A017] italic">Exclusivos</em>
        </h2>
        <p className="text-center text-[0.95rem] text-[#888888] max-w-xl mx-auto mb-12 leading-[1.85]">
          Cada tratamiento es diseñado a la medida de tus necesidades para lograr resultados armoniosos y duraderos.
        </p>

        {tratamientos.length === 0 ? (
          <p className="text-center text-[#888888] text-[0.9rem] py-16">
            No hay tratamientos disponibles en este momento.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tratamientos.map((t, i) => (
              <div
                key={t._id}
                className="fade-up bg-[#0E0E0E] border border-[#B8860B]/12 hover:border-[#B8860B]/45 hover:-translate-y-1 transition-all duration-350 overflow-hidden group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <FallbackImg
                    src={t.imagen}
                    alt={t.nombre}
                    fallback={`https://placehold.co/400x500/0E0E0E/B8860B?text=${encodeURIComponent(t.nombre)}`}
                    className="w-full h-full object-contain bg-[#0a0a0a] group-hover:scale-[1.03] transition-all duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3
                    className="text-[1.35rem] font-normal text-white mb-2.5"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {t.nombre}
                  </h3>
                  <p className="text-[0.87rem] text-[#888888] leading-[1.75] mb-5">
                    {t.descripcion}
                  </p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#D4A017] group-hover:gap-3.5 transition-all duration-300"
                  >
                    Más información <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
