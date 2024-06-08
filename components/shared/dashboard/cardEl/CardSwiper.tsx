"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardEl from "./CardEl";
import Image from "next/image";
import "swiper/css/pagination";
import chevronLeft from "@/public/assets/icons/chevron-left.svg";
import chevronRight from "@/public/assets/icons/chevron-right.svg";

const CardSwiper = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          420: { slidesPerView: 2 },
          780: { slidesPerView: 3 },
        }}
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="overflow-hidden w-[90vw] mx-auto relative"
      >
        <SwiperSlide className="w-full">
          <CardEl />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <CardEl />
        </SwiperSlide>
        <SwiperSlide className="w-full ">
          <CardEl />
        </SwiperSlide>
        <div className="swiper-button-prev absolute left-0 top-[40%] z-10 cursor-pointer">
          <Image src={chevronLeft} alt="left-button" width={32} height={32} />
        </div>
        <div className="swiper-button-next absolute right-0 top-[40%] z-10 cursor-pointer">
          {" "}
          <Image src={chevronRight} alt="right-button" width={32} height={32} />
        </div>
      </Swiper>
    </>
  );
};

export default CardSwiper;
