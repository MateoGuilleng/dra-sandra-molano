import { Schema, model, models } from "mongoose";

export interface ITratamiento {
  _id?: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  activo?: boolean;
  orden?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const TratamientoSchema = new Schema<ITratamiento>(
  {
    nombre:      { type: String, required: true, trim: true },
    descripcion: { type: String, required: true, trim: true },
    imagen:      { type: String, required: true, trim: true },
    activo:      { type: Boolean, default: true },
    orden:       { type: Number, default: 0 },
  },
  {
    timestamps: true,
    collection: "Tratamientos",
  }
);

const Tratamiento =
  models.Tratamiento ?? model<ITratamiento>("Tratamiento", TratamientoSchema);

export default Tratamiento;
