import React, { useEffect, useRef, useState } from "react";
import { partners } from "constants/partners";
// import Swiper JS
import Swiper from "swiper";

const Carousel = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 4.5,
      spaceBetween: 16,
      grabCursor: true,
      autoplay: {
        delay: 1000,
      },
    });
  }, []);

  return (
    <div className='swiper-container max-w-5xl '>
      <div className='swiper-wrapper max-w-full'>
        {partners.map((item) => (
          <div
            className='swiper-slide  bg-white flex justify-center align-middle  shadow-lg xs:p-1 lg:p-0'
            key={item.src}
          >
            <img src={item.src} alt={item.alt} className='lg:h-56 sm:h-32 xs:h-16  object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
