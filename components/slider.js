import React from 'react';

import Button from './Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Slider() {
  const sliders = [
    {
      title: 'Consequat commodo cillum commodo ad non.',
      bgcolor: 'bg-yellow-500',
      subtitle:
        'Ut occaecat veniam in est cillum ea cupidatat veniam qui elit eu cillum. Adipisicing culpa occaecat eu veniam. Esse anim ullamco labore incididunt ex pariatur.',
      image: '/__images/slider1.png',
    },
    {
      title: 'In fugiat ex ut incididunt ullamco aliqua amet quis laborum.',
      bgcolor: 'bg-teal-500',
      subtitle: '',
      image: '/__images/slider2.png',
    },
    {
      title: 'Eu ad tempor incididunt aute dolor deserunt ea anim.',
      bgcolor: 'bg-pink-500',
      subtitle: '',
      image: '/__images/slider3.png',
    },
  ];

  return (
    // <div className="mt-12 max-h-full bg-slate-400 flex justify-center items-center text-black">
    <div className="relative h-full border-t-2 mt-12 ">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {sliders.map((slider, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="grid grid-cols-2 h-screen max-w-5xl">
              <div className="p-12 flex flex-col justify-center text-left">
                <article class="prose prose-sm">
                  <h1 className="font-bold antialiased text-4xl font-sans">
                    {slider.title}
                  </h1>
                  <p className="text-lg">{slider.subtitle}</p>
                  <Button className="bg-white hover:bg-teal-500 focus:ring-teal-200 text-black border border-teal-500 hover:text-white">
                    Contact us
                  </Button>
                </article>
              </div>
              <div className="flex items-center justify-center">
                <img className="max-h-96 !object-contain" src={slider.image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
