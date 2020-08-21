import React, { useEffect, useRef, useState } from "react";
import { partners } from "constants/partners";
// import Swiper JS
import Swiper from "swiper";

new Swiper(".swiper-container", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const rotateCarousel = ({ carousel, index }) => {
  var angle = (index / cellCount) * -360;
  carousel.style.transform = "translateZ(-340px) rotateY(" + angle + "deg)";
};

const carousel3D = () => {
  // const carouselRef = useRef(null);
  // const prevRef = useRef(null);
  // const nextRef = useRef(null);
  // const [index, setIndex] = useState(0);
  // const next = () => setIndex(index + 1);
  // const prev = () => setIndex(index - 1);

  useEffect(() => {
    // mySwiper.init();
  }, []);

  return (
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        {partners.map((item) => (
          <div className='swiper-slide w-full h-full' key={item.src}>
            <img src={item.src} alt={item.alt} className='w-full h-full' />
          </div>
        ))}
      </div>
      <div className='swiper-pagination'></div>
    </div>
  );
};

export default carousel3D;
