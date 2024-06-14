import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PropertyListingFilterOptions = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Filter By Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="hp">Highest Price</SelectItem>
        <SelectItem value="lp">Lowest Price</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PropertyListingFilterOptions;
