import React from "react";
import { ArrowLeft, MapPin, Briefcase, DollarSign, Clock, Bookmark } from "lucide-react";

export default function JobDetailsPage() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-8">
            {/* Back */}
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Jobs
            </button>

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-700 font-semibold text-xl">
                        T
                    </div>

                    {/* Title + meta */}
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">Senior Frontend Developer</h1>

                        <div className="flex items-center gap-2 text-gray-500 mt-1">
                            <span className="font-medium text-gray-700">TechCorp Inc.</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            <span>Verified</span>
                        </div>

                        {/* Info row */}
                        <div className="flex flex-wrap items-center gap-4 text-gray-500 mt-3">
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>San Francisco, CA</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                <span>Full-time</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                <span>$120k - $160k</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Posted 2 days ago</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["Full-time", "Technology", "Senior (5+ years)"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-2">
                        Apply Now
                    </button>

                    <button className="border border-gray-200 hover:bg-gray-50 rounded-xl px-4 py-2 flex items-center gap-2">
                        <Bookmark className="w-4 h-4" />
                        Save Job
                    </button>
                </div>
            </div>

            {/* Content Sections */}
            <div className="mt-12 max-w-3xl mx-auto space-y-10">

                {/* Description */}
                <div className="rounded-2xl shadow-sm bg-white p-8 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">Job Description</h2>

                    <p className="text-gray-600 leading-relaxed">
                        We are looking for a Senior Frontend Developer to join our growing engineering team at
                        TechCorp Inc. You will play a key role in shaping the future of our web platform,
                        working on complex, high-impact features that serve millions of users worldwide.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        As a senior member of the team you will have the opportunity to influence our
                        technical direction, mentor other engineers, and work with cutting-edge
                        technologies in a fast-paced, collaborative environment. We value clean code,
                        thoughtful architecture, and continuous learning.
                    </p>
                </div>

                {/* Responsibilities */}
                <div className="rounded-2xl shadow-sm bg-white p-8 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">Responsibilities</h2>

                    <ul className="space-y-4">
                        {[
                            "Lead the frontend architecture and drive technical decisions across the team",
                            "Build and maintain reusable component libraries using React and TypeScript",
                            "Collaborate closely with designers and backend engineers to deliver seamless user experiences",
                            "Mentor junior developers through code reviews and pair programming sessions",
                            "Optimize application performance and ensure cross-browser compatibility",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-600">
                                <span className="mt-1 w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Requirements */}
                <div className="rounded-2xl shadow-sm bg-white p-8 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">Requirements & Qualifications</h2>

                    <ul className="space-y-4">
                        {[
                            "5+ years of professional experience with React and modern JavaScript",
                            "Strong proficiency in TypeScript and state management solutions",
                            "Experience with CI/CD pipelines and automated testing frameworks",
                            "Excellent communication and collaboration skills",
                            "Bachelor's degree in Computer Science or equivalent practical experience",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3 text-gray-600">
                                <span className="mt-1 w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Apply CTA */}
                <div className="rounded-2xl border border-green-100 bg-green-50/30 px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Interested in this role?
                        </h3>
                        <p className="text-gray-500 mt-1">
                            Apply now and take the next step in your career.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl px-6 py-2.5 transition">
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
