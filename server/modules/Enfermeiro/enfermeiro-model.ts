import * as mongoose from 'mongoose'

export interface Enfermeiro extends mongoose.Document {
  name: string
  coren: string
}

const enfermeiroSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  coren: {
    type: String,
    unique: true,
  },
})

export const Enfermeiro = mongoose.model<Enfermeiro>(
  'Enfermeiro',
  enfermeiroSchema
)
