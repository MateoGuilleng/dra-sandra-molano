import { Schema, model, models } from "mongoose";

export interface IResena {
  _id?: string;
  nombre: string;
  texto: string;
  avatar: string;
  activo?: boolean;
  orden?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ResenaSchema = new Schema<IResena>(
  {
    nombre: { type: String, required: true, trim: true },
    texto:  { type: String, required: true, trim: true },
    avatar: { type: String, required: true, trim: true },
    activo: { type: Boolean, default: true },
    orden:  { type: Number, default: 0 },
  },
  {
    timestamps: true,
    collection: "Resenas",
  }
);

const Resena = models.Resena ?? model<IResena>("Resena", ResenaSchema);

export default Resena;
