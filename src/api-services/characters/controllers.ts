import { Request, Response } from 'express'
import Characters from '~/db/models/Characters'

type TNewCharacter = {
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
    url: string | null
  }
  location: {
    name: string
    url: string | null
  }
}

type TUpdateCharacter = {
  name?: string
  status?: string
  species?: string
  gender?: string
  origin?: {
    name: string
    url: string | null
  }
  location?: {
    name: string
    url: string | null
  }
}

export const getCharacters = async (req: Request, res: Response) => {
  const characters = await Characters.find()

  res.status(200).json(characters)
}

export const getCharactersById = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const character = await Characters.findById(id)

  res.status(200).json(character)
}

export const createCharacter = async (req: Request, res: Response) => {
  const reqCharacter: TNewCharacter = req.body

  const characterNormalize = {
    name: reqCharacter.name,
    status: reqCharacter.status,
    species: reqCharacter.species,
    gender: reqCharacter.gender,
    origin: {
      name: reqCharacter.origin.name,
      url: reqCharacter.origin.url || null,
    },
    location: {
      name: reqCharacter.location.name,
      url: reqCharacter.location.url || null,
    },
    image: 'https://raw.githubusercontent.com/ScriptKev/rickandmorty-crud-front/main/src/assets/images/custom-image.jpg'
  }

  const newCharacter = await new Characters(characterNormalize)
  const characterSaved = await newCharacter.save()

  res.status(200).json(characterSaved)
}

export const deleteCharacter = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const character = await Characters.findByIdAndDelete(id)

  res.status(200).json({
    message: `${character.name} were deleted successfully`
  })
}

export const updateCharacter = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const updatedCharacter: TUpdateCharacter = req.body

  const character = await Characters.findByIdAndUpdate(id, updatedCharacter)

  res.status(200).json(`${character.name} was updated sucessfully`)
}
