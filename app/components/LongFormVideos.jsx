"use client";

import React from 'react';

/**
 * LongFormVideos Component
 * 
 * Showcases long-form video content with YouTube embeds
 * in a modern, cinematic design with enhanced shadow effects.
 */
const LongFormVideos = () => {
    const videos = [
        {
            id: 1,
            title: "Professional Video Production",
            description: "Explore the complete process of creating stunning professional videos",
            youtubeId: "fySbk6CZ-Ks",
            thumbnail: `https://img.youtube.com/vi/fySbk6CZ-Ks/maxresdefault.jpg`
        },
        {
            id: 2,
            title: "Advanced Editing Techniques",
            description: "Master advanced editing techniques to elevate your content",
            youtubeId: "CCxzqCs-baA",
            thumbnail: `https://img.youtube.com/vi/CCxzqCs-baA/maxresdefault.jpg`
        }
    ];

    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/20 shadow-glow-red">
                            Long Form Content
                        </span>
                    </div>
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        Long Form Videos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Deep-dive content exploring professional video production and editing mastery
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-depth-xl hover:shadow-depth-xl hover-shadow-intense border border-gray-700/50 transition-all duration-500 hover:scale-[1.02] will-change-transform"
                        >
                            {/* Lighted shadow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/50 via-purple-500/50 to-pink-500/50 rounded-3xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* YouTube Embed Container */}
                            <div className="relative aspect-video bg-black rounded-t-3xl overflow-hidden">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 transition-all duration-500">
                                    {video.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {video.description}
                                </p>

                                {/* Watch on YouTube Button with matching shadow */}
                                <a
                                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-depth-md hover:shadow-depth-lg group/btn overflow-hidden relative"
                                    style={{
                                        boxShadow: '0 8px 32px rgba(239, 68, 68, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'
                                    }}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                                    <span className="relative z-10">Watch on YouTube</span>
                                    <svg className="relative z-10 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LongFormVideos;
