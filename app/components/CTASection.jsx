"use client";

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/30">
              🎬 Ready to Start?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let's Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Amazing Together
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" dir="rtl">
            عندك فكرة أو مشروع وعايز تحوله لفيديو احترافي؟ تواصل معي دلوقتي ودعنا نبدأ رحلة الإبداع سوياً
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/201095054714"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 w-full sm:w-auto justify-center"
            >
              <FaWhatsapp size={24} />
              <span>Start Your Project</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>View My Work</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Professional Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">100% Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
