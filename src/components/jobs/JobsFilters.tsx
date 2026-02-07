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
        <div className="space-y-4">
            {/* CATEGORY FILTER */}
            <div>
                <label className="font-semibold mb-1 block">Category</label>
                <select
                    value={selectedCategory ?? ""}
                    onChange={(e) =>
                        setSelectedCategory(
                            e.target.value === "" ? null : e.target.value
                        )
                    }
                    className="w-full border rounded p-2"
                >
                    <option value="">All</option>
                    <option value="Technology">Technology</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>

            {/* LOCATION FILTER */}
            <div>
                <label className="font-semibold mb-1 block">Location</label>
                <select
                    value={selectedLocation ?? ""}
                    onChange={(e) =>
                        setSelectedLocation(
                            e.target.value === "" ? null : e.target.value
                        )
                    }
                    className="w-full border rounded p-2"
                >
                    <option value="">All</option>
                    <option value="San Francisco, CA">San Francisco</option>
                    <option value="New York, NY">New York</option>
                    <option value="Remote">Remote</option>
                    <option value="Austin, TX">Austin</option>
                </select>
            </div>

            {/* JOB TYPE FILTER */}
            <div>
                <label className="font-semibold mb-1 block">Job Type</label>
                <select
                    value={selectedJobType ?? ""}
                    onChange={(e) =>
                        setSelectedJobType(
                            e.target.value === "" ? null : e.target.value
                        )
                    }
                    className="w-full border rounded p-2"
                >
                    <option value="">All</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>
        </div>
    );
}

export default JobsFilters;
