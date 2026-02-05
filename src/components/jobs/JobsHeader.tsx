function JobsHeader() {
    return (
        <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900">
                Find Your Perfect <span className="text-green-600">Job</span>
            </h1>

            <p className="text-gray-500 mt-3">
                Browse through thousands of opportunities from top companies
            </p>

            {/* Search */}
            <div className="mt-8 max-w-2xl mx-auto">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by job title or company..."
                        className="w-full rounded-xl border border-gray-200 py-4 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                </div>
            </div>
        </div>
    );
}

export default JobsHeader;
