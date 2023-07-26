import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from "../../assets/profile.jpg";
import img2 from "../../assets/img2.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "../..//App.css"

// import required modules
import { Pagination } from 'swiper';
import History from '../History';

export default function SliderHistory() {
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
        <History title="..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="mohammad" img={img2}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="thexasan..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="thexasan..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="sharif_kh" img={img2}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="thexasan..." img={profile}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="thexasan..." img={img2}></History>
        </SwiperSlide>
        <SwiperSlide>
        <History title="thexasan..." img={profile}></History>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
