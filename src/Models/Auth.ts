export interface Auth {
    token: string,
    isLoggedIn: boolean,
    login: (token: string, expirationTime: number) => void,
    logout: () => void
}