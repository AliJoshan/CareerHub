type JobsFiltersProps = {
    selectedCategory: string | null;
    setSelectedCategory: (val: string | null) => void;
    selectedLocation: string | null;
    setSelectedLocation: (val: string | null) => void;
    selectedJobType: string | null;
    setSelectedJobType: (val: string | null) => void;
};

function JobsFilters({
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedJobType,
    setSelectedJobType,
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
                        value={selectedCategory ?? ""}
                        onChange={(e) =>
                            setSelectedCategory(
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
                        value={selectedLocation ?? ""}
                        onChange={(e) =>
                            setSelectedLocation(
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
                        value={selectedJobType ?? ""}
                        onChange={(e) =>
                            setSelectedJobType(
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
