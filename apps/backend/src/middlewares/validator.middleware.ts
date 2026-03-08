import { NextFunction, Request, Response } from "express";
import { z } from "zod"

export const initValidatorMiddleware = (schema: z.ZodType) =>
    (req: Request, _res: Response, next: NextFunction) => {
        schema.parse(req)
        next()
    }