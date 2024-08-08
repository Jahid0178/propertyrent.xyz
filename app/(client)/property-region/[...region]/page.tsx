import React from "react";
import PropertyRegionSection from "./_components/PropertyRegionSection";
import { locations } from "@/data/data";

interface PropertyRegionPageProps {
  params: { region: string; upazilla: string };
}

const PropertyRegionPage = ({ params }: PropertyRegionPageProps) => {
  const upazilas = locations.find(
    (location) => location.district === params.region[0]
  )?.upazillas;

  if (!upazilas) return;

  return (
    <PropertyRegionSection
      locations={upazilas}
      region={params.region[0]}
      upazilla={params?.region?.[1]}
    />
  );
};

export default PropertyRegionPage;
