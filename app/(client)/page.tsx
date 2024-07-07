import React from "react";
import HeroSection from "./_components/HeroSection";
import PopularSection from "./_components/PopularSection";
import TrendingPropertySection from "./_components/TrendingPropertySection";
import FeaturedPropertySection from "./_components/FeaturedPropertySection";
import RecentPropertySection from "./_components/RecentPropertySection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PopularSection />
      <TrendingPropertySection />
      <FeaturedPropertySection />
      <RecentPropertySection />
    </>
  );
};

export default HomePage;
