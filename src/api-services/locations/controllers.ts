import { Request, Response } from 'express'
import Locations from '~/db/models/Locations'

export const getLocations = async (req: Request, res: Response) => {
  const locations = await Locations.find()

  res.status(200).json(locations)
}