import * as mongoose from 'mongoose'

export interface Leito extends mongoose.Document {
  name: string
  document: string
}

const leitoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  document: {
    type: String,
    unique: true,
  },
})

export const Leito = mongoose.model<Leito>('Leito', leitoSchema)
