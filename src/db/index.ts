import Characters from '~/db/models/Characters'
import Episodes from '~/db/models/Episodes'
import Locations from '~/db/models/Locations'
import { setInitCharacters, setInitEpisodes, setInitLocations } from './queries'

const isDbEmpty = async () => {
  let characterLength: number, episodesLength: number, locationsLength: number

  await Characters.find((err, character) => {
    if (err) return console.error(err)
    characterLength = character.length
  })

  await Episodes.find((err, episodes) => {
    if (err) return console.error(err)
    episodesLength = episodes.length
  })

  await Locations.find((err, locations) => {
    if (err) return console.error(err)
    locationsLength = locations.length
  })

  return {
    characterLength,
    episodesLength,
    locationsLength
  }
}

const initDatabase = async () => {
  const { characterLength, episodesLength, locationsLength } = await isDbEmpty()

  !characterLength && setInitCharacters()
  !episodesLength && setInitEpisodes()
  !locationsLength && setInitLocations()
}

export { initDatabase }