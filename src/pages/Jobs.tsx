import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs";
import type { Job } from "../api/jobs";
import JobsHeader from "../components/jobs/JobsHeader";
import JobsFilters from "../components/jobs/JobsFilters";
import JobsList from "../components/jobs/JobsList";

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getJobs().then((data) => {
            setJobs(data);
            setLoading(false);
        });
    }, []);

    return (
        <section className="min-h-screen bg-[#f9fcf9]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <JobsHeader />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <JobsFilters />

                    {loading ? (
                        <p>Loading jobs...</p>
                    ) : (
                        <JobsList jobs={jobs} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Jobs;
