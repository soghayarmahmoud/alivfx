// src/components/ProjectCard.jsx

"use client";
import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

const ProjectCard = ({ title, description, instaUrl }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg shadow-blue-500/10 transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      
      {/* هذا هو الجزء الخاص بتضمين الفيديو */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url={instaUrl} width={328} />
      </div>
    </div>
  );
};

export default ProjectCard;