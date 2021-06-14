import React, { useState } from "react";

interface Auth {
    token: string,
    isLoggedIn: boolean,
    login: (token: string) => void,
    logout: () => void
}

const AuthContext: React.Context<Auth> = React.createContext<Auth>({
    token: '',
    isLoggedIn: false,
    login: (token: string) => { },
    logout: () => { }
})

export const AuthContextProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<string>('');

    const userIsLoggedIn = !!token;

    const loginHandler = (token: string) => {
        setToken(token)
    }
    const logoutHandler = () => {
        setToken('')
    }

    const contextValue: Auth = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler

    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;