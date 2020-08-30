import React, { useEffect, useState } from "react";
import { partners } from "constants/partners";
import { products_for_partners } from "constants/products";
import Swiper, { Pagination } from "swiper";

const With4Slides = () => {
  useEffect(() => {
    Swiper.use([]);
    new Swiper(".swiper-container", {
      slidesPerView: 4.5,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
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

const With1Slide = ({ t }) => {
  useEffect(() => {
    Swiper.use([Pagination]);
    new Swiper(".we-offer-container", {
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 16,
      preventInteractionOnTransition: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className='we-offer-container  overflow-hidden'>
      <div className='swiper-wrapper'>
        {products_for_partners.map((item, key) => (
          <div className='swiper-slide w-full flex-col  justify-between items-center ' key={item.src}>
            <img src={item.src} alt={item.alt} className='h-30vh max-w-full w-auto m-auto object-contain' />
            <div className=' text-sm text-center pt-2'>
              <p className=' text-primary-light text-sm font-bold'>{`${t("model")} - ${t(item.model)}`}</p>
              <p className=' text-primary-light text-xs font-bold'>{`${t("dimension")} - ${t(item.dimension)}`}</p>
              <p className=' text-primary-light text-xs font-bold'>{`${t("weight")} - ${t(item.weight)}`}</p>
              <p className=' text-primary-light text-xs font-bold'>{`${t("capacity")} - ${t(item.capacity)}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='swiper-pagination h-8 static mt-8'></div>
    </div>
  );
};

export default {
  With4Slides,
  With1Slide,
};
