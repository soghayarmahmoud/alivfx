// src/components/ProjectsSection.jsx

"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import VideoCard from "./VideoCard"; // استيراد الكرت الجديد
import { FaArrowDown } from "react-icons/fa";
const projectData = [
  {
    id: 1,
    title: "Dynamic UI Reel",
    description: "A fast-paced edit showcasing user interface animations.",
    image: "/images/pro1.PNG", // <-- هذه الصورة ستُستخدم
    insta: "https://www.instagram.com/reel/DMV4ehKodP9/?igsh=aDJmb3lkcDR6dmR0",
  },
  // ... باقي المشاريع بنفس الشكل
  {
    id: 2,
    title: "Personal Branding Video",
    description: "Crafting a compelling narrative to build a strong personal brand.",
    image: "/images/pro2.PNG",
    insta: "https://www.instagram.com/p/DHBPKYkqn-V/",
  },
  {
    id: 3,
    title: "Cinematic Color Grading",
    description: "Transforming footage with professional color grading.",
    image: "/images/pro3.PNG",
    insta: "https://www.instagram.com/p/DJZnYozquwt/",
  },
  {
    id: 4,
    title: "3D Motion Design",
    description: "Integrating 3D elements for a stunning product promo.",
    image: "/images/pro4.PNG",
    insta: "https://www.instagram.com/reel/DK3D11qKY9c/?igsh=ZzBsYmM2bThiYjdk",
  },
  {
    id: 5,
    title: "Engaging Motion Graphic",
    description: "Using motion graphics to explain a complex idea simply.",
    image: "/images/pro5.PNG",
    insta: "https://www.instagram.com/reel/DF3Jwc9qM_i/?igsh=MWEwM3dnaW1hdTA5bw%3D%3D",
  },
  {
    id: 6,
    title: "",
    description: "",
    video: "/vids/1.mp4", // مسار الفيديو المحلي
    type: "video", // تحديد النوع
  },
  {
    id: 7,
    title: "",
    description: "",
    video: "/vids/2.mp4", // مسار الفيديو المحلي
    type: "video", // تحديد النوع
  },
  {
    id: 8,
    title: "",
    description: "",
    video: "/vids/3.mp4", // مسار الفيديو المحلي
    type: "video", // تحديد النوع
  },
  {
    id: 9,
    title: "",
    description: "",
    video: "/vids/4.mp4", // مسار الفيديو المحلي
    type: "video", // تحديد النوع
  },
];

// Reorder projects to show video projects first
const videoProjects = projectData.filter(p => p.type === 'video');
const otherProjects = projectData.filter(p => p.type !== 'video');
const sortedProjects = [...videoProjects.slice(-4).reverse(), ...otherProjects, ...videoProjects.slice(0, -4)];

const ProjectsSection = () => {
  const [showAll, setShowAll] = React.useState(false);
  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/20">
              🎬 Portfolio
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            مجموعة من أعمالي المميزة التي تعكس شغفي بالإبداع والتميز
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.slice(0, showAll ? sortedProjects.length : 4).map((project) => {
            if (project.type === 'video') {
              return (
                <VideoCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  videoUrl={project.video}
                />
              );
            }
            return (
              <ProjectCard 
                key={project.id} 
                {...project}
                instaUrl={project.insta} 
                imgUrl={project.image}
              />
            );
          })}
        </div>

        {sortedProjects.length > 4 && (
          <div className="mt-16 text-center">
            {showAll ? (
              <button
                onClick={() => setShowAll(false)}
                className="group flex items-center gap-3 mx-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <span>Show Less</span>
                <FaArrowDown className="group-hover:translate-y-1 rotate-180 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-3 mx-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
              >
                <span>Show More</span>
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            )}
          </div>
        )}





      </div>
    </section>
  );
};

export default ProjectsSection;