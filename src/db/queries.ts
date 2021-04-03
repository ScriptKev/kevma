import { getApiCharacters, getApiEpisodes, getApiLocations } from "~/services/rickAndMorty"
import Character from './models/Characters'
import Episodes from './models/Episodes'
import Locations from './models/Locations'

export const setInitCharacters = async () => {
  const characters = await getApiCharacters()

  Character.collection.insertMany(characters, (err, docs) => {
    if (err) console.error(err)
    else console.log('Characters DB Initialize')
  })
}

export const setInitEpisodes = async () => {
  const episodes = await getApiEpisodes()

  Episodes.collection.insertMany(episodes, (err, docs) => {
    if (err) console.error(err)
    else console.log('Episodes DB Initialize')
  })
}

export const setInitLocations = async () => {
  const locations = await getApiLocations()

  Locations.collection.insertMany(locations, (err, docs) => {
    if (err) console.error(err)
    else console.log('Locations DB Initialize')
  })
}
