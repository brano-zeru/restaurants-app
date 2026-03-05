import { authDataProvider } from "../dal/authDataProvider"

export const authService = () => {
    const signup = async (username: string, email: string, password: string) => {
        return authDataProvider().signup(username, email, password)
    }

    const signin = async (username: string, password: string) => {
        return authDataProvider().signin(username, password)
    }

    return {
        signup,
        signin
    }
}