import { FailedLoginError } from "@restaurants-app/types"
import { DataProviderFactory, providerKeys } from "../dal/dataFactory"

export const getAuthService = (dataFactory: DataProviderFactory) => {
    const authDataProvider = dataFactory.getProvider(providerKeys.AUTH_PROVIDER)

    const signup = async (username: string, email: string, password: string) => {
        return authDataProvider.signup(username, email, password)
    }

    const signin = async (username: string, password: string) => {
        const user = await authDataProvider.signin(username, password)
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