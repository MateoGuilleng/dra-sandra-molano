import connectDB from "@/lib/mongodb";
import Tratamiento from "@/models/Tratamiento";

export async function GET() {
  try {
    await connectDB();

    const tratamientos = await Tratamiento.find({})
      .sort({ orden: 1, createdAt: 1 })
      .lean();

    return Response.json({ ok: true, data: tratamientos });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json({ ok: false, message }, { status: 500 });
  }
}
