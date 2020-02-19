import * as mongoose from 'mongoose'

export const CursoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imgUrl: String
});