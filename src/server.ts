import express from 'express'
import cors from 'cors'
import config from '~/config'
import { charactersRoutes, episodesRoutes, locationsRoutes, HandleErrors, NotFound, Root } from '~/routes'

const server = express()

server.set('port', config.PORT)

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api', charactersRoutes)
server.use('/api', episodesRoutes)
server.use('/api', locationsRoutes)
server.use(NotFound)
server.use(HandleErrors)

export default server