// Datos estáticos de reseñas (sitio completamente estático)
const resenasEstaticas = [
  {
    _id: "1",
    nombre: "Juan Castiblanco",
    texto: "La Dra. Sandra Molano transformó mi autoestima. Sus tratamientos son seguros y los resultados son naturales. ¡Recomendada 100%!",
    avatar: "/images/reviews/juan-castiblanco.jpg",
    orden: 1,
    activo: true
  },
  {
    _id: "2", 
    nombre: "Gustavo Castro",
    texto: "Excelente profesional. Me realizó un tratamiento de armonización facial y los resultados superaron mis expectativas. Atención personalizada y de calidad.",
    avatar: "/images/reviews/gustavo-castro.jpg",
    orden: 2,
    activo: true
  },
  {
    _id: "3",
    nombre: "Rodrigo Uribe",
    texto: "Después de probar varios profesionales, encontré en la Dra. Sandra a alguien que realmente entiende la belleza natural. Su consultorio es espectacular.",
    avatar: "/images/reviews/rodrigo-uribe.jpg",
    orden: 3,
    activo: true
  },
  {
    _id: "4",
    nombre: "María González",
    texto: "Increíble tratamiento capilar. Después de meses de preocupación por la pérdida de cabello, he recuperado confianza gracias a sus cuidados.",
    avatar: "/images/reviews/juan-castiblanco.jpg",
    orden: 4,
    activo: true
  },
  {
    _id: "5",
    nombre: "Ana Rodríguez",
    texto: "La depilación láser con la Dra. Sandra ha sido la mejor decisión. Sin dolor, resultados visibles desde la primera sesión. Profesional y amable.",
    avatar: "/images/reviews/gustavo-castro.jpg",
    orden: 5,
    activo: true
  },
  {
    _id: "6",
    nombre: "Carlos Mendoza",
    texto: "Tratamiento anti-manchas excelente. Mi piel ha mejorado notablemente. El equipo es de última tecnología y la atención es excepcional.",
    avatar: "/images/reviews/rodrigo-uribe.jpg",
    orden: 6,
    activo: true
  }
];

export async function GET() {
  try {
    return Response.json({ ok: true, data: resenasEstaticas });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json({ ok: false, message }, { status: 500 });
  }
}
