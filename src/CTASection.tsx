function CTASection() {
    return (
        <section className="bg-green-600">
            <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Take the Next Step?
                </h2>

                {/* Description */}
                <p className="text-green-100 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
                    Join thousands of professionals who have found their dream careers
                    through CareerHub. Your future starts today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* Browse Jobs */}
                    <button className="border border-white text-white px-7 py-2.5 rounded-lg text-sm font-medium
            hover:bg-white hover:text-green-600 transition active:scale-95">
                        Browse Jobs →
                    </button>

                    {/* Post a Job */}
                    <button className="bg-gray-200 text-gray-800 px-7 py-2.5 rounded-lg text-sm font-medium
            hover:bg-white transition active:scale-95">
                        Post a Job
                    </button>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
