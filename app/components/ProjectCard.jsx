// src/components/ProjectCard.jsx

"use client";
import React, { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa'; // أيقونة التشغيل

const ProjectCard = ({ title, description, instaUrl, imgUrl }) => {
  // ١. إضافة "حالة" لتتبع عرض الفيديو
  const [showVideo, setShowVideo] = useState(false);

  return (
    // ٢. إضافة "relative" لجعل هذا العنصر حاوية مرجعية
    <div className="relative bg-gray-900/50 rounded-lg overflow-hidden shadow-lg shadow-blue-500/10 transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
      </div>
      
      {/* حاوية الفيديو/الصورة */}
      <div className="relative aspect-square w-full max-w-[328px] mx-auto">
        {/* ٣. عرض الفيديو فقط إذا كانت showVideo تساوي true */}
        {showVideo ? (
          <InstagramEmbed url={instaUrl} width="100%" />
        ) : (
          // ٤. في البداية، عرض الصورة المصغرة وأيقونة التشغيل
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => setShowVideo(true)} // عند النقر، يتم تغيير الحالة لعرض الفيديو
          >
            <Image
              src={imgUrl}
              alt={`Thumbnail for ${title}`}
              layout="fill"
              objectFit="cover"
              className="rounded-b-lg"
            />
            {/* طبقة سوداء شفافة فوق الصورة */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              {/* أيقونة التشغيل */}
              <FaPlay className="text-white text-5xl opacity-80" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;