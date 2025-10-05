"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    // "min-h-screen": لجعل القسم يملأ الشاشة بالطول.
    // "flex items-center justify-center": لتوسيط المحتوى رأسيًا وأفقيًا.
    <section className='min-h-screen bg-black flex items-center justify-center p-4'>
      
      {/* حاوية المحتوى الرئيسية */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto'>
        
        {/* === قسم النص === */}
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
              className='flex items-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105'
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>
            <Link 
              href='#projects'
              className='flex items-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-semibold transition-all duration-300'
            >
              <FaArrowDown />
              Show Projects
            </Link>
          </div>
        </div>

        {/* === قسم الصورة === */}
        <div className='col-span-12 lg:col-span-5 place-self-center mt-8 lg:mt-0'>
          <div className='rounded-full w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] relative bg-gradient-to-br from-blue-600 via-cyan-500 to-gray-900 p-1 transition-transform duration-300 hover:scale-105'>
              <Image
                className='rounded-full'
                src="/images/l.jpg"
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