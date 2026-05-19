import connectDB from "@/lib/mongodb";
import Resena from "@/models/Resena";

export async function GET() {
  try {
    await connectDB();

    const resenas = await Resena.find({})
      .sort({ orden: 1, createdAt: 1 })
      .lean();

    return Response.json({ ok: true, data: resenas });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json({ ok: false, message }, { status: 500 });
  }
}
