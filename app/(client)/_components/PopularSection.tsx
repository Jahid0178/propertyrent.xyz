import React from "react";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PopularSectionSlider from "@/components/Sliders/PopularSectionSlider";

const PopularSection = async () => {
  const { data: popularProperties } = await axios.get(
    "http://localhost:4000/popularLocation"
  );
  console.log("popularProperties", popularProperties);
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="Explore Popular Properties"
          subTitle="Find your next property near you"
        />
        <div className="mt-8">
          <PopularSectionSlider popularProperties={popularProperties} />
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
