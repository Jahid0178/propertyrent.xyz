import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";

const PlanIntroBanner = () => {
  return (
    <section className="bg-orange-500 min-h-[700px] flex justify-center items-center">
      <div className="container h-full">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title="Choose the Best Plan for Your Rental Needs"
            titleClassName="text-3xl md:text-5xl text-center text-white"
            subTitle="Explore our flexible rental plans tailored to suit every budget and requirement. Whether you're looking for short-term listings or long-term rentals, our plans offer transparent pricing and a range of features to help you find your ideal property in Bangladesh. Select the perfect option and start your property search today!"
            subTitleClassName="text-center text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default PlanIntroBanner;
