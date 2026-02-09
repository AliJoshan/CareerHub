import { fetchJobsFromAdzuna } from "./jobsApi";

export type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    tags: string[];
    description: string;
    postedAt: string;
    responsibilities: string[];
    requirements: string[];
};

export async function getJobs(): Promise<Job[]> {
    try {
        const jobsFromAPI = await fetchJobsFromAdzuna();

        return jobsFromAPI.map((job) => {
            const cleanDescription = job.description
                .replace(/<[^>]+>/g, "")
                .replace(/\s+/g, " ")
                .trim();

            return {
                id: job.id,
                title: job.title,
                company: job.company.display_name,
                location: job.location.display_name,

                type: job.contract_time
                    ? job.contract_time
                        .replace("_", " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())
                    : "N/A",

                salary:
                    job.salary_min && job.salary_max
                        ? `$${Math.round(job.salary_min)} – $${Math.round(job.salary_max)}`
                        : job.salary_min
                            ? `$${Math.round(job.salary_min)}`
                            : "N/A",

                tags: [
                    job.category?.tag,
                    job.salary_is_predicted === "1" ? "Predicted salary" : null,
                ].filter(Boolean) as string[],

                description: cleanDescription,
                postedAt: new Date(job.created).toLocaleDateString(),

                responsibilities: [],
                requirements: [],
            };
        });
    } catch (err) {
        console.error("Failed to fetch jobs:", err);
        return [];
    }
}
