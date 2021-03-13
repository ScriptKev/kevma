import { Schema, Document, model } from 'mongoose'

type TFalsy = null | '' | 0 | [] | undefined

export interface ICharacterSchema extends Document {
  id: number
  name: string
  status: string
  species: string
  type: string | TFalsy,
  gender: string,
  origin: {
    name: string,
    url: string | TFalsy,
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string
}

const CharacterSchema: Schema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  status: { type: String, },
  species: { type: String },
  type: { type: String },
  gender: { type: String },
  origin: { type: Object },
  location: { type: Object },
  image: { type: String },
  episode: { type: Array },
  url: { type: String }
}, {
  timestamps: true,
  versionKey: false
})

export default model<ICharacterSchema>('Character', CharacterSchema)