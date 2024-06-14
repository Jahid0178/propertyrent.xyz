"use client";

import React from "react";
import PropertyListingFilterOptions from "./PropertyListingFilterOptions";

interface IPropertyListingTopbar {
  properties: any[];
}

const PropertyListingTopbar = ({ properties }: IPropertyListingTopbar) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div>
        Showing <span className="font-semibold">{properties.length}</span>{" "}
        properties
      </div>
      <div>
        <PropertyListingFilterOptions />
      </div>
    </div>
  );
};

export default PropertyListingTopbar;
