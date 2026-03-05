import express from 'express'
import authRouter from './routes/authRouter'
import cors from 'cors'
import { appConfig } from './config'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: appConfig.client.serverUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))
app.use('/auth', authRouter)

export {app}