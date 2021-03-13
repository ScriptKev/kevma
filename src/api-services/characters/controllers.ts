import { Request, Response } from 'express'

export const getCharacters = (req: Request, res: Response) => {
  res.json({
    message: 'Get Characters'
  })
}