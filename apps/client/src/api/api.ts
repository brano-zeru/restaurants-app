import type { Api } from "../types"
import { fetchApi } from "./fetchApi"
import type { LoginRequestDTO, UserDTO } from "@restaurants-app/types"

export const api = (): Api => {
    const me = async () => {
        const response = await fetchApi<{user: UserDTO | null, message: string}>('/auth/me', 'GET')
        return response
    }

    const signup = async (username: string, email: string, password: string) => {
        const response = await fetchApi<UserDTO>('/auth/signup', 'POST', {
            username,
            email,
            password
        })
        return response
    }

    const signin = async ({identifier, password}: LoginRequestDTO) => {
        const response = await fetchApi<{user: UserDTO | null, message: string}>('/auth/signin', 'POST', {
            identifier,
            password
        })
        return response
    }

    const logout = async () => {
        const response = await fetchApi<{message: string}>('/auth/logout', 'POST')
        console.log(response.message)
        return response
    }

    return {
        me,
        signup,
        signin,
        logout
    }
}