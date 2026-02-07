import JobCardSkeleton from "./JobCardSkeleton";

function JobsListSkeleton() {
    return (
        <div className="lg:col-span-3 space-y-6">
            {[1, 2, 3].map((i) => (
                <JobCardSkeleton key={i} />
            ))}
        </div>
    );
}

export default JobsListSkeleton;
