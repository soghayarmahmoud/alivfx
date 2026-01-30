// src/components/ProjectsSection.jsx

"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import VideoCard from "./VideoCard"; // استيراد الكرت الجديد
import { FaArrowDown } from "react-icons/fa";

// Featured Reals - Premium showcase content
const featuredReals = [
  {
    id: 101,
    title: "Quick Reel",
    description: "Fast-paced engaging content",
    video: "/vids/reals/real_1.mp4",
    type: "video",
    featured: true
  },
  {
    id: 102,
    title: "Creative Showcase",
    description: "Innovative visual storytelling",
    video: "/vids/reals/real_2.mp4",
    type: "video",
    featured: true
  },
  {
    id: 103,
    title: "Dynamic Content",
    description: "Eye-catching motion design",
    video: "/vids/reals/real_3.mp4",
    type: "video",
    featured: true
  },
  {
    id: 104,
    title: "Viral Potential",
    description: "Trending style content creation",
    video: "/vids/reals/real_4.mp4",
    type: "video",
    featured: true
  },
  {
    id: 105,
    title: "Impact Reel",
    description: "Maximum engagement design",
    video: "/vids/reals/real_5.mp4",
    type: "video",
    featured: true
  }
];

const projectData = [
  // Reals videos at the top
  {
    id: 101,
    title: "Quick Reel",
    description: "Fast-paced engaging content",
    video: "/vids/reals/real_1.mp4",
    type: "video"
  },
  {
    id: 102,
    title: "Creative Showcase",
    description: "Innovative visual storytelling",
    video: "/vids/reals/real_2.mp4",
    type: "video"
  },
  {
    id: 103,
    title: "Dynamic Content",
    description: "Eye-catching motion design",
    video: "/vids/reals/real_3.mp4",
    type: "video"
  },
  {
    id: 104,
    title: "Viral Potential",
    description: "Trending style content creation",
    video: "/vids/reals/real_4.mp4",
    type: "video"
  },
  {
    id: 105,
    title: "Impact Reel",
    description: "Maximum engagement design",
    video: "/vids/reals/real_5.mp4",
    type: "video"
  },
  // Original projects
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
  const [isLoading, setIsLoading] = React.useState(false);

  const handleShowMore = () => {
    setIsLoading(true);
    // Fast loading with speed animation (0.8 seconds)
    setTimeout(() => {
      setShowAll(true);
      setIsLoading(false);
    }, 800);
  };

  const handleShowLess = () => {
    setShowAll(false);
    // No scroll - just collapse
  };

  return (
    <section id="projects" className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Enhanced Animated Background with stronger blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Featured Reels Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="group relative bg-gradient-to-r from-purple-500/20 via-pink-400/15 to-purple-500/20 backdrop-blur-xl text-purple-400 px-6 py-3 rounded-full text-sm font-semibold border border-purple-400/30 shadow-depth-md hover:shadow-depth-lg transition-all duration-500 hover:scale-105 inline-flex items-center gap-2 animate-float overflow-hidden">
                {/* Gradient glow border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-full blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Featured Reels</span>
              </span>
            </div>
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Premium Showcases
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Top-tier content designed for maximum engagement and impact
            </p>
          </div>

          {/* Featured Reels Grid - Larger cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredReals.map((reel) => (
              <div key={reel.id} className="group relative">
                {/* Enhanced shadow and glow for featured items */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                {/* Featured badge */}
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-depth-lg flex items-center gap-1.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Featured</span>
                  </div>
                </div>

                {/* Video Card with enhanced styling */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-depth-xl hover:shadow-depth-xl hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.03] will-change-transform">
                  {/* Glassmorphic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none"></div>

                  <VideoCard
                    title={reel.title}
                    description={reel.description}
                    videoUrl={reel.video}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Projects Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="group relative bg-gradient-to-r from-cyan-500/20 via-cyan-400/15 to-cyan-500/20 backdrop-blur-xl text-cyan-400 px-6 py-3 rounded-full text-sm font-semibold border border-cyan-400/30 shadow-depth-md hover:shadow-depth-lg transition-all duration-500 hover:scale-105 inline-flex items-center gap-2 animate-float overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-cyan-500/50 rounded-full blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Portfolio</span>
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Other Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            مجموعة من أعمالي المميزة التي تعكس شغفي بالإبداع والتميز
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.slice(0, showAll ? sortedProjects.length : 4).map((project, index) => {
            const CardComponent = (
              project.type === 'video' ? (
                <VideoCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  videoUrl={project.video}
                />
              ) : (
                <ProjectCard
                  key={project.id}
                  {...project}
                  instaUrl={project.insta}
                  imgUrl={project.image}
                />
              )
            );

            // Add staggered animation for newly revealed items
            if (showAll && index >= 4) {
              return (
                <div
                  key={project.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${(index - 4) * 0.1}s` }}
                >
                  {CardComponent}
                </div>
              );
            }

            return CardComponent;
          })}
        </div>

        {sortedProjects.length > 4 && (
          <div className="mt-16 text-center">
            {isLoading ? (
              // Modern Loading State
              <div className="flex flex-col items-center gap-4">
                <div className="loading-spinner-lg shadow-glow-gradient"></div>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="animate-shimmer">Loading amazing projects</span>
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            ) : showAll ? (
              <button
                onClick={handleShowLess}
                className="group flex items-center gap-3 mx-auto px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-depth-md hover:shadow-depth-xl hover:scale-105 hover-shadow-intense"
              >
                <span>Show Less</span>
                <FaArrowDown className="group-hover:translate-y-1 rotate-180 transition-transform" />
              </button>
            ) : (
              <button
                onClick={handleShowMore}
                className="group relative flex items-center gap-3 mx-auto px-8 py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-depth-md hover:shadow-depth-xl hover:scale-105 hover-shadow-intense overflow-hidden"
              >
                {/* Animated background shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Show More</span>
                <FaArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;