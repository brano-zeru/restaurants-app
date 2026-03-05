import { config } from 'dotenv'
import { AppConfig } from '../types'
import { SignOptions } from 'jsonwebtoken'

config()

export const appConfig: AppConfig = {
    server: {
        port: Number(process.env.SERVER_PORT),
        cert: process.env.CERT || '',
        key: process.env.KEY || ''
    },
    client: {
        serverUrl: process.env.CLIENT_SERVER_URL || ''
    },
    jwt: {
        name: process.env.JWT_COOKIE_NAME || 'token',
        secret: process.env.JWT_SECRET || '',
        options: {
            expiresIn: process.env.JWT_EXPIRES_IN
        } as SignOptions
    }
}