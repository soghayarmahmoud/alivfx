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
    description: 'إنشاء فيديوهات Reels سريعة ومؤثرة لمنصات TikTok, Instagram, و YouTube Shorts لجذب الانتباه وزيادة التفاعل.',
  },
  {
    icon: <MdColorLens size={50} className="mx-auto text-cyan-400" />,
    title: 'تلوين وتصحيح الألوان',
    description: 'تعديل ألوان الفيديو لإعطاء طابع سينمائي أو لتوحيد اللقطات المختلفة снята بكاميرات متنوعة.',
  },
  {
    icon: <MdGraphicEq size={50} className="mx-auto text-cyan-400" />,
    title: 'هندسة ومؤثرات صوتية',
    description: 'تنقية الصوت، إضافة مؤثرات صوتية، وموسيقى تصويرية مناسبة لرفع جودة الفيديو النهائية.',
  },
  {
    icon: <FaPhotoVideo size={50} className="mx-auto text-cyan-400" />,
    title: 'إعلانات سوشيال ميديا',
    description: 'مونتاج إعلانات قصيرة وموجهة لمنصات التواصل الاجتماعي لتحقيق أفضل النتائج التسويقية.',
  },
  {
    icon: <FaYoutube size={50} className="mx-auto text-cyan-400" />,
    title: 'إدارة محتوى يوتيوب',
    description: 'المساعدة في جدولة المحتوى، إنشاء صور مصغرة (Thumbnails) جذابة، وكتابة عناوين فعالة.',
  },
];


const Services = () => {
  return (
    <section id="services" className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* === عنوان القسم === */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">
            What I Offer
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            خدمات متكاملة لتحويل رؤيتك إلى محتوى مرئي احترافي.
          </p>
        </div>

        {/* === السلايدر === */}
        <Swiper
          // إعدادات نقاط التوقف للشاشات المختلفة (Responsive)
          breakpoints={{
            // عند عرض 320px أو أكبر، اعرض سلايد واحد
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // عند عرض 768px أو أكبر، اعرض 2 سلايد
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // عند عرض 1024px أو أكبر، اعرض 3 سلايد
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          // تشغيل تلقائي كل 3 ثواني
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // لا يتوقف عند تفاعل المستخدم
          }}
          // تفعيل نقاط التنقل في الأسفل
          pagination={{
            clickable: true,
          }}
          // الوحدات التي سيستخدمها السلايدر
          modules={[Autoplay, Pagination]}
          className="mySwiper" // يمكنك استخدام هذا الكلاس لإضافة تنسيقات خاصة
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-800 p-8 rounded-lg text-center h-full transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700 shadow-lg shadow-blue-500/10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;