import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import VisionSection from "./_components/VisionSection";
import MissionSection from "./_components/MissionSection";
import SavingTimeSection from "./_components/SavingTimeSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PropertyRent.xyz | About Us",
  description:
    "Discover your next home with PropertyRent.xyz! We offer a wide range of rental properties, from cozy apartments to spacious houses, across prime locations. Find your perfect rental with ease and enjoy transparent pricing, detailed property listings, and expert guidance. Start your property search today at PropertyRent.xyz!",
};

const AboutUsPage = () => {
  return (
    <section>
      <div className="container space-y-8">
        <SectionHeading
          title="About Us"
          titleClassName="text-center text-4xl mb-8"
        />
        <VisionSection />
        <MissionSection />
        <SavingTimeSection />
      </div>
    </section>
  );
};

export default AboutUsPage;
