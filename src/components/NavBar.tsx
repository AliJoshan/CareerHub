function NavBar() {
    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold">
                        <img className="w-6" src="public/briefcase.png" alt="" />
                    </div>
                    <span className="text-xl font-semibold text-gray-900">
                        CareerHub
                    </span>
                </div>

                {/* Links */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li className="text-green-600 cursor-pointer">Home</li>
                    <li className="hover:text-green-600 cursor-pointer">Jobs</li>
                    <li className="hover:text-green-600 cursor-pointer">Saved Jobs</li>
                    <li className="hover:text-green-600 cursor-pointer">About</li>
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-gray-700 hover:text-green-600">
                        Sign In
                    </button>
                    <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                        Post a Job
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default NavBar
