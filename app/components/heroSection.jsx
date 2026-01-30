"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className='min-h-screen bg-black flex items-center justify-center pt-28 pb-12 px-4 md:pt-20 relative overflow-hidden'>
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl bottom-20 left-1/3 animate-glow-pulse"></div>
      </div>

      {/* Main content container */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto relative z-10'>

        {/* === Text Section === */}
        <div className='col-span-12 lg:col-span-7 place-self-center text-center sm:text-left animate-fade-in-slide-up'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Hi, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Ali Abdelhameed', 1000,
                'Video Editor', 1000,
                'Content Creator', 1000
              ]}
              wrapper="span"
              speed={50}
              className="text-gray-200"
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl' style={{ direction: "rtl" }}>
            أنا علي عبدالحميد، مونتير محترف وصانع محتوى. هدفي دائمًا أن أساعد العملاء على تقديم محتوى جديد — سريع، مفيد، ويشد الانتباه من أول ثانية. كما أساعد المونتيرين الطموحين على تطوير مستواهم وتعلم أسرار برامج المونتاج.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start'>
            <a
              href='https://wa.me/201095054714'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-depth-md hover:shadow-depth-lg hover-shadow-intense'
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <Link
              href='#projects'
              className='group relative flex items-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-semibold transition-all duration-300 shadow-depth-sm hover:shadow-depth-md overflow-hidden'
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <FaArrowDown className="relative z-10" />
              <span className="relative z-10">Show Projects</span>
            </Link>
          </div>
        </div>

        {/* === Profile Image Section with floating animation === */}
        <div className='col-span-12 lg:col-span-5 place-self-center mt-8 lg:mt-0'>
          <div className='animate-float rounded-full w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative bg-gradient-to-br from-blue-600 via-cyan-500 to-gray-900 p-1 transition-all duration-500 hover:scale-110 shadow-depth-xl hover:shadow-depth-xl hover-shadow-intense will-change-transform'>
            <Image
              className='rounded-full'
              src="/images/logo.jpg"
              alt='profile image'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;