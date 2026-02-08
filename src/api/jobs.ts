import { fetchJobsFromArbeitnow } from "./jobsApi";
import type { JobFromArbeitnow } from "./jobsApi";
import { parseJobDescription } from "../utils/parseJobDescription";

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
        const jobsFromAPI: JobFromArbeitnow[] = await fetchJobsFromArbeitnow();

        return jobsFromAPI.map(job => {
            const { responsibilities, requirements } = parseJobDescription(job.description);
            const timestamp = Number(job.created_at) || Date.now() / 1000;

            return {
                id: job.slug,
                title: job.title,
                company: job.company_name,
                location: job.location,
                type: job.remote ? "Remote" : "On-site",
                salary: job.salary || "N/A",
                tags: job.tags || [],
                description: job.description,
                postedAt: new Date(timestamp * 1000).toLocaleDateString(),

                responsibilities,
                requirements,
            };
        });
    } catch (err) {
        console.error("Failed to fetch jobs:", err);
        return [];
    }
}
