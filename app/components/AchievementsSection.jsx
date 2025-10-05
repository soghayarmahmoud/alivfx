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
    <section className="py-20 px-4 bg-gray-900">
      {/* ٣. ربط الـ ref بالعنصر الذي نريد مراقبته */}
      <div ref={ref} className="max-w-4xl mx-auto border-2 border-blue-500/30 rounded-lg p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {achievementsList.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <h2 className="text-white text-5xl font-extrabold">
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
              <p className="text-[#ADB7BE] text-lg mt-2">
                {achievement.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;