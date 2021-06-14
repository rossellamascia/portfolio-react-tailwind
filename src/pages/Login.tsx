import { useContext, useRef, useState } from "react";
import useHttp from "../hooks/useHttp";
import AuthContext from "../store/auth-context";
import { keyApi } from "../utility";
import { Link, useHistory } from 'react-router-dom';
interface Error {
    error: {
        code: number,
        message: string,
        errors: [{
            domain: string,
            message: string,
            reason: string
        }]
    }
}
export interface LoginProps {

}

const Login: React.FC<LoginProps> = () => {

    const contextAuth = useContext(AuthContext);
    const history = useHistory();

    const [isLogin, setIsLogin] = useState<boolean>(false);
    const isLoginHandler = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, boolean: boolean) => {
        event.preventDefault();
        setIsLogin(boolean);
    }

    const email = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const { isLoading,
        sendRequest: singUpRequest } = useHttp();
    const [error, setError] = useState<Error>()


    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredEmail = email.current?.value;
        const enteredPassword = password.current?.value;

        // TO DO: Validation

        let url;

        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${keyApi}`

        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${keyApi}`
        }
        const dataSingUpResponse = (data: any) => {
            if (data.error && data.error.message) {
                setError(data)
            } else {
                setError(undefined);
                const expiationTime = new Date((new Date().getTime() + (+data.expiresIn * 1000)))
                contextAuth.login(data.idToken, +expiationTime);
                history.replace("/settings")
            }
        }
        singUpRequest({
            url,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            })
        }, dataSingUpResponse)
    }

    return (
        <section className="my-4 max-w-5xl mx-auto">
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {isLogin ? "Sign In" : "Sign Up"}
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input ref={email} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input min="7" ref={password} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="text-red-700">{error?.error.message}</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/new-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            {!isLoading && (
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    {isLogin ? "Sign In" : "Sign Up"}
                                </button>
                            )}

                            {isLoading && <p className="text-center">loading...</p>}
                        </div>
                        <div>
                            {isLogin ? <p className="text-center cursor-pointer" onClick={(e) => isLoginHandler(e, false)}>You have no account? Create account</p> :
                                <p className="text-center cursor-pointer" onClick={(e) => isLoginHandler(e, true)}>Do you already have an account? Login</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;