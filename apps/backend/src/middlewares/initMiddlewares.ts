import { Application } from "express";
import { Middleware } from "../types";

export const initMiddlewares = (app: Application, middlewares: Middleware[]) => 
    middlewares.forEach(({middleware}) =>  app.use(middleware))