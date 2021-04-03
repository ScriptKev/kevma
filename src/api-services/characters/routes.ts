import { Router } from 'express'
import { getCharacters, createCharacter, getCharactersById, deleteCharacter, updateCharacter } from './controllers'
const router = Router()

router.get('/characters', getCharacters)
router.get('/characters/:id', getCharactersById)
router.post('/characters', createCharacter)
router.delete('/characters/:id', deleteCharacter)
router.put('/characters/:id', updateCharacter)

export default router
