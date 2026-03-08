import { FailedLoginError } from "@restaurants-app/types"
import { authDataProvider } from "../dal/authDataProvider"

export const authService = () => {
    const signup = async (username: string, email: string, password: string) => {
        return authDataProvider().signup(username, email, password)
    }

    const signin = async (username: string, password: string) => {
        const user = await authDataProvider().signin(username, password)
        if (!user) {
            throw new FailedLoginError()
        }
        return user
    }

    return {
        signup,
        signin
    }
}