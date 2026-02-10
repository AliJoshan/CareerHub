import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `transition ${isActive ? "text-green-600" : "text-gray-600 hover:text-green-600"
        }`;

    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center">
                        <img className="w-6" src="public/briefcase.png" alt="CareerHub" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                        CareerHub
                    </span>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                    <li><NavLink to="/jobs" className={linkClass}>Jobs</NavLink></li>
                    <li><NavLink to="/saved" className={linkClass}>Saved Jobs</NavLink></li>
                    <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
                </ul>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium text-gray-700 hover:text-green-600">
                        Sign In
                    </button>
                    <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition">
                        Post a Job
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    className="md:hidden text-gray-700"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
                        <li>
                            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/jobs" className={linkClass} onClick={() => setMenuOpen(false)}>
                                Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved" className={linkClass} onClick={() => setMenuOpen(false)}>
                                Saved Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
                                About
                            </NavLink>
                        </li>

                        <div className="pt-4 border-t flex flex-col gap-3">
                            <button className="text-left text-gray-700 hover:text-green-600">
                                Sign In
                            </button>
                            <button className="bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                                Post a Job
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
