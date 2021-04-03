import { Request, Response, NextFunction } from 'express'
import charactersRoutes from '~/api-services/characters/routes'
import locationsRoutes from '~/api-services/locations/routes'
import episodesRoutes from '~/api-services/episodes/routes'

export const Root = (req: Request, res: Response) => {
  res.status(204).json({
    message: 'Acceda a las siguientes rutas',
    routes: ['/api/login', '/api/register']
  })
}

export const NotFound = (req: Request, res: Response) => {
  res.status(204).json({
    message: 'Ruta no encontrada porfavor ingrese a /api'
  })
}

export const HandleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).json({
    message: 'Algo salio mal!'
  })
}

export {
  charactersRoutes,
  locationsRoutes,
  episodesRoutes
}