import { Schema, Document, model } from 'mongoose'

type TFalsy = null | '' | 0 | [] | undefined

const opts = {
  createdAt: 'created',
  updatedAt: 'updated',
  timestamps: true,
  versionKey: false,
}

export interface ICharacterSchema extends Document {
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
    url: string | TFalsy
  }
  location: {
    name: string
    url: string | TFalsy
  }
  image: string
  episode: string[]
}

const CharacterSchema: Schema = new Schema({
  name: { type: String },
  status: { type: String, },
  species: { type: String },
  gender: { type: String },
  origin: { type: Object },
  location: { type: Object },
  image: { type: String },
  episode: { type: Array },
}, opts)

export default model<ICharacterSchema>('Character', CharacterSchema)