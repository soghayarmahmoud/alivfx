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
            <div className="relative z-10 w-full h-[700px] max-w-[1600px] mx-auto items-center justify-center hidden md:flex" style={{ perspective: '1500px' }}>

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
                            key={videos[positions.farLeft].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                            onError={(e) => console.error('Video error (farLeft):', videos[positions.farLeft].src, e)}
                            onLoadedData={() => console.log('Video loaded (farLeft):', videos[positions.farLeft].src)}
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
                            key={videos[positions.midLeft].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                            onError={(e) => console.error('Video error (midLeft):', videos[positions.midLeft].src, e)}
                            onLoadedData={() => console.log('Video loaded (midLeft):', videos[positions.midLeft].src)}
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
                            key={videos[positions.center].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                            onError={(e) => console.error('Video error (center):', videos[positions.center].src, e)}
                            onLoadedData={() => console.log('Video loaded (center):', videos[positions.center].src)}
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
                            key={videos[positions.midRight].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                            onError={(e) => console.error('Video error (midRight):', videos[positions.midRight].src, e)}
                            onLoadedData={() => console.log('Video loaded (midRight):', videos[positions.midRight].src)}
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
                            key={videos[positions.farRight].src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            preload="auto"
                            onError={(e) => console.error('Video error (farRight):', videos[positions.farRight].src, e)}
                            onLoadedData={() => console.log('Video loaded (farRight):', videos[positions.farRight].src)}
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

            {/* Mobile Layout - Show all videos in horizontal scroll */}
            <div className="md:hidden relative z-10 w-full px-4 py-8">
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            onClick={() => handleVideoClick(index)}
                            className={`flex-shrink-0 group cursor-pointer transition-all duration-500 snap-start ${index === centerIndex ? 'scale-105' : 'scale-100'
                                }`}
                        >
                            <div className={`relative w-[150px] h-[250px] rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${index === centerIndex
                                ? 'border-2 border-cyan-400/70 shadow-cyan-400/50'
                                : 'border border-white/20'
                                }`}>
                                <video
                                    key={video.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    preload="auto"
                                    onError={(e) => console.error('Video error (mobile):', video.src, e)}
                                    onLoadedData={() => console.log('Video loaded (mobile):', video.src)}
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Featured badge for mobile */}
                                {index === centerIndex && (
                                    <div className="absolute top-2 left-2 bg-cyan-500/90 backdrop-blur-sm px-2 py-1 rounded-full text-white font-bold text-xs">
                                        Featured
                                    </div>
                                )}

                                {/* Video number indicator */}
                                <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold text-center">
                                    Video {index + 1}
                                </div>

                                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl -z-10"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="text-center mt-4 text-gray-400 text-sm">
                    ← Swipe to see all videos →
                </div>
            </div>

        </section>
    );
};

export default ShowreelSection;
