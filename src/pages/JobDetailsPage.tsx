import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, DollarSign, Clock, Bookmark } from "lucide-react";
import { getJobs } from "../api/jobs";
import type { Job } from "../api/jobs";
import { useSavedJobsStore } from "../stores/useSavedJobsStore";

function Skeleton({ className }: { className?: string }) {
    return <div className={`bg-gray-200 animate-pulse rounded ${className}`} />;
}

function ListSectionSkeleton({ lines = 5 }: { lines?: number }) {
    return (
        <section className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/60 to-white p-8 space-y-6 shadow-sm">
            <span className="absolute left-0 top-6 h-12 w-1.5 rounded-r-full bg-green-300 animate-pulse" />

            <Skeleton className="h-6 w-1/3" />

            <ul className="space-y-4">
                {[...Array(lines)].map((_, i) => (
                    <li key={i} className="flex gap-3 items-start">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-300 animate-pulse shrink-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white/80 rounded-full" />
                        </div>

                        <Skeleton className="h-4 w-full" />
                    </li>
                ))}
            </ul>
        </section>
    );
}


export default function JobDetailsPage() {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);
    const toggleSave = useSavedJobsStore((s) => s.toggleSave);
    const isSaved = useSavedJobsStore((s) =>
        job ? s.isSaved(job.id) : false
    );

    const handleToggleSave = () => {
        if (!job) return;
        toggleSave(job.id);
    };

    useEffect(() => {
        getJobs().then((jobs) => {
            const foundJob = jobs.find(j => j.id === jobId);
            setJob(foundJob || null);
            setLoading(false);
        });
    }, [jobId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 px-6 py-10 space-y-10">
                <Skeleton className="h-5 w-24 mb-8" />

                {/* Header card skeleton */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
                    <Skeleton className="w-14 h-14 rounded-xl" />
                    <div className="flex-1 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/3" />
                        <div className="flex gap-2 mt-4">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-12" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-10" />
                    </div>
                </div>

                {/* Description skeleton */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-4">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>

                <ListSectionSkeleton lines={5} />
                <ListSectionSkeleton lines={5} />

            </div>
        );
    }
    if (!job) return <div className="min-h-screen flex items-center justify-center">Job not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Jobs
            </button>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-700 font-semibold text-xl">
                        {job.company[0]}
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
                            {job.title}
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <span className="font-medium text-gray-700">{job.company}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            <span className="text-green-600 font-medium">Verified</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-4">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {job.postedAt}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {job.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-6 py-2.5 transition shadow-sm">
                        Apply Now
                    </button>

                    <button
                        onClick={handleToggleSave}
                        className={`w-11 h-11 rounded-xl border flex items-center justify-center transition
        ${isSaved
                                ? "bg-green-100 border-green-600"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                    >
                        <Bookmark
                            className={`w-5 h-5 ${isSaved ? "text-green-600 fill-green-600" : "text-gray-700"
                                }`}
                        />
                    </button>
                </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-10">

                {/* Description */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
                    <h2 className="text-lg font-semibold text-gray-900">Job Description</h2>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </section>

                {/* Responsibilities */}
                <section className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/60 to-white p-8 space-y-6 shadow-sm">
                    <span className="absolute left-0 top-6 h-12 w-1.5 rounded-r-full bg-green-500" />
                    <h2 className="text-lg font-semibold text-gray-900">Responsibilities</h2>

                    {job.responsibilities.length > 0 ? (
                        <ul className="space-y-4">
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex gap-3 text-gray-700">
                                    <span className="mt-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                                        <span className="w-2 h-2 bg-white rounded-full" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">
                            The employer did not provide a detailed list of responsibilities for this role.
                            Please refer to the job description or apply on the official website for full details.
                        </p>
                    )}
                </section>

                {/* Requirements */}
                <section className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/60 to-white p-8 space-y-6 shadow-sm">
                    <span className="absolute left-0 top-6 h-12 w-1.5 rounded-r-full bg-green-500" />
                    <h2 className="text-lg font-semibold text-gray-900">
                        Requirements & Qualifications
                    </h2>

                    {job.requirements.length > 0 ? (
                        <ul className="space-y-4">
                            {job.requirements.map((item, index) => (
                                <li key={index} className="flex gap-3 text-gray-700">
                                    <span className="mt-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                                        <span className="w-2 h-2 bg-white rounded-full" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Qualifications and requirements are provided by the employer on their
                            official job posting.
                        </p>
                    )}
                </section>

                {/* CTA */}
                <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/70 to-white px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-sm">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900"> Interested in this role?
                        </h3> <p className="text-gray-600 mt-1"> Apply now and take the next step in your career.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-6 py-2.5 transition shadow-md shadow-green-600/20">
                            Apply Now
                        </button>
                        <button
                            onClick={handleToggleSave}
                            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition
        ${isSaved
                                    ? "bg-green-100 border-green-600"
                                    : "border-gray-200 bg-white hover:bg-gray-50"
                                }`}
                        >
                            <Bookmark
                                className={`w-5 h-5 ${isSaved ? "text-green-600 fill-green-600" : "text-gray-700"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
