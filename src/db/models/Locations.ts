import { Schema, Document, model } from 'mongoose'

const opts = {
  createdAt: 'created',
  updatedAt: 'updated',
  timestamps: true,
  versionKey: false,
};
export interface ILocationSchema extends Document {
  name: string
  type: string
  dimension: string
}

const LocationSchema: Schema = new Schema({
  name: { type: String },
  type: { type: String, },
  dimension: { type: String },
}, opts)

export default model<ILocationSchema>('Location', LocationSchema)