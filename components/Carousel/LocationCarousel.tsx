"use client";

import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

type LocationCarouselProps = {
  locations: any[];
  href?: string;
};

const LocationCarousel = ({ locations, href }: LocationCarouselProps) => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {locations.map((location: any) => (
            <CarouselItem key={location.division} className="basis-auto">
              <Link href={href ? `${href}/${location.division}` : "#"}>
                <Badge variant="outline" className="text-md rounded-full">
                  {location.division}
                </Badge>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LocationCarousel;
