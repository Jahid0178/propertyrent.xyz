import React from "react";
import { Metadata } from "next";
import ChoosePlanSection from "./_components/ChoosePlanSection";

export const metadata: Metadata = {
  title: "Choose the Best Rental Plan for Your Needs",
  description:
    "Explore flexible rental plans tailored to suit your budget and needs. Select the best plan for property listings and start renting with ease on PropertyRent.xyz.",
  keywords:
    "choose plan, rental plans, property rent plans, budget rental plans, property listings, rental packages, rent property Bangladesh, affordable rental plans",
  robots: "index, follow",
  authors: {
    name: "PropertyRent.xyz",
  },
  alternates: {
    canonical: "https://www.propertyrent.xyz/choose-plan",
  },
};

const ChoosePlan = () => {
  return <ChoosePlanSection />;
};

export default ChoosePlan;
