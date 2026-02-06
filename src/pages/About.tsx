function About() {
    return (
        <section className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">
                        About <span className="text-green-600">CareerHub</span>
                    </h1>

                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        We're on a mission to transform how people find and pursue their dream careers.
                        Since 2016, we've helped thousands of professionals connect with opportunities
                        that match their skills and aspirations.
                    </p>
                </div>

                {/* Values Section */}
                <div className="mt-32">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-14">
                        Our Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-10 text-center">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-green-100 flex items-center justify-center mb-6">
                                <span className="text-green-600 text-xl">◎</span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2">
                                Mission-Driven
                            </h3>

                            <p className="text-sm text-gray-500">
                                We believe everyone deserves access to meaningful career opportunities.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-10 text-center">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-green-100 flex items-center justify-center mb-6">
                                <span className="text-green-600 text-xl">👁</span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2">
                                Transparency
                            </h3>

                            <p className="text-sm text-gray-500">
                                We're committed to honest, clear communication in everything we do.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-10 text-center">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-green-100 flex items-center justify-center mb-6">
                                <span className="text-green-600 text-xl">♡</span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2">
                                People First
                            </h3>

                            <p className="text-sm text-gray-500">
                                Our users are at the heart of every decision we make.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-10 text-center">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-green-100 flex items-center justify-center mb-6">
                                <span className="text-green-600 text-xl">🏅</span>
                            </div>

                            <h3 className="font-semibold text-gray-900 mb-2">
                                Excellence
                            </h3>

                            <p className="text-sm text-gray-500">
                                We strive for the highest quality in our platform and services.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
