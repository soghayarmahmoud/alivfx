// src/components/Footer.jsx

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col items-center relative z-10">
        {/* === الاسم أو اللوجو === */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-4">
          Ali Abdelhameed
        </h2>
        
        {/* === أيقونات السوشيال ميديا === */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <Link 
            href="https://www.instagram.com/engali.vfx?igsh=MTdsOTY2OHM5eDY2ZQ==" 
            target="_blank" 
            className="text-gray-400 hover:text-[#E1306C] transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram Profile"
          >
            <FaInstagram size={28} />
          </Link>

          <Link 
            href="https://wa.me/201095054714" 
            target="_blank" 
            className="text-gray-400 hover:text-[#25D366] transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp size={28} />
          </Link>
          
          <Link 
            href="https://youtube.com/@engalivfx?si=Pte6CDyFvVH4MUiQ" 
            target="_blank" 
            className="text-gray-400 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110"
            aria-label="Youtube Channel"
          >
            <FaYoutube size={28} />
          </Link>
        </div>

        {/* === حقوق النشر === */}
        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ali Abdelhameed. All rights reserved.
          </p>
          <p className="mt-1">
            Designed & Built By <a href="https://m-el-soghayar.vercel.app" target='_blank' className='text-blue-400 hover:underline font-bold '>Mahmoud Elsoghayar</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;