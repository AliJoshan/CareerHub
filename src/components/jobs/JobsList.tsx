import JobCard from "./JobCard";

function JobsList() {
    return (
        <div className="lg:col-span-3">
            <p className="text-gray-600 mb-6">
                Showing <span className="font-semibold text-gray-900">8</span> jobs
            </p>

            <div className="space-y-6">
                <JobCard
                    letter="T"
                    title="Senior Frontend Developer"
                    company="TechCorp Inc."
                    location="San Francisco, CA"
                    time="2 days ago"
                    salary="$120k - $160k"
                    tags={["Full-time", "Technology"]}
                    description="Join our team to build cutting-edge web applications using React and TypeScript."
                />

                <JobCard
                    letter="D"
                    title="Product Designer"
                    company="DesignHub"
                    location="New York, NY"
                    time="1 week ago"
                    salary="$90k - $130k"
                    tags={["Full-time", "Design"]}
                    description="Create intuitive and delightful user experiences for modern products."
                />


                <JobCard
                    letter="G"
                    title="Marketing Manager"
                    company="GrowthLabs"
                    location="Austin, TX"
                    time="5 days ago"
                    salary="$80k - $110k"
                    tags={["Full-time", "Marketing"]}
                    description="Lead our marketing initiatives and drive customer acquisition strategies."
                />
            </div>
        </div>
    );
}

export default JobsList;
