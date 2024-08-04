import React from "react";
import axios from "axios";
import PropertyListingFilterOptions from "./PropertyListingFilterOptions";
import LocationCarousel from "@/components/Carousel/LocationCarousel";

interface IPropertyListingTopbar {
  properties: any[];
}

const PropertyListingTopbar = async ({
  properties,
}: IPropertyListingTopbar) => {
  const response = await axios.get("https://bdapis.com/api/v1.2/divisions");

  return (
    <div className="space-y-4">
      <LocationCarousel
        locations={response.data?.data}
        href="/property-region"
      />
      <div className="flex justify-between items-center gap-4">
        <div>
          Showing <span className="font-semibold">{properties.length}</span>{" "}
          properties
        </div>
        <div>
          <PropertyListingFilterOptions />
        </div>
      </div>
    </div>
  );
};

export default PropertyListingTopbar;
