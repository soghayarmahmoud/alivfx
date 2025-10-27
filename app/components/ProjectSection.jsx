// src/components/ProjectsSection.jsx

import React from "react";
import ProjectCard from "./ProjectCard";

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
];

const ProjectsSection = () => {
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
          {projectData.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              instaUrl={project.insta} 
              imgUrl={project.image} // <-- تأكد من تمرير هذا السطر
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;