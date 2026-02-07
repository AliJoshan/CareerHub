function JobCardSkeleton() {
    return (
        <div className="bg-white rounded-xl border border-gray-200/70 p-4 shadow-sm animate-pulse">
            <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-200" />

                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                    <div className="h-3 bg-gray-200 rounded w-1/4 mb-3" />

                    <div className="flex gap-3 mb-3">
                        <div className="h-3 w-16 bg-gray-200 rounded" />
                        <div className="h-3 w-16 bg-gray-200 rounded" />
                        <div className="h-3 w-16 bg-gray-200 rounded" />
                    </div>

                    <div className="flex gap-2 mb-3">
                        <div className="h-5 w-16 bg-gray-200 rounded-full" />
                        <div className="h-5 w-16 bg-gray-200 rounded-full" />
                    </div>

                    <div className="h-3 bg-gray-200 rounded w-full" />
                </div>
            </div>
        </div>
    );
}

export default JobCardSkeleton;
