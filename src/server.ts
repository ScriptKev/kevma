import express from 'express'
import config from './config'
import { charactersRoutes, episodesRoutes, locationsRoutes } from './routes'
import cors from 'cors'
const server = express()

server.set('port', config.PORT)

server.use(cors())
server.use(express.json())

server.use('/api', charactersRoutes)
server.use('/api', episodesRoutes)
server.use('/api', locationsRoutes)
server.use(() => console.log('Not Found'))

export default server