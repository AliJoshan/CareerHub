import { Link } from "react-router-dom";
import { useSavedJobsStore } from "../../stores/useSavedJobsStore";

type JobCardProps = {
    id: string;
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
    id,
    letter,
    title,
    company,
    location,
    time,
    salary,
    tags,
    description,
}: JobCardProps) {
    const toggleSave = useSavedJobsStore((s) => s.toggleSave);
    const isSaved = useSavedJobsStore((s) => s.isSaved(id));

    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        toggleSave(id);
    };

    return (
        <Link to={`/jobs/${id}`} className="block">
            <div className="bg-[#fdfefd] rounded-xl border border-gray-200/70 p-4 flex justify-between gap-5 shadow-sm transition-all duration-300 hover:shadow-lg">
                {/* LEFT */}
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 font-semibold flex items-center justify-center">
                        {letter}
                    </div>

                    <div>
                        <h3 className="text-base font-semibold text-gray-900 leading-tight">
                            {title}
                        </h3>

                        <p className="text-sm text-gray-600 mt-0.5">
                            {company} <span className="text-green-500">✔</span>
                        </p>

                        <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-2">
                            <span>📍 {location}</span>
                            <span>🕒 {time}</span>
                            <span>💲 {salary}</span>
                        </div>

                        <div className="flex gap-2 mt-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] bg-gray-100 px-2.5 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-gray-600 mt-2 max-w-xl line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-2">
                    <button className="w-30 bg-green-600 text-white py-1.5 rounded-lg text-sm font-medium hover:bg-green-600 transition">
                        Apply Now
                    </button>

                    <button
                        onClick={handleToggle}
                        className={`w-30 h-9 border rounded-lg flex items-center justify-center transition ${isSaved
                            ? "bg-green-100 border-green-600"
                            : "border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        <img
                            src="/icons/bookmark.png"
                            alt={isSaved ? "Saved" : "Save job"}
                            className={`w-4 h-4 ${isSaved ? "filter-green" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default JobCard;
