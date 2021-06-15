import React, { useState } from "react";
import { Auth } from "../Models/Auth";



const AuthContext: React.Context<Auth> = React.createContext<Auth>({
    token: '',
    isLoggedIn: false,
    login: (token: string, expirationTime: number) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime: number): number => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    const reaming = adjExpirationTime - currentTime;
    return reaming;
}

export const AuthContextProvider: React.FC = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState<string>(initialToken ?? '');

    const userIsLoggedIn = !!token;

    const loginHandler = (token: string, expirationTime: number) => {
        setToken(token);
        localStorage.setItem('token', token);
        const reamingTime = calculateRemainingTime(expirationTime);

        setTimeout(logoutHandler, reamingTime )
    }
    const logoutHandler = () => {
        setToken('');
        localStorage.removeItem('token');
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