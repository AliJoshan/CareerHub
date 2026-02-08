export type JobFromArbeitnow = {
    slug: string;
    title: string;
    company_name: string;
    location: string;
    remote: boolean;
    url: string;
    tags: string[];
    created_at: string;
    description: string;
    salary?: string;
};

export async function fetchJobsFromArbeitnow(): Promise<JobFromArbeitnow[]> {
    const res = await fetch("https://www.arbeitnow.com/api/job-board-api");
    if (!res.ok) throw new Error("Failed to fetch jobs from Arbeitnow");

    const data = await res.json();
    return data.data;
}
