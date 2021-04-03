import { Schema, Document, model } from 'mongoose'

const opts = {
  createdAt: 'created',
  updatedAt: 'updated',
  timestamps: true,
  versionKey: false,
};

export interface IEpisodeSchema extends Document {
  name: string
  air_date: string
  episode: string
}

const EpisodeSchema: Schema = new Schema({
  name: { type: String },
  air_date: { type: String, },
  episode: { type: String },
}, opts)

export default model<IEpisodeSchema>('Episode', EpisodeSchema)