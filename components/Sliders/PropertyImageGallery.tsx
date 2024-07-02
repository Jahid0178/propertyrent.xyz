"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface IPropertyImageGallery {
  gallery: {
    url: string;
  }[];
}

const PropertyImageGallery = ({ gallery }: IPropertyImageGallery) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        className="property-image-gallery-slider"
        spaceBetween={20}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {gallery.map((image, ind) => (
          <SwiperSlide key={ind}>
            <Image
              src={image.url}
              alt="property image"
              width={1280}
              height={500}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="property-gallery-thumbs-slider"
      >
        {gallery.map((image, ind) => (
          <SwiperSlide key={ind}>
            <Image
              src={image.url}
              alt="property image"
              width={1280}
              height={500}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertyImageGallery;
