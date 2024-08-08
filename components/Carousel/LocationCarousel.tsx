"use client";

import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

type LocationCarouselProps = {
  locations: any[];
};

const LocationCarousel = ({ locations }: LocationCarouselProps) => {
  const params = useParams();
  const region = params?.region?.[0];

  const constructHref = (location: string) => {
    let baseUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/property-region`;

    // If we are in a region, append it to the base URL
    if (region) {
      baseUrl += `/${region}`;
    }

    // Append the location to the base URL
    return `${baseUrl}/${location}`;
  };

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {locations.map((location) => {
            const locationName = location.district || location;
            const dynamicHref = constructHref(locationName);
            return (
              <CarouselItem key={locationName} className="basis-auto">
                <Link href={dynamicHref}>
                  <Badge variant="outline" className="text-md rounded-full">
                    {locationName}
                  </Badge>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LocationCarousel;
