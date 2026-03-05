import jwt from "jsonwebtoken"
import { appConfig } from "../config";
import { NextFunction, Request, Response } from "express";
import { UserDTO } from "@restaurants-app/types";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies[appConfig.jwt.name]
    
    if (!token) {
        return res.status(401).json({message: 'you are not logged in'}) 
    }

    try {
        const decodedToken = jwt.verify(token, appConfig.jwt.secret) as UserDTO 

        req.user = decodedToken
        next()

    } catch (error) {
        throw error
    }
}