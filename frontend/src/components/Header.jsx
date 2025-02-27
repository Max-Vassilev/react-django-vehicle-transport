import { useState } from "react";
import useIsLoggedIn from "../isLoggedIn";

function Header() {
    const isLoggedIn = useIsLoggedIn();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto px-4">
                <a href="/" className="text-lg font-bold text-white flex items-center space-x-2 lg:hidden">
                    <i className="fas fa-home text-xl"></i>
                    <span>Home</span>
                </a>

                <button 
                    className="lg:hidden text-white text-3xl ml-auto" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <nav className={`w-full mt-4 lg:mt-0 ${menuOpen ? 'block' : 'hidden'} lg:flex lg:justify-center`}>
                    <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-2 lg:space-y-0">
                        <li className="hidden lg:block">
                            <a href="/" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-home text-lg"></i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/pricing" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-dollar-sign text-lg"></i>
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contacts" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-phone text-lg"></i>
                                <span>Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                <i className="fas fa-circle-info text-lg"></i>
                                <span>About</span>
                            </a>
                        </li>
                        {isLoggedIn && (
                            <li>
                                <a href="/my-requests" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                    <i class="fa-solid fa-folder-open text-lg"></i>
                                    <span>All Requests</span>
                                </a>
                            </li>
                        )}
                    </ul>

                    <div className="hidden lg:block mx-8"></div>

                    <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-2 lg:space-y-0">
                        {isLoggedIn ? (
                            <li>
                                <a href="/logout" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                    <i className="fa-solid fa-right-from-bracket text-lg"></i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <a href="/login" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                        <i className="fa-solid fa-right-to-bracket text-lg"></i>
                                        <span>Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/register" className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-blue-600 transition">
                                        <i className="fa-solid fa-id-card text-lg"></i>
                                        <span>Register</span>
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
