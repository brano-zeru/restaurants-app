import { Application } from 'express'
import { initMiddlewares } from './middlewares'
import { initRoutes } from './routes'
import { Middleware, Route } from './types'
import { partition } from './utils'

export const initApp = (app: Application, routes: Route[], middlewares: Middleware[]) => {
    const {
        unMatch: preRoutes,
        match: postRoutes
    } = partition<Middleware>(middlewares, ({isPostRoutes}) => isPostRoutes ?? false)

    initMiddlewares(app, preRoutes)
    initRoutes(app, routes)
    initMiddlewares(app, postRoutes)
}