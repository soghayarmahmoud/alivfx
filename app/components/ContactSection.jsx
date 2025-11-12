// src/components/ContactSection.jsx

"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
// استيراد الأيقونات الاحترافية
import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from 'react-icons/fa';
// استيراد أدوات الأنيميشن
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  // إعدادات كشف العنصر عند الدخول للشاشة لتشغيل الأنيميشن
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // تعريف متغيرات الأنيميشن
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-10 left-1/3 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-10 right-1/3 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20">
            💬 Get In Touch
          </span>
        </div>

        {/* === العنوان الرئيسي === */}
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>

        {/* === النص التحفيزي === */}
        <p className="text-gray-300 text-xl lg:text-2xl mb-12 leading-relaxed" dir="rtl">
          جاهز لتحويل فكرتك القادمة إلى فيديو احترافي؟ <br />
          تواصل معي ودعنا نبدأ.
        </p>

      </motion.div>
    </section>
  );
};

export default ContactSection;