import { Schema, Document, model } from 'mongoose'

export interface IEpisodeSchema extends Document {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string,
}

const EpisodeSchema: Schema = new Schema({
  id: { type: Number, unique: true },
  name: { type: String },
  air_date: { type: String, },
  episode: { type: String },
  characters: { type: Array },
  url: { type: String },
}, {
  timestamps: true,
  versionKey: false
})

export default model<IEpisodeSchema>('Episode', EpisodeSchema)