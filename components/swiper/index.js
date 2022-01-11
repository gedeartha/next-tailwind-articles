import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

export default function App() {
  const swipers = [
    {
      title: 'Enim reprehenderit elit aliquip consequat.',
      image:
        'https://images.unsplash.com/photo-1429516387459-9891b7b96c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Sit do ipsum labore labore Lorem labore.',
      image:
        'https://images.unsplash.com/photo-1639760181882-63c4e9d703db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Elit esse id aliquip et nostrud ut.',
      image:
        'https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
      title: 'Ad id reprehenderit voluptate dolore duis.',
      image:
        'https://images.unsplash.com/photo-1639403169804-318fcb1d23ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
  ];

  return (
    <div className="relative w-11/12 h-96 p-10 mx-auto">
      <Swiper
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        effect={'coverflow'}
        grabCursor={true}
        allowTouchMove={true}
        slideToClickedSlide={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        loop={true}
      >
        {swipers.map((swiper, index) => (
          <SwiperSlide key={index}>
            <img src={swiper.image} className="rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -left-6 z-50" style={{ top: '45%' }}>
        <svg
          className="swiper-prev cursor-pointer h-12 w-12 text-orange-500 border-4 border-orange-500 rounded-full opacity-50 hover:opacity-100 transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="absolute -right-6 z-50" style={{ top: '45%' }}>
        <svg
          className="swiper-next cursor-pointer h-12 w-12 text-orange-500 border-4 border-orange-500 rounded-full opacity-50 hover:opacity-100 transition duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
