import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs";
import type { Job } from "../api/jobs";
import JobsHeader from "../components/jobs/JobsHeader";
import JobsFilters from "../components/jobs/JobsFilters";
import JobsList from "../components/jobs/JobsList";
import JobsListSkeleton from "../components/jobs/JobsListSkeleton";
import JobsError from "../components/jobs/JobsError";

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getJobs()
            .then(setJobs)
            .catch(() => setError("Failed to load jobs. Please try again."))
            .finally(() => setLoading(false));
    }, []);

    let content;

    if (loading) {
        content = <JobsListSkeleton />;
    } else if (error) {
        content = <JobsError message={error} />;
    } else if (!jobs.length) {
        content = <p className="lg:col-span-3">No jobs found.</p>;
    } else {
        content = <JobsList jobs={jobs} />;
    }

    return (
        <section className="min-h-screen bg-[#f9fcf9]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <JobsHeader />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <JobsFilters />
                    {content}
                </div>
            </div>
        </section>
    );
}

export default Jobs;
