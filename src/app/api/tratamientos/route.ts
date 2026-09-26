// Datos estáticos de tratamientos (sitio completamente estático)
const tratamientosEstaticos = [
  {
    _id: "1",
    nombre: "Armonización Facial",
    descripcion: "Equilibrio natural de las proporciones faciales mediante técnicas avanzadas de modelado, realzando tu belleza sin alterar tus rasgos distintivos.",
    imagen: "/images/treatments/armonizacion.jpg",
    orden: 1,
    activo: true
  },
  {
    _id: "2",
    nombre: "Toxina Botulínica",
    descripcion: "Tratamiento seguro para reducir líneas de expresión y arrugas dinámicas, proporcionando un aspecto juvenil y natural sin perder expresividad.",
    imagen: "/images/treatments/botox.jpg",
    orden: 2,
    activo: true
  },
  {
    _id: "3",
    nombre: "Bioestimuladores de Colágeno",
    descripcion: "Estimulación natural de la producción de colágeno para mejorar la firmeza, elasticidad y calidad de la piel desde sus capas más profundas.",
    imagen: "/images/treatments/bioestimuladores.jpg",
    orden: 3,
    activo: true
  },
  {
    _id: "4",
    nombre: "Tratamientos Láser",
    descripcion: "Tecnología láser avanzada para rejuvenecimiento facial, eliminación de manchas, tratamiento de acné y estimulación de colágeno.",
    imagen: "/images/treatments/laser.jpg",
    orden: 4,
    activo: true
  },
  {
    _id: "5",
    nombre: "Estética Corporal",
    descripcion: "Soluciones personalizadas para moldear la silueta, reducir grasa localizada y mejorar la textura de la piel con tecnología de última generación.",
    imagen: "/images/treatments/corporal.jpg",
    orden: 5,
    activo: true
  },
  {
    _id: "6",
    nombre: "Skincare Médico",
    descripcion: "Rutinas y tratamientos dermatológicos personalizados para el cuidado integral de la piel, adaptados a tu tipo y necesidades específicas.",
    imagen: "/images/treatments/skincare.jpg",
    orden: 6,
    activo: true
  },
  {
    _id: "7",
    nombre: "Eliminación de Tatuajes",
    descripcion: "Proceso seguro y efectivo para eliminar tatuajes no deseados con tecnología láser Q-Switched, minimizando molestias y maximizando resultados.",
    imagen: "/images/treatments/Eliminacion de tatuajes.jpg",
    orden: 7,
    activo: true
  },
  {
    _id: "8",
    nombre: "Tratamiento Capilar",
    descripcion: "Soluciones avanzadas para problemas de pérdida de cabello, fortalecimiento del folículo y mejora de la densidad capilar con resultados comprobados.",
    imagen: "/images/treatments/Tratamiento capilar.jpg",
    orden: 8,
    activo: true
  },
  {
    _id: "9",
    nombre: "Depilación Láser",
    descripcion: "Tecnología láser diodo para una depilación definitiva, segura y cómoda en todas las áreas del cuerpo, con resultados duraderos.",
    imagen: "/images/treatments/Tratamiento depilacion laser.jpg",
    orden: 9,
    activo: true
  },
  {
    _id: "10",
    nombre: "Tratamiento Anti-Acné",
    descripcion: "Protocolo integral para combatir el acné activo, reducir cicatrices y prevenir futuros brotes, restaurando la salud de tu piel.",
    imagen: "/images/treatments/Tratamiento anti acne.jpg",
    orden: 10,
    activo: true
  },
  {
    _id: "11",
    nombre: "Tratamiento Anti-Manchas",
    descripcion: "Eliminación efectiva de manchas solares, melasma y hiperpigmentación con tecnología láser y peelings médicos personalizados.",
    imagen: "/images/treatments/Tratamiento anti manchas.jpg",
    orden: 11,
    activo: true
  },
  {
    _id: "12",
    nombre: "Estimulación de Colágeno",
    descripcion: "Técnicas avanzadas para estimular la producción natural de colágeno, mejorando la firmeza, elasticidad y juventud de la piel.",
    imagen: "/images/treatments/Estimulacion de colageno.jpg",
    orden: 12,
    activo: true
  }
];

export async function GET() {
  try {
    return Response.json({ ok: true, data: tratamientosEstaticos });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json({ ok: false, message }, { status: 500 });
  }
}
