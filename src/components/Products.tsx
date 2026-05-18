import ProductsCarousel from "@/components/ProductsCarousel";
import connectDB from "@/lib/mongodb";
import Producto, { type IProducto } from "@/models/Producto";

async function getProductos(): Promise<IProducto[]> {
  try {
    await connectDB();
    const docs = await Producto.find({}).sort({ orden: 1, createdAt: 1 }).lean();
    // lean() devuelve objetos planos — serializar _id a string para el cliente
    return docs.map((d) => ({
      ...d,
      _id: String(d._id),
    })) as IProducto[];
  } catch (err) {
    console.error("[Products] Error al obtener productos:", err);
    return [];
  }
}

export default async function Products() {
  const productos = await getProductos();

  return (
    <section className="py-[100px] bg-[#080808] relative overflow-hidden" id="productos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[0.68rem] font-semibold tracking-[0.25em] uppercase text-[#D4A017] mb-3">
          Skincare de Élite
        </p>
        <span className="block w-12 h-px bg-[#B8860B] mx-auto mb-5" />
        <h2
          className="text-center text-[2.2rem] font-light text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Nuestros <em className="text-[#D4A017] italic">Productos</em>
        </h2>
        <p className="text-center text-[0.9rem] text-[#888888] max-w-lg mx-auto mb-14 leading-[1.85]">
          Líneas médicas seleccionadas por la Dra. Sandra Molano para complementar y potenciar tus tratamientos.
        </p>

        <ProductsCarousel products={productos} />
      </div>
    </section>
  );
}
