"use client";

import React from 'react';
import BackgroundVideo from './BackgroundVideo';

/**
 * CinematicVideoSection Component
 * 
 * A full-height hero section featuring multiple background videos in a cinematic layout
 * with interactive foreground content positioned above the videos.
 * 
 * @param {Array} videos - Array of video configuration objects
 *   Each object should contain: { src: string, position: string, opacity: number }
 * @param {ReactNode} children - Foreground content (CTA buttons, text, etc.)
 * @param {string} className - Additional custom classes for the section
 */
const CinematicVideoSection = ({
    videos = [],
    children,
    className = ''
}) => {
    return (
        <section
            className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-black ${className}`}
        >
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                {videos.map((video, index) => (
                    <BackgroundVideo
                        key={index}
                        videoSrc={video.src}
                        position={video.position || 'center'}
                        opacity={video.opacity || 0.6}
                        rounded={video.rounded || 'rounded-2xl'}
                        className={video.className || ''}
                    />
                ))}

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none"></div>
            </div>

            {/* Foreground Content Layer - Always Interactive */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
                <div className="max-w-6xl mx-auto w-full">
                    {children}
                </div>
            </div>

            {/* Decorative blur orbs for depth */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
                <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
        </section>
    );
};

export default CinematicVideoSection;
