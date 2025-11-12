// src/components/VideoCard.jsx

"use client";
import React from 'react';

const VideoCard = ({ title, description, videoUrl }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">{title || "Video Project"}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        </div>
        
        <div className="relative aspect-square w-full max-w-[328px] mx-auto bg-black">
          {/* Using the <source> tag is a best practice for compatibility. */}
          {/* It allows you to provide multiple video formats. */}
          <video controls muted className="w-full h-full object-cover" playsInline loop>
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default VideoCard;