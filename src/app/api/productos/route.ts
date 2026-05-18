import connectDB from "@/lib/mongodb";
import Producto from "@/models/Producto";

export async function GET() {
  try {
    await connectDB();

    const productos = await Producto.find({})
      .sort({ orden: 1, createdAt: 1 })
      .lean();

    return Response.json({ ok: true, data: productos });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json({ ok: false, message }, { status: 500 });
  }
}
