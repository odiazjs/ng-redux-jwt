export const DEFAULT_PROTOCOL = 'https'
export const DEFAULT_AUTH_SCHEME = 'Bearer'

export const config = ( configFile: ConfigFile ): AuthConfig => {
    return {
        protocol: configFile.protocol ? configFile.protocol : DEFAULT_PROTOCOL,
        scheme: configFile.scheme ? configFile.scheme : DEFAULT_AUTH_SCHEME,
        urlConfig: {
            baseUrl: configFile.urlConfig.baseUrl,
            version: configFile.urlConfig.version,
            loginEndpoint: configFile.urlConfig.loginEndpoint,
            logoutEndpoint: configFile.urlConfig.logoutEndpoint,
            refreshTokenEndpoint: configFile.urlConfig.refreshTokenEndpoint
        }
    }
}

export interface ConfigFile {
    protocol: string,
    scheme: string,
    urlConfig: AuthUrlConfig
}
export interface AuthUrlConfig {
    baseUrl: string,
    version: string,
    loginEndpoint: string,
    logoutEndpoint: string,
    refreshTokenEndpoint: string
}
export interface AuthConfig {
    protocol: string,
    scheme: string,
    urlConfig: AuthUrlConfig
}
