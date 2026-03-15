import { Middleware } from "../types";
import { errorMiddleware } from "./error.middleware";
import cookieParser from "cookie-parser";
import express from "express";
import { corsMiddleware } from "./cors.middleware";

export const middlewareKeys = {
    JSON_PARSER: 'json_parser',
    COOKIE_PARSER: 'cookieParser',
    CORS: 'cors',
    ERROR_MIDDLEWARE: 'errorMiddleware'
} as const

export const middlewares: Middleware[] = [
    {key: middlewareKeys.JSON_PARSER, middleware: express.json()},
    {key: middlewareKeys.COOKIE_PARSER, middleware: cookieParser()},
    {key: middlewareKeys.CORS, middleware: corsMiddleware()},
    {key: middlewareKeys.ERROR_MIDDLEWARE, middleware: errorMiddleware, isPostRoutes: true}
]