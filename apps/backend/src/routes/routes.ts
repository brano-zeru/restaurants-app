import authRouter from "./authRouter"
import { Route } from "../types"

export const routeKeys = {
    AUTH: 'auth',
}

export const routes: Route[] = [
    {
        key: routeKeys.AUTH,
        path: `/${routeKeys.AUTH}`,
        route: authRouter
    }
]