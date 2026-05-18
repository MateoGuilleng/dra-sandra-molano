import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("MONGODB_URI no está definida en las variables de entorno.");
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConn: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

if (!global._mongooseConn) {
  global._mongooseConn = { conn: null, promise: null };
}

async function connectDB(): Promise<typeof mongoose> {
  // Ya conectado
  if (global._mongooseConn.conn) {
    return global._mongooseConn.conn;
  }

  // Conexión en progreso
  if (!global._mongooseConn.promise) {
    global._mongooseConn.promise = mongoose
      .connect(URI as string, {
        bufferCommands: false,
      })
      .then((m) => {
        console.log("[MongoDB] Conectado a:", m.connection.db?.databaseName);
        return m;
      });
  }

  global._mongooseConn.conn = await global._mongooseConn.promise;
  return global._mongooseConn.conn;
}

export default connectDB;
