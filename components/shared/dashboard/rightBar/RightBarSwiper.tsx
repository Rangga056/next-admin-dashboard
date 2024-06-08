"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import astronaut from "@/public/assets/images/astronaut.png";
import playIcon from "@/public/assets/icons/play-icon.svg";
import { Button } from "@/components/ui/button";

const RightBarSwiper = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          450: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
        }}
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="overflow-hidden w-[90vw] mx-auto relative"
      >
        <SwiperSlide className="w-full h-fit">
          <div className="w-full bg-slate-900 p-5 px-7 rounded-xl relative bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 mb-2">
            <div className="absolute bottom-0 right-3 w-1/2 h-1/2">
              <Image
                src={astronaut}
                alt="astronaut image"
                fill
                className="object-contain opacity-20"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="font-bold text-base">🔥 Avaiable Now</span>
              <h3 className="font-bold text-sm">
                How to use the new version of the admin dashboard?
              </h3>
              <span>Takes 4 minutes to learn</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                laborum facere reprehenderit eaque ipsa expedita earum officia
                aut omnis.
              </p>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="flex items-center gap-1 px-4 cursor-pointer z-10"
              >
                <Image src={playIcon} alt="play-icon" width={20} height={20} />
                <span>Watch</span>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-fit">
          <div className="w-full bg-slate-900 p-5 px-7 rounded-xl relative bg-gradient-to-t from-slate-900 via-slate-900 to-slate-700 mb-2">
            <div className="absolute bottom-0 right-3 w-1/2 h-1/2">
              <Image
                src={astronaut}
                alt="astronaut image"
                fill
                className="object-contain opacity-20"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <span className="font-bold text-base">🔥 Avaiable Now</span>
              <h3 className="font-bold text-sm">
                How to use the new version of the admin dashboard?
              </h3>
              <span>Takes 4 minutes to learn</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                laborum facere reprehenderit eaque ipsa expedita earum officia
                aut omnis.
              </p>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="flex items-center gap-1 px-4 cursor-pointer z-10"
              >
                <Image src={playIcon} alt="play-icon" width={20} height={20} />
                <span>Watch</span>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RightBarSwiper;
