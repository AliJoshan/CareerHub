function Stats() {
    return (
        <section className="bg-[#f4f7f4] py-4">
            <div className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

                    <div>
                        <h3 className="text-4xl font-bold text-green-600">50K+</h3>
                        <p className="mt-2 text-sm text-gray-600">Active Members</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-green-600">10K+</h3>
                        <p className="mt-2 text-sm text-gray-600">Jobs Posted</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-green-600">8+</h3>
                        <p className="mt-2 text-sm text-gray-600">Years Experience</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-green-600">95%</h3>
                        <p className="mt-2 text-sm text-gray-600">Success Rate</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Stats;
