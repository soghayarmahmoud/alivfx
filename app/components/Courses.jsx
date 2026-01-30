"use client";

import React from 'react';

/**
 * Courses Component
 * 
 * Showcases educational course content with YouTube embeds
 * in a modern grid layout with enhanced visual effects.
 */
const Courses = () => {
    const courses = [
        {
            id: 1,
            title: "Video Editing Masterclass",
            description: "Learn professional video editing from scratch",
            youtubeId: "Ep-F6YcYX58"
        },
        {
            id: 2,
            title: "Color Grading Essentials",
            description: "Master cinematic color grading techniques",
            youtubeId: "_dPUMtj4EpM"
        },
        {
            id: 3,
            title: "Motion Graphics Pro",
            description: "Create stunning motion graphics animations",
            youtubeId: "V6HcfP2tKMs"
        },
        {
            id: 4,
            title: "Sound Design Fundamentals",
            description: "Perfect your audio mixing and sound design",
            youtubeId: "DAoaWs7yYlo"
        }
    ];

    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl top-20 right-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl bottom-20 left-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/20 shadow-glow-green">
                            Educational Content
                        </span>
                    </div>
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        Courses & Tutorials
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Comprehensive tutorials to level up your video production skills
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-depth-lg hover:shadow-depth-xl hover-shadow-intense border border-gray-700/50 transition-all duration-500 hover:scale-105 will-change-transform"
                        >
                            {/* Lighted shadow effect - green theme */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/50 via-emerald-500/50 to-teal-500/50 rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* YouTube Thumbnail with Play Overlay */}
                            <div className="relative aspect-video bg-black overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${course.youtubeId}`}
                                    title={course.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-500 line-clamp-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {course.description}
                                </p>

                                {/* Enroll Button with matching shadow */}
                                <a
                                    href={`https://www.youtube.com/watch?v=${course.youtubeId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-depth-sm hover:shadow-depth-md group/btn overflow-hidden relative"
                                    style={{
                                        boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4), 0 0 40px rgba(16, 185, 129, 0.2)'
                                    }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span className="relative z-10">Watch Course</span>
                                    <svg className="relative z-10 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
