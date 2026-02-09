type JobsFiltersProps = {
    category: string | null;
    location: string | null;
    jobType: string | null;
    categories: string[];
    locations: string[];
    jobTypes: string[];
    onCategoryChange: (val: string | null) => void;
    onLocationChange: (val: string | null) => void;
    onJobTypeChange: (val: string | null) => void;
};

function JobsFilters({
    category,
    location,
    jobType,
    categories,
    locations,
    jobTypes,
    onCategoryChange,
    onLocationChange,
    onJobTypeChange,
}: JobsFiltersProps) {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/70 space-y-4">
                {/* Category */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">📂</span>
                        Category
                    </label>
                    <select
                        value={category ?? ""}
                        onChange={(e) => onCategoryChange(e.target.value || null)}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option value="">All</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Location */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">📍</span>
                        Location
                    </label>
                    <select
                        value={location ?? ""}
                        onChange={(e) => onLocationChange(e.target.value || null)}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option value="">All</option>
                        {locations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                {/* Job Type */}
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">🕒</span>
                        Job Type
                    </label>
                    <select
                        value={jobType ?? ""}
                        onChange={(e) => onJobTypeChange(e.target.value || null)}
                        className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                    >
                        <option value="">All</option>
                        {jobTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}


export default JobsFilters;
