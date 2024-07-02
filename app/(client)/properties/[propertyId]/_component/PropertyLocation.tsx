"use client";

import React from "react";
import Link from "next/link";
import authStore from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { USER_MINIMUM_CREDIT } from "@/constant/constant";

const PropertyLocation = ({
  location: { street, city, zipCode, country },
}: any) => {
  const { user } = authStore((state) => state);

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-lg font-semibold">Property Address</h3>
      {user?.credit > USER_MINIMUM_CREDIT ? (
        <div className="flex justify-between items-center">
          <address>
            Street: {street},<br /> City: {city},<br /> Zip Code: {zipCode},
            <br />
            Country: {country}
          </address>
          <Button>Show on map</Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <p>You need to buy credit to see location details</p>
          <Link href="#" className="text-orange-500 hover:underline">
            Buy Credit
          </Link>
        </div>
      )}
    </div>
  );
};

export default PropertyLocation;
