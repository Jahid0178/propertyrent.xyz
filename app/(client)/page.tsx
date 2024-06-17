import React from "react";
import HeroSection from "./_components/HeroSection";
import PopularSection from "./_components/PopularSection";
import TrendingPropertySection from "./_components/TrendingPropertySection";
import FeaturedPropertySection from "./_components/FeaturedPropertySection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PopularSection />
      <TrendingPropertySection />
      <FeaturedPropertySection />
    </>
  );
};

export default HomePage;
