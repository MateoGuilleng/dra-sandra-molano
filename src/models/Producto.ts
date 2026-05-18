import mongoose, { Schema, model, models } from "mongoose";

export interface IProducto {
  _id?: string;
  nombre: string;
  marca: string;
  descripcion: string;
  tag: string;
  imagen: string;
  activo?: boolean;
  orden?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductoSchema = new Schema<IProducto>(
  {
    nombre:      { type: String, required: true, trim: true },
    marca:       { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    tag:         { type: String, required: true, trim: true },
    imagen:      { type: String, required: true, trim: true },
    activo:      { type: Boolean, default: true },
    orden:       { type: Number, default: 0 },
  },
  {
    timestamps: true,
    collection: "Productos", // nombre exacto de la colección en MongoDB
  }
);

// Evita re-compilar el modelo en hot-reload de Next.js
const Producto = models.Producto ?? model<IProducto>("Producto", ProductoSchema);

export default Producto;
