import * as mongoose from 'mongoose'

export interface Paciente extends mongoose.Document {
  name: string
  document: string
}

const pacienteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  document: {
    type: String,
    unique: true,
  },
})

export const Paciente = mongoose.model<Paciente>('Paciente', pacienteSchema)
