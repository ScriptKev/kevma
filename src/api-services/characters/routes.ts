import { Router } from 'express'
import { getCharacters, createCharacter } from './controllers'
const router = Router()

router.get('/characters', getCharacters)
router.post('/characters', createCharacter)

export default router
