import { Request, Response } from 'express'
import Characters from '~/db/models/Characters'

export const getCharacters = async (req: Request, res: Response) => {
  const characters = await Characters.find()

  res.json(characters)
}

export const createCharacter = async (req: Request, res: Response) => {
  const newCharacter = req.body
  console.log(newCharacter)

  res.status(200)
}