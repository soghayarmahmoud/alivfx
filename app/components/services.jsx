// src/components/Services.jsx

"use client";

// استيراد مكونات Swiper اللازمة
import { Swiper, SwiperSlide } from 'swiper/react';
// استيراد وحدات Swiper التي سنستخدمها (Autoplay, Pagination)
import { Autoplay, Pagination } from 'swiper/modules';

// استيراد ملفات CSS الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// استيراد الأيقونات الاحترافية
import { FaYoutube, FaTiktok, FaInstagram, FaPhotoVideo } from 'react-icons/fa';
import { RiMovie2Line, RiScissorsCutFill } from 'react-icons/ri';
import { MdColorLens, MdGraphicEq } from 'react-icons/md';


// بيانات الخدمات (يمكنك تعديلها بسهولة)
const servicesData = [
  {
    icon: <RiMovie2Line size={50} className="mx-auto text-cyan-400" />,
    title: 'مونتاج فيديوهات طويلة',
    description: 'تحرير احترافي لمقاطع اليوتيوب، الأفلام القصيرة، والمحتوى التعليمي لضمان تدفق سلس وجذاب.',
  },
  {
    icon: <RiScissorsCutFill size={50} className="mx-auto text-cyan-400" />,
    title: 'مونتاج فيديوهات قصيرة (Reels)',
    description: 'مونتاج فيديوهات قصيرة احترافية وجذابة ',
  },
  {
    icon: <MdColorLens size={50} className="mx-auto text-cyan-400" />,
    title: 'تلوين وتصحيح الألوان',
    description: 'تحسين الألوان والتباين لإضفاء مظهر سينمائي واحترافي على مقاطع الفيديو الخاصة بك.',
  },
  {
    icon: <MdGraphicEq size={50} className="mx-auto text-cyan-400" />,
    title: 'هندسة ومؤثرات صوتية',
    description: 'تحسين جودة الصوت ، وإضافة مؤثرات صوتية احترافية .',
  },
  {
    icon: <FaPhotoVideo size={50} className="mx-auto text-cyan-400" />,
    title: 'إعلانات سوشيال ميديا',
    description: 'مونتاج إعلانات قصيرة وموجهة لمنصات التواصل الاجتماعي لتحقيق أفضل النتائج التسويقية.',
  },

];


const Services = () => {
  return (
    <section id="services" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-20 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* === Section Header === */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20 shadow-glow-blue">
              Services
            </span>
          </div>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            What I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4 shadow-glow-gradient"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            خدمات متكاملة لتحويل رؤيتك إلى محتوى مرئي احترافي.
          </p>
        </div>

        {/* === Enhanced Swiper Slider === */}
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-center h-full transform transition-all duration-500 hover:scale-105 hover:shadow-depth-xl hover-shadow-intense border border-gray-700/50 overflow-hidden will-change-transform">

                {/* Enhanced decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced bottom accent line with glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-glow-gradient"></div>

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s infinite'
                  }}>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;