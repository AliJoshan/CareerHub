type JobCardProps = {
    letter: string;
    title: string;
    company: string;
    location: string;
    time: string;
    salary: string;
    tags: string[];
    description: string;
};

function JobCard({
    letter,
    title,
    company,
    location,
    time,
    salary,
    tags,
    description,
}: JobCardProps) {
    return (
        <div className="bg-[#fdfefd] rounded-2xl border border-gray-200/70 p-6 flex justify-between gap-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-[1px]">

            <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 font-bold flex items-center justify-center">
                    {letter}
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

                    <p className="text-sm text-gray-600 mt-1">
                        {company} <span className="text-green-500">✔</span>
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                        <span>📍 {location}</span>
                        <span>🕒 {time}</span>
                        <span>💲 {salary}</span>
                    </div>

                    <div className="flex gap-2 mt-4">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-600 mt-4 text-sm max-w-xl">{description}</p>
                </div>
            </div>

            <div className="flex flex-col items-end gap-3">
                {/* Apply button */}
                <button
                    className="
      w-[140px]
      bg-green-600
      text-white
      py-2
      rounded-xl
      text-sm
      font-medium
      text-center
      hover:bg-green-600
      transition
    "
                >
                    Apply Now
                </button>

                {/* Bookmark button */}
                <button
                    className="
      w-[140px]
      h-10
      border border-gray-200
      rounded-xl
      flex items-center justify-center
      hover:bg-gray-50
      transition
    "
                >
                    <img
                        src="/icons/bookmark.png"
                        alt="Save job"
                        className="w-5 h-5 object-contain"
                    />
                </button>
            </div>
        </div>
    );
}

export default JobCard;
