import JobsHeader from "../components/jobs/JobsHeader";
import JobsFilters from "../components/jobs/JobsFilters";
import JobsList from "../components/jobs/JobsList";

function Jobs() {
    return (
        <section className="min-h-screen bg-[#f9fcf9]">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <JobsHeader />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    <JobsFilters />
                    <JobsList />
                </div>

            </div>
        </section>
    );
}

export default Jobs;
