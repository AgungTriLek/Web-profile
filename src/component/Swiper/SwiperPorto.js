import React from 'react';
import Portofolio from '../Portofolio/Portofolio';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Project1 from '../../asset/img/project1.png';
import Project2 from '../../asset/img/project2.png';
import Project3 from '../../asset/img/project3.png';
import Project4 from '../../asset/img/project4.png';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
       breakpoints={{  
        320: {
          slidesPerView: 1,
        },
        480: { 
          slidesPerView: 1, 
          
        },
        768: {
        slidesPerView: 3
        },
        1024: { 
          slidesPerView: 4
        },
      }}
        grabCursor={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide >
            <Portofolio gambar={Project1} title={'Website Profile Probolinggo'} />
        </SwiperSlide>
        <SwiperSlide >
            <Portofolio gambar={Project2} title={'Data Base Probolinggo'} />
        </SwiperSlide>
        <SwiperSlide >
            <Portofolio gambar={Project3} title={'Next Project'} />
        </SwiperSlide>
        <SwiperSlide >
            <Portofolio gambar={Project4} title={'Prosess Project'} />
        </SwiperSlide >
        <SwiperSlide >
            <Portofolio gambar={Project4} title={'Prosess Project'} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}