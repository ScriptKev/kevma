export type TCharacterNormalized = {
  id: number
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
  image: string
  episode: string[]
  created: string
}

export type TFetchCharacter = {
  id: number
  name: string
  status: string
  species: string
  type: string | null | undefined
  gender: string
  origin: {
    name: string
    url: string | null
  }
  location: {
    name: string
    url: string | null
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type TFetchInfo = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type TFetchDataCharacters = {
  info: TFetchInfo
  results: [TFetchCharacter]
}

// Fetch Data Episodes

export type TEpisodeNormalized = {
  id: 1
  name: string
  air_date: string
  episode: string
  created: string
}

export type TFetchEpisode = {
  id: 1
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

export type TFetchDataEpisodes = {
  info: TFetchInfo
  results: [TFetchEpisode]
}

// Fetch Data Locations

export type TLocationNormalized = {
  id: number
  name: string
  type: string
  dimension: string
  created: string
}

export type TFetchLocation = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

export type TFetchDataLocations = {
  info: TFetchInfo
  results: [TFetchLocation]
}
