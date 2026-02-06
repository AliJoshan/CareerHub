function SavedJobs() {
    return (
        <section className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Saved <span className="text-green-600">Jobs</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        Keep track of opportunities you're interested in
                    </p>
                </div>

                {/* Empty State Wrapper */}
                <div className="flex justify-center mt-24">
                    <div
                        className="
              w-full
              max-w-xl
              bg-[#f7faf7]
              border border-gray-200/70
              rounded-2xl
              px-8
              py-12
              text-center
            "
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.7}
                                stroke="currentColor"
                                className="w-7 h-7 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 6.75v12l-5.25-3-5.25 3v-12a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25z"
                                />
                            </svg>
                        </div>

                        {/* Text */}
                        <h3 className="text-base font-semibold text-gray-900">
                            No saved jobs yet
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Start exploring and save jobs you're interested in to view them here.
                        </p>

                        {/* CTA */}
                        <button
                            className="
                mt-6
                bg-green-600
                hover:bg-green-600
                text-white
                px-6
                py-2.5
                rounded-xl
                text-sm
                font-medium
                inline-flex items-center gap-2
                transition
              "
                        >
                            Browse Jobs
                            <span>→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SavedJobs;
