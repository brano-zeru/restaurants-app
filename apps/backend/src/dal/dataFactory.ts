import { authDataProvider as createAuthDataProvider } from "./authDataProvider"

export const providerKeys = {
    AUTH_PROVIDER: 'authProvider',
} as const

const dataProviderCreator = {
    [providerKeys.AUTH_PROVIDER]: createAuthDataProvider 
}

type ProvidersMap = {
    [K in keyof typeof dataProviderCreator]: ReturnType<typeof dataProviderCreator[K]>
};

export class DataProviderFactory {
    private instances: Map<string, object> = new Map()
    private creatorMapper: typeof dataProviderCreator

    constructor(creatorMapper: typeof dataProviderCreator) {
        this.creatorMapper = creatorMapper
    }

    private setProvider(providerKey: keyof ProvidersMap) {
        const creator = this.creatorMapper[providerKey]
        const instance = creator()
        this.instances.set(providerKey, instance)
    }

    public getProvider<K extends keyof ProvidersMap> (providerKey: K): ProvidersMap[K] {
        let providerInstance = this.instances.get(providerKey)

        if (!providerInstance) {
            this.setProvider(providerKey)

            providerInstance = this.instances.get(providerKey)
        }

        return providerInstance as ProvidersMap[K];
    }
}

export const dataProvider = new DataProviderFactory(dataProviderCreator)