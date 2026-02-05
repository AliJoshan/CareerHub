import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import LatestJobs from "../components/LatestJobs";
import CTASection from "../components/CTASection";

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Features />
            <LatestJobs />
            <CTASection />
        </>
    );
}

export default Home;
