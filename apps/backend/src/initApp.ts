import { Application } from 'express'
import { initMiddlewares, middlewareKeys } from './middlewares'
import { initRoutes } from './routes'
import { Middleware, Route } from './types'

export const initApp = (app: Application, routes: Route[], middlewares: Middleware[]) => {
    initMiddlewares(app, middlewares.filter(({key}) => key !== middlewareKeys.ERROR_MIDDLEWARE))
    initRoutes(app, routes)
    initMiddlewares(app, middlewares.filter(({key}) => key === middlewareKeys.ERROR_MIDDLEWARE))
}