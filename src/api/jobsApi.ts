export type JobFromAdzuna = {
    id: string;
    title: string;
    company: { display_name: string };
    location: { display_name: string };

    category?: {
        label?: string;
        tag?: string;
    };

    description: string;
    redirect_url: string;
    created: string;

    salary_min?: number;
    salary_max?: number;

    contract_time?: "full_time" | "part_time";
    contract_type?: string;
    salary_is_predicted?: "0" | "1";
};

const APP_ID = "60e9e8f6";
const APP_KEY = "7712822f9c84d05858652ba089b25ce4";

export async function fetchJobsFromAdzuna(): Promise<JobFromAdzuna[]> {
    const res = await fetch(
        `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=50`
    );
    if (!res.ok) throw new Error("Failed to fetch jobs from Adzuna");

    const data = await res.json();
    return data.results;
}