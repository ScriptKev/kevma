import { Schema, Document, model } from 'mongoose'

export interface ILocationSchema extends Document {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string,
}

const LocationSchema: Schema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  type: { type: String, },
  dimension: { type: String },
  residents: { type: Array },
  url: { type: String },
}, {
  timestamps: true,
  versionKey: false
})

export default model<ILocationSchema>('Location', LocationSchema)