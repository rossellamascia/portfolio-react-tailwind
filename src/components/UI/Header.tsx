import { useContext } from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import AuthContext from "../../store/auth-context";

export interface HeaderProps {

}

const Header: React.VFC<HeaderProps> = () => {
    const contextAuth = useContext(AuthContext);
    const logoutHandler = () => {
        contextAuth.logout();
    }

    const location = useLocation();

    console.log(location);
    

    
    
    return (
        <header className="w-full px-4 pt-8 max-w-5xl h-20 mx-auto">
            <nav className="flex items-center justify-between flex-wrap ">
                <div className="flex gap-2 items-center">
                    <a href="mailto:{{.}}" aria-label="EMail">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="12" cy="12" r="4" />
                            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                        </svg>
                    </a>

                    <NavLink to="/" className="flex items-center font-bold">
                        Rossella Mascia
                    </NavLink>
                </div>

                <ul id="nav-menu" className="flex w-auto mt-0 space-x-2">
                    <li>
                        <NavLink to="/about" className="hover:text-blue-800 dark:hover:text-blue-300">About me</NavLink>
                    </li>
                    {contextAuth.isLoggedIn && (
                        <>
                            <li>
                                <NavLink activeClassName="border-purple-800 border-b-8 font-bold rounded" to="/settings" className="hover:text-purple-800 p-5  dark:hover:text-blue-300 ">Settings</NavLink>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={logoutHandler}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;