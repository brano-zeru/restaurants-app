import { Request, Response } from "express"
import { authService } from "../services/authService"
import jwt from "jsonwebtoken"
import { appConfig } from "../config"

export const authController = () => {
    const me = async (req: Request, res: Response) => {
        return res.json({
            user: req.user,
            message: 'User found'
        })
    }

    const signup = async (req: Request, res: Response) => {
        const {username, email, password} = req.body
        const user = await authService().signup(username, email, password)
        return await res.status(201).json({user, message: 'Signup successful'})
    }

    const signin = async (req: Request, res: Response) => {
        try {
            const {identifier, password} = req.body
            const user = await authService().signin(identifier, password)

            const {secret, options} = appConfig.jwt
            const {id, username, email} = user

            const token = jwt.sign({id, username, email}, secret, options)

            attachCookie(res, token)

            return res.json({message: 'Signin successful', user})
        } catch (error) {
            console.error('Error in authController.signin:', error)
            return res.status(401).json({message: 'Invalid credentials', user: null})
        }
    }

    const attachCookie = (res: Response, token: string) => {
        const {name: jwtTokenName} = appConfig.jwt
        res.cookie(jwtTokenName, token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        })
    }

    const logout = async (req: Request, res: Response) => {
        const {name: jwtTokenName} = appConfig.jwt
        res.clearCookie(jwtTokenName)
        return res.json({message: 'Logout successful'})
    }

    return {
        signup,
        signin,
        logout,
        me
    }
}