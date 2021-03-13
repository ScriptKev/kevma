import { Request, Response } from 'express'

export const getEpisodes = (req: Request, res: Response) => {
  res.json({
    message: 'Get Episodes'
  })
}