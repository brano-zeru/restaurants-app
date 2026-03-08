import { Application } from "express";
import { Route } from "../types";

export const initRoutes = (app: Application, routes: Route[]) => {
    routes.forEach(route => {
        app.use(route.path, route.route)
    })
}