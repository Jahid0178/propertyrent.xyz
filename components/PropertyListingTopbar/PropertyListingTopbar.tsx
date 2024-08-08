import React from "react";
import PropertyListingFilterOptions from "./PropertyListingFilterOptions";
import LocationCarousel from "@/components/Carousel/LocationCarousel";
import { locations } from "@/data/data";

interface IPropertyListingTopbar {
  properties: any[];
}

const PropertyListingTopbar = async ({
  properties,
}: IPropertyListingTopbar) => {
  return (
    <div className="space-y-4">
      <LocationCarousel locations={locations} />
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
