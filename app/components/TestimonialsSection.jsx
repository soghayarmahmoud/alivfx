"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialsData = [
  {
    id: 1,
    name: "Kalup Nutrition",
    role: "Company",
    image: "/images/client1.jpg",
    rating: 5,
    review: "الفيديو جميل فعلا وباين انك تعبت فيه",
  },
  {
    id: 2,
    name: "Mohammed Hosney",
    role: "Content Creator",
    image: "/images/client2.jpg",
    rating: 5,
    review: "انت فنان ماشاءالله",
  },
  {
    id: 3,
    name: "Mantijly",
    role: "Company",
    image: "/images/client3.jpg",
    rating: 5,
    review: "مبسوط من شغفك جدًا جدًا",
  },
  {
    id: 4,
    name: "Bebo",
    role: "Content Creator",
    image: "/images/client4.jpg",
    rating: 5,
    review: "ما شاء الله عليك في التصميم،  تصميمك جميل جدًا و جودة الفيديو بتكون جميلة جدًا",
  },
  {
    id: 5,
    name: "Bebo K",
    role: "Content Creator",
    image: "/images/client5.jpg",
    rating: 5,
    review: "انت ازاي وصلت للمرحلة دي بجد ماشاء الله .",
  },

];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            آراء عملائي الذين وثقوا بي لتحويل أفكارهم إلى محتوى مرئي احترافي
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonials-swiper pb-16"
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-gray-700/50 relative overflow-hidden">
                {/* Decorative Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-500/20">
                  <FaQuoteLeft size={40} />
                </div>

                {/* Client Info */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 mr-4">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" size={18} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed text-base" dir="rtl">
                  {testimonial.review}
                </p>

                {/* Decorative Gradient Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styles for Navigation Buttons */}
      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #06b6d4;
          background: rgba(6, 182, 212, 0.1);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }
        
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background: rgba(6, 182, 212, 0.2);
          transform: scale(1.1);
        }

        .testimonials-swiper .swiper-button-next::after,
        .testimonials-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: #06b6d4;
          opacity: 0.5;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
