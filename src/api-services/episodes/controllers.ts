import { Request, Response } from 'express'
import Episodes from '~/db/models/Episodes'

export const getEpisodes = async (req: Request, res: Response) => {
  const episodes = await Episodes.find()

  res.status(200).json(episodes)
}