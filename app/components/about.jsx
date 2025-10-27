// src/components/AboutSection.jsx

"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// ١. تم تحسين شكل المحتوى ليتناسب مع المظهر الداكن
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-300">
        <li>Adobe Premiere Pro & After Effects</li>
        <li>VFX & Motion Graphics</li>
        <li>Sound Design & Audio Editing</li>
        <li>Color Correction & Grading</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-300">
        <li>Courses from Udemy & Coursera</li>
        <li>Specialized tutorials from YouTube</li>
        <li>Workshops from Yanfaa (ينفع)</li>
        <li>Continuous self-learning</li>
      </ul>
    )
  },
  {
    title: "Styles",
    id: "styles",
    content: (
      <ul className="list-disc pl-4 space-y-2 text-gray-300">
        <li>Fast-Paced Social Media Edits (Reels)</li>
        <li>Cinematic & Documentary Style</li>
        <li>Corporate & Educational Videos</li>
        <li>Creative 3D & Motion Graphics</li>
        <li>Adaptable to any reference style</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    // ٢. تم تعديل الألوان والتباعد ليتناسب مع التصميم العام
    <section className="relative text-white py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 right-10 animate-pulse"></div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-12 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 max-w-7xl mx-auto relative z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
          <Image src="/images/about.jpg" width={500} height={500} alt="about me section" className="relative rounded-2xl shadow-2xl"/>
        </div>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <div className="inline-block mb-4">
            <span className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/20">
              👋 About Me
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6"></div>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed" dir="rtl">
            بساعد صناع المحتوى والعلامات التجارية على تحويل أفكارهم لفيديوهات جذابة تنجح في جذب الانتباه وتوصيل الرسالة. بمزج بين الخبرة، السرعة، والإبداع علشان كل فيديو يطلع بتجربة بصرية فريدة تستحق المشاركة.
          </p>
          
          {/* ٣. تم إنشاء الأزرار بشكل ديناميكي بدلاً من التكرار */}
          <div className="flex flex-row mt-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* ٤. تم إضافة خلفية بسيطة للمحتوى لتمييزه */}
          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg min-h-[200px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;