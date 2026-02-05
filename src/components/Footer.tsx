function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            {/* TOP */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* BRAND */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold">
                            <img className="w-6" src="public/briefcase.png" alt="" />
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                            CareerHub
                        </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                        Connecting talented professionals with amazing opportunities.
                        Your dream career starts here.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-5">
                        Quick Links
                    </h4>

                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="hover:text-green-600 transition">Home</li>
                        <li className="hover:text-green-600 transition">Jobs</li>
                        <li className="hover:text-green-600 transition">Saved Jobs</li>
                        <li className="hover:text-green-600 transition">About</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-5">
                        Services
                    </h4>

                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="hover:text-green-600 transition">Career Coaching</li>
                        <li className="hover:text-green-600 transition">Resume Review</li>
                        <li className="hover:text-green-600 transition">Job Alerts</li>
                        <li className="hover:text-green-600 transition">Salary Guide</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-5">
                        Contact Us
                    </h4>

                    <ul className="space-y-4 text-sm text-gray-600">
                        <li className="flex items-center gap-3">
                            <span>✉️</span>
                            <span>joshansanjar@gmail.com</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span>📞</span>
                            <span>+93782720829</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span>📍</span>
                            <span>Kabul, Afghanistan</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <span>© 2026 CareerHub. All rights reserved.</span>

                    <div className="flex gap-6">
                        <span className="hover:text-green-600 transition cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="hover:text-green-600 transition cursor-pointer">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
