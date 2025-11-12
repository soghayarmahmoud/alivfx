// src/components/CompaniesSection.jsx

"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// قائمة الشركات التي عملت معها
const companies = [
  "Mantijly",
  "Kalup Nutrition",
  "Attfa",
  "بناء",
  "Air Condition",
  "FST",
  "J&CO",
  "Perfect House",
  "Thebes International",
];

const CompaniesSection = () => {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-1/2 left-1/4 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-1/2 right-1/4 -translate-y-1/2 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* === عنوان القسم === */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20">
              🏢 My Partners
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Trusted by Great Companies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            الشركات التي وثقت بي لتقديم حلول إبداعية في المونتاج وصناعة المحتوى.
          </p>
        </div>

        {/* === شريط التمرير للشركات === */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="!pb-12" // Add padding for pagination
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="h-28">
                  <div className="flex items-center justify-center h-full bg-gray-900/50 border-2 border-gray-800/50 rounded-xl p-4 transition-all duration-300 hover:bg-gray-800/70 hover:border-cyan-500/50 hover:scale-105">
                    {/* You can replace this text with an Image component later */}
                    <span className="text-white text-lg font-bold text-center">
                      {company}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;