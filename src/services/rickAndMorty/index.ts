import fetch from 'node-fetch'
import { normalizeFetchDataCharacters, normalizeFetchDataEpisodes, normalizeFetchDataLocations } from './utils'
import {
  TFetchDataCharacters,
  TCharacterNormalized,
  TFetchDataEpisodes,
  TEpisodeNormalized,
  TFetchDataLocations,
  TLocationNormalized
} from '~/types'

export const getApiCharacters = async (): Promise<TCharacterNormalized[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const body: TFetchDataCharacters = await res.json()
  const characters = normalizeFetchDataCharacters(body)

  return characters
}

export const getApiEpisodes = async (): Promise<TEpisodeNormalized[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/episode')
  const body: TFetchDataEpisodes = await res.json()
  const episodes = normalizeFetchDataEpisodes(body)

  return episodes
}

export const getApiLocations = async (): Promise<TLocationNormalized[]> => {
  const res = await fetch('https://rickandmortyapi.com/api/location')
  const body: TFetchDataLocations = await res.json()
  const locations = normalizeFetchDataLocations(body)

  return locations
}
