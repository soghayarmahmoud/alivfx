"use client";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievementsList = [
  { metric: "Projects", value: "100", postfix: "+" },
  { metric: "Happy Clients", value: "50", postfix: "+" },
  { metric: "Years", value: "4" },
];

const AchievementsSection = () => {
    
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-10 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl bottom-10 right-1/4 animate-pulse delay-1000"></div>
      </div>

      {/* ٣. ربط الـ ref بالعنصر الذي نريد مراقبته */}
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20">
              📊 Achievements
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-4">Numbers Speak</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-2 border-blue-500/20 rounded-2xl p-10 shadow-2xl shadow-blue-500/10">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="group flex flex-col items-center justify-center text-center p-6 rounded-xl bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-6xl font-extrabold mb-2">
                {/* ٤. استخدام مكون CountUp وتشغيله بناءً على inView */}
                {inView ? (
                  <CountUp 
                    end={parseInt(achievement.value)} 
                    duration={3} 
                    suffix={achievement.postfix || ''} 
                  />
                ) : (
                  '0' // عرض صفر قبل أن يبدأ العداد
                )}
              </h2>
              <p className="text-gray-300 text-lg font-semibold mt-2">
                {achievement.metric}
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;