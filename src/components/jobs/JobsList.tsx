import JobCard from "./JobCard";
import type { Job } from "../../api/jobs";

type JobsListProps = {
    jobs: Job[];
    savedJobs: string[];                  // <-- add this
    setSavedJobs: (jobs: string[]) => void; // <-- add this
};

function JobsList({ jobs, savedJobs, setSavedJobs }: JobsListProps) {
    return (
        <div className="lg:col-span-3">
            <p className="text-gray-600 mb-6">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                    {jobs.length}
                </span>{" "}
                jobs
            </p>

            <div className="space-y-6">
                {jobs.map((job) => (
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
                        savedJobs={savedJobs}        // <-- pass it
                        setSavedJobs={setSavedJobs}  // <-- pass it
                    />
                ))}
            </div>
        </div>
    );
}

export default JobsList;
