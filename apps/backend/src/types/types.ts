import { Secret, SignOptions } from "jsonwebtoken"

// export interface User {
//     id: string,
//     username: string,
//     email: string,
//     password: string
// }

export interface AppConfig {
    server: {
        port: number,
        cert: string,
        key: string
    },
    client: {
        serverUrl: string
    },
    jwt: {
        name: string,
        secret: Secret,
        options: SignOptions
    }
}