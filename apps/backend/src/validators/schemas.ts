import { z } from "zod"

export const schemas = {
    signupSchema: z.object({
        body: z.object({
            username: z.string(),
            email: z.email(),
            password: z.string()
        })
    }),
    
    signinSchema: z.object({
        body: z.object({
            identifier: z.string(),
            password: z.string()
        })
    }),

    logoutSchema: z.object({
        body: z.object({})
    })
}