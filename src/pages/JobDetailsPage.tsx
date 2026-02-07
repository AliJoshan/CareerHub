import React from "react";
import { ArrowLeft, MapPin, Briefcase, DollarSign, Clock, Bookmark } from "lucide-react";

export default function JobDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Jobs
            </button>

            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-700 font-semibold text-xl">
                        T
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
                            Senior Frontend Developer
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <span className="font-medium text-gray-700">TechCorp Inc.</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            <span className="text-green-600 font-medium">Verified</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-4">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                San Francisco, CA
                            </div>
                            <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                Full-time
                            </div>
                            <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                $120k – $160k
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Posted 2 days ago
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {["Full-time", "Technology", "Senior (5+ years)"].map(tag => (
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

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-6 py-2.5 transition shadow-sm">
                        Apply Now
                    </button>

                    <button className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center transition">
                        <Bookmark className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="mt-12 max-w-3xl mx-auto space-y-10">

                {/* Description */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
                    <h2 className="text-lg font-semibold text-gray-900">Job Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are looking for a Senior Frontend Developer to join our growing engineering team at
                        TechCorp Inc. You will play a key role in shaping the future of our web platform,
                        working on complex, high-impact features that serve millions of users worldwide.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        As a senior member of the team you will influence technical direction, mentor others,
                        and work with modern technologies in a fast-paced environment.
                    </p>
                </section>

                {/* Responsibilities  */}
                <section className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/60 to-white p-8 space-y-6 shadow-sm">
                    <span className="absolute left-0 top-6 h-12 w-1.5 rounded-r-full bg-green-500" />

                    <h2 className="text-lg font-semibold text-gray-900">
                        Responsibilities
                    </h2>

                    <ul className="space-y-4">
                        {[
                            "Lead the frontend architecture and drive technical decisions",
                            "Build reusable component libraries with React & TypeScript",
                            "Collaborate with designers and backend engineers",
                            "Mentor junior developers",
                            "Optimize performance and accessibility",
                        ].map(item => (
                            <li key={item} className="flex gap-3 text-gray-700">
                                <span className="mt-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                                    <span className="w-2 h-2 bg-white rounded-full" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Requirements */}
                <section className="relative rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/60 to-white p-8 space-y-6 shadow-sm">
                    <span className="absolute left-0 top-6 h-12 w-1.5 rounded-r-full bg-green-500" />

                    <h2 className="text-lg font-semibold text-gray-900">
                        Requirements & Qualifications
                    </h2>

                    <ul className="space-y-4">
                        {[
                            "5+ years experience with React",
                            "Strong TypeScript knowledge",
                            "CI/CD & testing experience",
                            "Excellent communication skills",
                            "Bachelor’s degree or equivalent experience",
                        ].map(item => (
                            <li key={item} className="flex gap-3 text-gray-700">
                                <span className="mt-1 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                                    <span className="w-2 h-2 bg-white rounded-full" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>


                {/* CTA */}
                <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50/70 to-white px-8 py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-sm">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Interested in this role?
                        </h3>
                        <p className="text-gray-600 mt-1">
                            Apply now and take the next step in your career.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-6 py-2.5 transition shadow-md shadow-green-600/20">
                            Apply Now
                        </button>

                        <button className="w-11 h-11 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition">
                            <Bookmark className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
