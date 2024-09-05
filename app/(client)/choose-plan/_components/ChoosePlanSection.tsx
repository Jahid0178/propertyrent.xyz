import React from "react";
import AvailablePlanSection from "./AvailablePlanSection";
import PlanIntroBanner from "./PlanIntroBanner";
import { handleGetAllPackages } from "@/lib/actions/package.action";

const ChoosePlanSection = async () => {
  const { creditPackages } = await handleGetAllPackages();
  return (
    <>
      <PlanIntroBanner />
      <AvailablePlanSection creditPackages={creditPackages} />
    </>
  );
};

export default ChoosePlanSection;
