import * as mongoose from 'mongoose'

export interface Medico extends mongoose.Document {
  name: string
  crm: string
}

const medicoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  crm: {
    type: String,
    unique: true,
  },
})

export const Medico = mongoose.model<Medico>('Medico', medicoSchema)
