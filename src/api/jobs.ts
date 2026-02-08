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

    // new fields for dynamic content
    responsibilities: string[];
    requirements: string[];
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
        description: "Join our team to build cutting-edge web applications using React and TypeScript.",
        postedAt: "2 days ago",
        responsibilities: [
            "Lead the frontend architecture and drive technical decisions",
            "Build reusable component libraries with React & TypeScript",
            "Collaborate with designers and backend engineers",
            "Mentor junior developers",
            "Optimize performance and accessibility",
        ],
        requirements: [
            "5+ years experience with React",
            "Strong TypeScript knowledge",
            "CI/CD & testing experience",
            "Excellent communication skills",
            "Bachelor’s degree or equivalent experience",
        ],
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
        responsibilities: [
            "Lead the frontend architecture and drive technical decisions across the team",
            "Build and maintain reusable component libraries using React and TypeScript",
            "Collaborate closely with designers and backend engineers to deliver seamless user experiences",
            "Mentor junior developers through code reviews and pair programming sessions",
            "Optimize application performance and ensure cross-browser compatibility",
        ],
        requirements: [
            "5+ years of professional experience with React and modern JavaScript",
            "Strong proficiency in TypeScript and state management solutions",
            "Experience with CI/CD pipelines and automated testing frameworks",
            "Excellent communication and collaboration skills",
            "Bachelor's degree in Computer Science or equivalent practical experience",
        ],
    },
];

export async function getJobs(): Promise<Job[]> {
    // simulate network latency
    await new Promise(resolve => setTimeout(resolve, 800));
    return JOBS;
}
