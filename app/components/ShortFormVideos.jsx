"use client";

import React from 'react';
import VideoCard from "./VideoCard";

/**
 * ShortFormVideos Component
 * 
 * Showcases short-form video content from the reals folder
 * in a modern, premium design with featured styling.
 */
const ShortFormVideos = () => {
    // Videos from reals folder, sorted by file path names
    const shortVideos = [
        {
            id: 1,
            title: "Short Form Reel 1",
            description: "Trending style content",
            video: "/vids/reals/4.mp4",
        },
        {
            id: 2,
            title: "Short Form Reel 2",
            description: "Creative visual storytelling",
            video: "/vids/reals/2.mp4",
        },
        {
            id: 3,
            title: "Short Form Reel 3",
            description: "Dynamic motion design",
            video: "/vids/reals/3.mp4",
        },
        {
            id: 4,
            title: "Short Form Reel 4",
            description: "Trending style content",
            video: "/vids/reals/1.mp4",
        },
        {
            id: 5,
            title: "Short Form Reel 5",
            description: "Maximum engagement design",
            video: "/vids/reals/5.mp4",
        },
        {
            id: 6,
            title: "Short Form Reel 6",
            description: "Premium showcase content",
            video: "/vids/reals/6.mp4",
        }
    ];

    return (
        <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="group relative bg-gradient-to-r from-purple-500/20 via-pink-400/15 to-purple-500/20 backdrop-blur-xl text-purple-400 px-6 py-3 rounded-full text-sm font-semibold border border-purple-400/30 shadow-depth-md hover:shadow-depth-lg transition-all duration-500 hover:scale-105 inline-flex items-center gap-2 animate-float overflow-hidden">
                            {/* Gradient glow border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-full blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative z-10">Short Form Content</span>
                        </span>
                    </div>
                    <h2 className="text-5xl font-extrabold text-white mb-4">
                        Short Form Videos
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Quick, engaging content designed for maximum impact and social media reach
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {shortVideos.map((video) => (
                        <div key={video.id} className="group relative">
                            {/* Enhanced shadow and glow for featured items */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                            {/* Video Card with enhanced styling */}
                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-depth-xl hover:shadow-depth-xl hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.03] will-change-transform">
                                {/* Glassmorphic overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

                                <VideoCard
                                    title={video.title}
                                    description={video.description}
                                    videoUrl={video.video}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShortFormVideos;
