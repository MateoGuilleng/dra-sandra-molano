export async function GET() {
  return Response.json({
    ok: true,
    message: "Sitio estático funcionando correctamente",
    status: "static",
    timestamp: new Date().toISOString()
  });
}
