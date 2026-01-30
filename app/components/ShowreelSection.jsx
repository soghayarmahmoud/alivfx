"use client";

import React, { useState } from 'react';

/**
 * Interactive Pyramid Video Gallery
 * 
 * Videos arranged in pyramid layout with click-to-swap functionality.
 * Click any video to bring it to center as the featured video.
 */
const ShowreelSection = () => {
    const videos = [
        { id: 1, src: '/vids/Background/background_1.mp4', title: 'Showcase 1' },
        { id: 2, src: '/vids/Background/background_2.mp4', title: 'Showcase 2' },
        { id: 3, src: '/vids/Background/background_3.mp4', title: 'Showcase 3' },
        { id: 4, src: '/vids/Background/background_4.mp4', title: 'Showcase 4' },
        { id: 5, src: '/vids/Background/background_5.mp4', title: 'Showcase 5' }
    ];

    const [centerIndex, setCenterIndex] = useState(2); // Start with video 3 in center

    // Get video positions based on which one is in center
    const getVideoPositions = () => {
        const positions = [];
        const allIndices = [0, 1, 2, 3, 4];

        // Remove center index from array
        const sideIndices = allIndices.filter(i => i !== centerIndex);

        return {
            farLeft: sideIndices[0],
            midLeft: sideIndices[1],
            center: centerIndex,
            midRight: sideIndices[2],
            farRight: sideIndices[3]
        };
    };

    const positions = getVideoPositions();

    const handleVideoClick = (index) => {
        if (index !== centerIndex) {
            setCenterIndex(index);
        }
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

            {/* Blur orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            {/* Pyramid Gallery Container */}
            <div className="relative z-10 w-full h-[700px] max-w-[1600px] mx-auto flex items-center justify-center" style={{ perspective: '1500px' }}>

                {/* Video 1 - Far Left */}
                <div
                    className="absolute left-[5%] group cursor-pointer transition-all duration-700 hover:scale-105"
                    onClick={() => handleVideoClick(positions.farLeft)}
                    style={{
                        transform: 'rotateY(35deg) translateZ(-200px)',
                        transformStyle: 'preserve-3d',
                        zIndex: positions.farLeft === centerIndex ? 50 : 10
                    }}
                >
                    <div className={`relative w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${positions.farLeft === centerIndex ? 'border-2 border-cyan-400/50' : 'border border-white/10'}`}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                        >
                            <source src={videos[positions.farLeft].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                        {positions.farLeft !== centerIndex && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                                    Click to Focus
                                </div>
                            </div>
                        )}
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl -z-10"></div>
                    </div>
                </div>

                {/* Video 2 - Mid Left */}
                <div
                    className="absolute left-[20%] group cursor-pointer transition-all duration-700 hover:scale-105"
                    onClick={() => handleVideoClick(positions.midLeft)}
                    style={{
                        transform: 'rotateY(20deg) translateZ(-100px)',
                        transformStyle: 'preserve-3d',
                        zIndex: positions.midLeft === centerIndex ? 50 : 20
                    }}
                >
                    <div className={`relative w-[320px] h-[580px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${positions.midLeft === centerIndex ? 'border-2 border-cyan-400/50' : 'border border-white/10'}`}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                        >
                            <source src={videos[positions.midLeft].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                        {positions.midLeft !== centerIndex && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                                    Click to Focus
                                </div>
                            </div>
                        )}
                        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl -z-10"></div>
                    </div>
                </div>

                {/* Center Video - Featured */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 group transition-all duration-700"
                    style={{
                        transformStyle: 'preserve-3d',
                        zIndex: 50
                    }}
                >
                    <div className="relative w-[420px] h-[650px] rounded-3xl overflow-hidden shadow-2xl border-2 border-cyan-400/50">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                        >
                            <source src={videos[positions.center].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                        <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 blur-2xl -z-10 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>

                        {/* Featured badge */}
                        <div className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-bold text-sm shadow-glow-cyan">
                            Featured
                        </div>
                    </div>
                </div>

                {/* Video 4 - Mid Right */}
                <div
                    className="absolute right-[20%] group cursor-pointer transition-all duration-700 hover:scale-105"
                    onClick={() => handleVideoClick(positions.midRight)}
                    style={{
                        transform: 'rotateY(-20deg) translateZ(-100px)',
                        transformStyle: 'preserve-3d',
                        zIndex: positions.midRight === centerIndex ? 50 : 20
                    }}
                >
                    <div className={`relative w-[320px] h-[580px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${positions.midRight === centerIndex ? 'border-2 border-cyan-400/50' : 'border border-white/10'}`}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                        >
                            <source src={videos[positions.midRight].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                        {positions.midRight !== centerIndex && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                                    Click to Focus
                                </div>
                            </div>
                        )}
                        <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl -z-10"></div>
                    </div>
                </div>

                {/* Video 5 - Far Right */}
                <div
                    className="absolute right-[5%] group cursor-pointer transition-all duration-700 hover:scale-105"
                    onClick={() => handleVideoClick(positions.farRight)}
                    style={{
                        transform: 'rotateY(-35deg) translateZ(-200px)',
                        transformStyle: 'preserve-3d',
                        zIndex: positions.farRight === centerIndex ? 50 : 10
                    }}
                >
                    <div className={`relative w-[280px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${positions.farRight === centerIndex ? 'border-2 border-cyan-400/50' : 'border border-white/10'}`}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                        >
                            <source src={videos[positions.farRight].src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                        {positions.farRight !== centerIndex && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold">
                                    Click to Focus
                                </div>
                            </div>
                        )}
                        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 blur-2xl -z-10"></div>
                    </div>
                </div>

            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                {videos.map((video, index) => (
                    <button
                        key={video.id}
                        onClick={() => handleVideoClick(index)}
                        className={`
              transition-all duration-300
              ${index === centerIndex
                                ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 shadow-glow-gradient'
                                : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                            }
              rounded-full
            `}
                        aria-label={`View ${video.title}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ShowreelSection;
