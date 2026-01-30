// src/components/VideoCard.jsx

"use client";
import React from 'react';

const VideoCard = ({ title, description, videoUrl }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-depth-lg transform transition-all duration-500 hover:scale-105 hover:shadow-depth-xl hover-shadow-intense border border-gray-700/50 will-change-transform">

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none"></div>

      <div className="relative z-10 group-hover:animate-float">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">{title || "Video Project"}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        </div>

        <div className="relative aspect-square w-full max-w-[328px] mx-auto bg-black rounded-b-2xl overflow-hidden shadow-depth-md">
          <video controls muted className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" playsInline loop>
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Enhanced bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-glow-gradient"></div>

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'shimmer 3s infinite'
        }}>
      </div>
    </div>
  );
};

export default VideoCard;