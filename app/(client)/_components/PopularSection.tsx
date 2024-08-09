import React from "react";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PopularSectionSlider from "@/components/Sliders/PopularSectionSlider";
import { popularLocations } from "@/data/data";

const PopularSection = async () => {
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="Explore Popular Properties"
          subTitle="Find your next property near you"
          titleClassName="text-xl md:text-2xl"
        />
        <div className="mt-8">
          <PopularSectionSlider popularProperties={popularLocations} />
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
