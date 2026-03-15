import { appConfig } from "../config";
import cors from 'cors'

export const corsMiddleware = () => cors({
    origin: appConfig.client.serverUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
})
