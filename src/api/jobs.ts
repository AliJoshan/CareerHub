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
};

const JOBS: Job[] = [
    {
        id: "1",
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120k - $160k",
        tags: ["React", "TypeScript"],
        description:
            "Join our team to build cutting-edge web applications using React and TypeScript.",
        postedAt: "2 days ago",
    },
    {
        id: "2",
        title: "Junior Backend Developer",
        company: "CloudBase",
        location: "Remote",
        type: "Remote",
        salary: "$70k - $90k",
        tags: ["Node.js", "PostgreSQL"],
        description:
            "Work on scalable backend systems and APIs.",
        postedAt: "5 days ago",
    },
];

export function getJobs(): Promise<Job[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JOBS);
        }, 800);
    });
}
