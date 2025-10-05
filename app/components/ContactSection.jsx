// src/components/ContactSection.jsx

"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
// استيراد الأيقونات الاحترافية
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
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
    <section id="contact" className="bg-black py-24 px-4">
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* === العنوان الرئيسي === */}
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Let's Connect
        </h2>

        {/* === النص التحفيزي === */}
        <p className="text-gray-300 text-xl lg:text-2xl mb-12" dir="rtl">
          جاهز لتحويل فكرتك القادمة إلى فيديو احترافي؟ <br />
          تواصل معي ودعنا نبدأ.
        </p>

        {/* === أيقونات السوشيال ميديا === */}
        <div className="flex justify-center items-center gap-8">
          <Link 
            href="https://www.instagram.com/engali.vfx?igsh=MTdsOTY2OHM5eDY2ZQ==" 
            target="_blank" 
            className="text-gray-400 hover:text-[#E1306C] transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram Profile"
          >
            <FaInstagram size={44} />
          </Link>

          <Link 
            href="https://wa.me/201095054714" 
            target="_blank" 
            className="text-gray-400 hover:text-[#25D366] transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp Chat"
          >
            <FaWhatsapp size={44} />
          </Link>
          
          <Link 
            href="https://youtube.com/@engalivfx?si=Pte6CDyFvVH4MUiQ" 
            target="_blank" 
            className="text-gray-400 hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110"
            aria-label="Youtube Channel"
          >
            <FaYoutube size={44} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;