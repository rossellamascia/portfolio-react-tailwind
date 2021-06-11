import { NavLink } from "react-router-dom";

export interface HeaderProps {

}

const Header: React.VFC<HeaderProps> = () => {
    return (
        <header className="w-full px-4 pt-4 max-w-5xl mx-auto">
            <nav className="flex items-center justify-between flex-wrap">
                <div className="flex gap-2 items-center">
                    <a href="mailto:{{.}}" aria-label="EMail">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
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
                </ul>
            </nav>
        </header>
    );
}

export default Header;