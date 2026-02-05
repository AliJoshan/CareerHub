function Hero() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-[#f9fcf9] to-white flex items-center">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>
                    <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                        ● 1,000+ new jobs posted weekly
                    </span>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
                        Find Your <span className="text-green-600">Dream Career</span><br />
                        Today
                    </h1>

                    <p className="text-gray-600 max-w-xl mb-10">
                        Connect with top companies and discover opportunities that match your skills and aspirations. Your next great adventure starts here.
                    </p>

                    <div className="flex items-center bg-white rounded-xl shadow-sm overflow-hidden max-w-xl">
                        <div className="flex items-center px-4 text-gray-400">🔍</div>
                        <input
                            type="text"
                            placeholder="Job title, company, or keyword"
                            className="flex-1 py-4 text-sm outline-none"
                        />
                        <button className="bg-green-600 text-white px-8 py-4 text-sm font-medium hover:bg-green-700 transition">
                            Search Jobs →
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-8 text-sm text-gray-600">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 border border-white"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-300 border border-white"></div>
                            <div className="w-10 h-10 rounded-full bg-gray-400 border border-white"></div>
                        </div>
                        <span>
                            <strong className="text-gray-900">5,000+</strong> professionals hired this month
                        </span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                            alt="Team meeting"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;