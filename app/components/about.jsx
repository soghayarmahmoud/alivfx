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
    <section className="text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.jpg" width={500} height={500} alt="about me section" className="rounded-2xl"/>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-400" dir="rtl">
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