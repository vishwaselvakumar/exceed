import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
;

import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../images/hero1.jpg";
import img2 from "../images/hero2.jpg";
import img3 from "../images/heros.jpg";
import img4 from "../images/hero4.jpg";
// import hero from "../images/heros.jpg"
import { Link } from "react-router-dom";
export default function App() {
  const swiperdata = [
    // {
    //   id: 1,
    //   img: img1,
    //   text: "Best IT support",
    //   smalltext: "for small & medium & enterprise",
    // },
    // {
    //   id: 2,
    //   img: img2,
    //   text: "Network solution",
    //   smalltext: " for small & medium & enterprise",
    // },
    {
      id: 3,
      img: img3,
      text: "",
      smalltext: "",
    },
    // {id:4,img:img4,text:"hello4"}
  ];
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    
<>
  <div className="relative h-full"  >
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      className="mySwiper"
    >
      {swiperdata.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="absolute inset-0">
            {/* Ensure the full image is visible */}
            <img
              src={item.img}
              alt="Hero"
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-7xl font-bold leading-tight mb-4 text-white">
              {item.text}
            </h1>
            <p className="text-4xl font-bold leading-tight mb-4 text-white">
              {item.smalltext}
            </p>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</>


  );
}
