import { Request, Response } from 'express'

export const getLocations = (req: Request, res: Response) => {
  res.json({
    message: 'Get Locations'
  })
}