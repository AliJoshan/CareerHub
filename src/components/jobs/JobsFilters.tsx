type JobsFiltersProps = {
    category: string | null;
    location: string | null;
    jobType: string | null;
    onCategoryChange: (val: string | null) => void;
    onLocationChange: (val: string | null) => void;
    onJobTypeChange: (val: string | null) => void;
};

function JobsFilters({
    category,
    location,
    jobType,
    onCategoryChange,
    onLocationChange,
    onJobTypeChange,
}: JobsFiltersProps) {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/70 space-y-4">
                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">📂</span>
                        Category
                    </label>
                    <select
                        value={category ?? ""}
                        onChange={(e) =>
                            onCategoryChange(
                                e.target.value === "" ? null : e.target.value
                            )
                        }
                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-lg
                            p-2.5
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            transition
                        "
                    >
                        <option value="">All</option>
                        <option value="Technology">Technology</option>
                        <option value="Design">Design</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">📍</span>
                        Location
                    </label>
                    <select
                        value={location ?? ""}
                        onChange={(e) =>
                            onLocationChange(
                                e.target.value === "" ? null : e.target.value
                            )
                        }
                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-lg
                            p-2.5
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            transition
                        "
                    >
                        <option value="">All</option>
                        <option value="San Francisco, CA">San Francisco</option>
                        <option value="New York, NY">New York</option>
                        <option value="Remote">Remote</option>
                        <option value="Austin, TX">Austin</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <span className="text-green-600 font-bold">🕒</span>
                        Job Type
                    </label>
                    <select
                        value={jobType ?? ""}
                        onChange={(e) =>
                            onJobTypeChange(
                                e.target.value === "" ? null : e.target.value
                            )
                        }
                        className="
                            w-full
                            border
                            border-gray-300
                            rounded-lg
                            p-2.5
                            focus:outline-none
                            focus:ring-2 focus:ring-green-500
                            transition
                        "
                    >
                        <option value="">All</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default JobsFilters;
