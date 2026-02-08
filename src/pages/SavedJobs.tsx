import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs";
import type { Job } from "../api/jobs";
import JobCard from "../components/jobs/JobCard";
import { useSavedJobsStore } from "../stores/useSavedJobsStore";

function SavedJobs() {
    const savedJobIds = useSavedJobsStore((s) => s.savedJobIds);
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs().then(setJobs);
    }, []);

    const savedJobs = jobs.filter((job) =>
        savedJobIds.includes(job.id)
    );

    if (!savedJobs.length) {
        return (
            <section className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Saved <span className="text-green-600">Jobs</span>
                        </h1>
                        <p className="mt-3 text-sm text-gray-500">
                            Keep track of opportunities you're interested in
                        </p>
                    </div>

                    <div className="mt-40 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-9 h-9 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 6.75v12l-5.25-3-5.25 3v-12a2.25 2.25 0 012.25-2.25h6a2.25 2.25 0 012.25 2.25z"
                                />
                            </svg>
                        </div>

                        <h3 className="mt-8 text-lg font-semibold text-gray-900">
                            No saved jobs yet
                        </h3>

                        <p className="mt-2 max-w-sm text-sm text-gray-500">
                            Start exploring and save jobs you're interested in to view them here.
                        </p>

                        <button
                            onClick={() => (window.location.href = "/jobs")}
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-green-700"
                        >
                            Browse Jobs
                            <span className="text-base">→</span>
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Saved <span className="text-green-600">Jobs</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-sm">
                        Keep track of opportunities you're interested in
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {savedJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            id={job.id}
                            letter={job.company.charAt(0)}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            time={job.postedAt}
                            salary={job.salary}
                            tags={[job.type, ...job.tags]}
                            description={job.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SavedJobs;
