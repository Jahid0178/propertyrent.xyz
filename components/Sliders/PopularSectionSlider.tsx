"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IPopularLocation } from "@/typescript/interface";
import PopularPropertyCard from "../Cards/PopularPropertyCard";

const PopularSectionSlider = ({
  popularProperties,
}: {
  popularProperties: IPopularLocation[];
}) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      loop={true}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        680: {
          slidesPerView: 3,
        },
        940: {
          slidesPerView: 4,
        },
      }}
    >
      {popularProperties.map((popularProperty: any) => (
        <SwiperSlide key={popularProperty.id}>
          <PopularPropertyCard popularProperty={popularProperty} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularSectionSlider;
