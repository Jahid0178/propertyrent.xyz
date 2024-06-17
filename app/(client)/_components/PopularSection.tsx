import React from "react";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PopularSectionSlider from "@/components/Sliders/PopularSectionSlider";

const PopularSection = async () => {
  const { data: popularProperties } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/popularLocation`
  );

  return (
    <section>
      <div className="container">
        <SectionHeading
          title="Explore Popular Properties"
          subTitle="Find your next property near you"
          titleClassName="text-xl md:text-2xl"
        />
        <div className="mt-8">
          <PopularSectionSlider popularProperties={popularProperties} />
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
