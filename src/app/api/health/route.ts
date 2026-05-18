import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      ok: true,
      message: "Conexión a MongoDB exitosa",
      status: "connected",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return Response.json(
      { ok: false, message, status: "error" },
      { status: 500 }
    );
  }
}
