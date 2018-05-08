export interface JwtInfo {
    token: string
    username: string
    expired: () => boolean | null
    expires: number
}
export interface ReduxAction<T> {
    type: string,
    payload: T
}
