import JobCard from "./JobCard";
import type { Job } from "../../api/jobs";

type JobsListProps = {
    jobs: Job[];
};

function JobsList({ jobs }: JobsListProps) {
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
    );
}

export default JobsList;
