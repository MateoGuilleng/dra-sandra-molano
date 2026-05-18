import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("MONGODB_URI no está definida en las variables de entorno.");
}

// En desarrollo Next.js recarga módulos en cada hot-reload, por lo que
// guardamos la promesa de conexión en el objeto global para reutilizarla.
declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: Promise<typeof mongoose> | undefined;
}

async function connectDB(): Promise<typeof mongoose> {
  if (global._mongooseConn) {
    return global._mongooseConn;
  }

  global._mongooseConn = mongoose.connect(URI as string);
  return global._mongooseConn;
}

export default connectDB;
