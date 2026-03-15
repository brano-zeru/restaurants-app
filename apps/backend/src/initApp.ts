import { Application } from 'express'
import { initMiddlewares } from './middlewares'
import { initRoutes } from './routes'
import { Middleware, Route } from './types'
import partition from 'lodash.partition'

export const initApp = (app: Application, routes: Route[], middlewares: Middleware[]) => {
    const [
        postRoutes,
        preRoutes
    ] = partition<Middleware>(middlewares, ({isPostRoutes}) => isPostRoutes)
    
    initMiddlewares(app, preRoutes)
    initRoutes(app, routes)
    initMiddlewares(app, postRoutes)
}