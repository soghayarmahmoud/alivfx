"use client";

import React from 'react';

/**
 * BackgroundVideo Component
 * 
 * A reusable component that renders an HTML5 video as a decorative background element.
 * 
 * @param {string} videoSrc - Path to the video file (relative to public folder)
 * @param {string} position - CSS position value ('left', 'center', 'right', or custom %)
 * @param {number} opacity - Opacity value (0-1), default 0.7
 * @param {string} rounded - Border radius (Tailwind class or custom value), default 'rounded-2xl'
 * @param {string} className - Additional custom classes
 */
const BackgroundVideo = ({
    videoSrc,
    position = 'center',
    opacity = 0.7,
    rounded = 'rounded-2xl',
    className = ''
}) => {
    const videoRef = React.useRef(null);

    // Ensure video plays on mount (handles autoplay restrictions)
    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log('Video autoplay was prevented:', err);
            });
        }
    }, []);

    // Position mapping for common layouts
    const positionMap = {
        left: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        right: 'right-0'
    };

    const positionClass = positionMap[position] || position;

    return (
        <div
            className={`absolute top-0 ${positionClass} h-full w-full md:w-1/3 overflow-hidden ${className}`}
            style={{
                opacity: opacity,
                pointerEvents: 'none' // Ensures video doesn't interfere with interactions
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className={`w-full h-full object-cover ${rounded}`}
                preload="auto"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default BackgroundVideo;
