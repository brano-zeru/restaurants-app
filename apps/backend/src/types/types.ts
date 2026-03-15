import { ErrorRequestHandler, RequestHandler, Router } from "express"
import { Secret, SignOptions } from "jsonwebtoken"

export interface AppConfig {
    server: {
        port: number,
        cert: string,
        key: string
    },
    client: {
        serverUrl: string
    },
    jwt: {
        name: string,
        secret: Secret,
        options: SignOptions
    }
}

export type Route = {
    key: string,
    path: string,
    route: Router
}

export type Middleware = {
    key: string,
    middleware: RequestHandler | ErrorRequestHandler,
    isPostRoutes?: boolean
}
