import { FailedLoginError } from "@restaurants-app/types"
import { Request, Response, NextFunction } from "express"
import {StatusCodes} from 'http-status-codes'
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken"

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof TokenExpiredError) {
        res.status(StatusCodes.UNAUTHORIZED).json({message: 'token expaired should refresh'})
    }

    if (err instanceof JsonWebTokenError) {
        res.status(StatusCodes.UNAUTHORIZED).json({message: 'token is invalid, log out'})
    }

    if (err instanceof FailedLoginError) {
        res.status(err.status).json({message: err.message})
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: err.name,
        message: err.message,
    })
}