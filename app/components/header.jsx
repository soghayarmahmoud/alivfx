// src/components/Header.jsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // التعديلات الرئيسية هنا: غيرنا الخلفية والظل
    <header className="fixed left-0 top-0 w-full z-50 bg-black/90 backdrop-blur-lg shadow-2xl shadow-blue-500/10 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
        {/* === اللوجو أو اسمك === */}
        <Link href="/">
          {/* استخدمنا نفس تدرج الألوان الموجود في الـ Hero Section */}
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
            Ali Abdelhameed
          </h1>
        </Link>

        {/* === روابط القائمة للشاشات الكبيرة (Desktop) === */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8 text-gray-300">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-cyan-400 transition-colors duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* === أيقونة الهمبرغر للشاشات الصغيرة (Mobile) === */}
        <div onClick={handleNav} className="md:hidden cursor-pointer z-50">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* === القائمة الجانبية للشاشات الصغيرة (Mobile Menu) - تم تعديلها للـ Dark Theme === */}
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/90 backdrop-blur-lg'
              : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] h-screen bg-gray-900 p-8 ease-in duration-500 shadow-2xl shadow-blue-500/20'
                : 'fixed left-[-100%] top-0 p-8 h-screen ease-in duration-500'
            }
          >
            <div>
              <div className="flex w-full items-center justify-between mb-8">
                <Link href="/" onClick={handleNav}>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                    Ali Abdelhameed
                  </h2>
                </Link>
                <div onClick={handleNav} className="cursor-pointer p-2 rounded-full bg-gray-800">
                  <AiOutlineClose size={22} />
                </div>
              </div>
              <div className="border-b border-gray-700">
                <p className="py-4 text-gray-400">Web Developer & Designer</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase text-gray-300">
                <li onClick={handleNav} className="py-4 text-md">
                  <Link href="/">Home</Link>
                </li>
                <li onClick={handleNav} className="py-4 text-md">
                  <Link href="/#about">About</Link>
                </li>
                <li onClick={handleNav} className="py-4 text-md">
                  <Link href="/#projects">Projects</Link>
                </li>
                <li onClick={handleNav} className="py-4 text-md">
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;