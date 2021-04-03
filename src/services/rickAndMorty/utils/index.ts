import {
  TFetchDataCharacters,
  TCharacterNormalized,
  TFetchDataEpisodes,
  TEpisodeNormalized,
  TFetchDataLocations,
  TLocationNormalized
} from '~/types'

export const normalizeFetchDataCharacters = (data: TFetchDataCharacters) => {
  const charactersNormalized: TCharacterNormalized[] = data.results.map(character => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      origin: {
        name: character.origin.name,
        url: character.origin.url
      },
      location: {
        name: character.location.name,
        url: character.location.url
      },
      image: character.image,
      episode: character.episode,
      created: character.created,
    }
  })

  return charactersNormalized
}

export const normalizeFetchDataEpisodes = (data: TFetchDataEpisodes) => {
  const episodesNormalized: TEpisodeNormalized[] = data.results.map(episode => {
    return {
      id: episode.id,
      name: episode.name,
      air_date: episode.air_date,
      episode: episode.episode,
      created: episode.created
    }
  })

  return episodesNormalized
}

export const normalizeFetchDataLocations = (data: TFetchDataLocations) => {
  const locationsNormalized: TLocationNormalized[] = data.results.map(location => {
    return {
      id: location.id,
      name: location.name,
      type: location.type,
      dimension: location.dimension,
      created: location.created
    }
  })

  return locationsNormalized
}