"use client";

import React from "react";
import PropertyCard from "../Cards/PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { PropertyProps } from "@/typescript/interface";
import "swiper/css/navigation";

interface FeaturedProeprtySliderProps {
  featuredProperties: PropertyProps[];
}

const FeaturedPropertySlider = ({
  featuredProperties,
}: FeaturedProeprtySliderProps) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        680: {
          slidesPerView: 2,
        },
        940: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {featuredProperties.slice(0, 9).map((featuredProperty: PropertyProps) => (
        <SwiperSlide key={featuredProperty._id}>
          <PropertyCard
            key={featuredProperty._id}
            propertyData={featuredProperty}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedPropertySlider;
