// // src/components/ProjectCard.jsx

// "use client";
// import React, { useState } from 'react';
// import { InstagramEmbed } from 'react-social-media-embed';
// import Image from 'next/image';
// import { FaPlay } from 'react-icons/fa'; // أيقونة التشغيل

// const ProjectCard = ({ title, description, instaUrl, imgUrl }) => {
//   // ١. إضافة "حالة" لتتبع عرض الفيديو
//   const [showVideo, setShowVideo] = useState(false);

//   return (
//     // ٢. إضافة "relative" لجعل هذا العنصر حاوية مرجعية
//     <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 border border-gray-700/50">
//       {/* Decorative gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none"></div>

//       <div className="relative z-10">
//         <div className="p-6">
//           <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">{title}</h3>
//           <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
//         </div>

//         {/* حاوية الفيديو/الصورة */}
//         <div className="relative aspect-square w-full max-w-[328px] mx-auto">
//           {/* ٣. عرض الفيديو فقط إذا كانت showVideo تساوي true */}
//           {showVideo ? (
//             <InstagramEmbed url={instaUrl} width="100%" />
//           ) : (
//             // ٤. في البداية، عرض الصورة المصغرة وأيقونة التشغيل
//             <div 
//               className="relative w-full h-full cursor-pointer group/play"
//               onClick={() => setShowVideo(true)} // عند النقر، يتم تغيير الحالة لعرض الفيديو
//             >
//               <Image
//                 src={imgUrl}
//                 alt={`Thumbnail for ${title}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-b-2xl transition-transform duration-300 group-hover/play:scale-105"
//               />
//               {/* طبقة سوداء شفافة فوق الصورة */}
//               <div className="absolute inset-0 bg-black/50 group-hover/play:bg-black/40 flex items-center justify-center transition-all duration-300">
//                 {/* أيقونة التشغيل */}
//                 <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-6 transform group-hover/play:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
//                   <FaPlay className="text-white text-4xl" />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Bottom accent line */}
//       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
//     </div>
//   );
// };

// export default ProjectCard;


// src/components/ProjectCard.jsx

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa'; // أيقونة التشغيل
import dynamic from 'next/dynamic'; // ١. استدعاء "dynamic" من نكست

// ٢. عمل استدعاء ديناميكي للمكتبة
// وتحديد أنها لا تعمل على السيرفر (ssr: false)
const DynamicInstagramEmbed = dynamic(
  () => import('react-social-media-embed').then(mod => mod.InstagramEmbed),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-800 rounded-b-2xl">
        <p className="text-white animate-pulse">Loading Video...</p>
      </div>
    )
  }
);

const ProjectCard = ({ title, description, instaUrl, imgUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-depth-lg transform transition-all duration-500 hover:scale-105 hover:shadow-depth-xl hover-shadow-intense border border-gray-700/50 will-change-transform">

      {/* Enhanced gradient overlay with stronger effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none"></div>

      {/* Subtle floating animation container */}
      <div className="relative z-10 group-hover:animate-float">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        </div>

        <div className="relative aspect-square w-full max-w-[328px] mx-auto">

          {showVideo ? (
            <DynamicInstagramEmbed url={instaUrl} width="100%" />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer group/play"
              onClick={() => setShowVideo(true)}
            >
              <Image
                src={imgUrl}
                alt={`Thumbnail for ${title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-b-2xl transition-all duration-500 group-hover/play:scale-110 group-hover/play:blur-[2px]"
              />
              {/* Enhanced overlay with blur backdrop */}
              <div className="absolute inset-0 bg-black/50 group-hover/play:bg-black/30 backdrop-blur-[2px] group-hover/play:backdrop-blur-[4px] flex items-center justify-center transition-all duration-500 rounded-b-2xl">
                {/* Play button with enhanced glow */}
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-6 transform group-hover/play:scale-125 transition-all duration-500 shadow-glow-gradient group-hover/play:shadow-depth-xl">
                  <FaPlay className="text-white text-4xl" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced bottom accent line with glow */}
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

export default ProjectCard;