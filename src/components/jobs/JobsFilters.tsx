function JobsFilters() {
    return (
        <aside className="bg-[#fdfefd] rounded-2xl border border-gray-200/70 p-6 h-fit shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-6">Filters</h3>

            <div className="space-y-6">
                <FilterSelect label="Category" />
                <FilterSelect label="Location" />
                <FilterSelect label="Job Type" />

                <button className="w-full border border-gray-200 rounded-lg py-2 text-sm hover:bg-gray-50">
                    Clear Filters
                </button>
            </div>
        </aside>
    );
}

function FilterSelect({ label }: { label: string }) {
    return (
        <div>
            <label className="block text-sm text-gray-600 mb-2">{label}</label>
            <select className="w-full rounded-lg border border-gray-200 px-4 py-2">
                <option>All</option>
            </select>
        </div>
    );
}

export default JobsFilters;
