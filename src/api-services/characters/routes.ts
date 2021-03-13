import { Router } from 'express'
import { getCharacters } from './controllers'
const router = Router()

router.get('/characters', getCharacters)

export default router