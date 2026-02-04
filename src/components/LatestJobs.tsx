const jobs = [
    {
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        time: "2 days ago",
        type: "Full-time",
        letter: "T",
    },
    {
        title: "Product Designer",
        company: "DesignHub",
        location: "New York, NY",
        time: "1 week ago",
        type: "Full-time",
        letter: "D",
    },
    {
        title: "Data Scientist",
        company: "Analytics Pro",
        location: "Remote",
        time: "3 days ago",
        type: "Remote",
        letter: "A",
    },
    {
        title: "Marketing Manager",
        company: "GrowthLabs",
        location: "Austin, TX",
        time: "5 days ago",
        type: "Full-time",
        letter: "G",
    },
    {
        title: "Backend Engineer",
        company: "CloudNative",
        location: "Seattle, WA",
        time: "1 day ago",
        type: "Full-time",
        letter: "C",
    },
    {
        title: "Content Writer",
        company: "ContentFirst",
        location: "Remote",
        time: "4 days ago",
        type: "Part-time",
        letter: "C",
    },
];

function LatestJobs() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Latest <span className="text-green-600">Job Listings</span>
                    </h2>
                    <p className="text-gray-600 mt-3 text-sm md:text-base">
                        Explore fresh opportunities from top companies hiring right now
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl p-5
              shadow-sm hover:shadow-md transition"
                        >
                            {/* Top */}
                            <div className="flex items-start gap-3 mb-3">
                                {/* Logo letter */}
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-sm font-semibold text-green-700">
                                    {job.letter}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 text-[15px]">
                                        {job.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                        {job.company}
                                        <span className="text-green-600">✔</span>
                                    </p>
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                <span>📍 {job.location}</span>
                                <span>🕒 {job.time}</span>
                            </div>

                            {/* Type badge */}
                            <span className="inline-block bg-gray-100 text-gray-700 text-[11px] px-2.5 py-1 rounded-full">
                                {job.type}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="text-center mt-12">
                    <button className="bg-green-600 text-white px-7 py-2.5 rounded-lg text-sm font-medium shadow-md hover:bg-green-700 active:scale-95 transition">
                        Show More Jobs
                    </button>
                </div>
            </div>
        </section>
    );
}


export default LatestJobs;