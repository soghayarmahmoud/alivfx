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
    <section id="projects" className="py-20 px-4">
      <h2 className="text-center text-5xl font-extrabold text-white mt-4 mb-12">
        My Projects
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
    </section>
  );
};

export default ProjectsSection;