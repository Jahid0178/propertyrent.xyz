"use client";

import React from "react";
import Link from "next/link";
import authStore from "@/store/authStore";
import { Button } from "@/components/ui/button";

type PropertyLocationProps = {
  location: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
};

const PropertyLocation = ({
  location: { street, city, zipCode, country },
}: PropertyLocationProps) => {
  const { user } = authStore((state) => state);

  const hasActivePlan = user?.currentPlan?.status;

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-lg font-semibold">Property Address</h3>
      <div className="flex justify-between items-center">
        {hasActivePlan ? (
          <>
            <address>
              Street: {street},<br /> City: {city},<br /> Zip Code: {zipCode},
              <br />
              Country: {country}
            </address>
          </>
        ) : (
          <div className="flex gap-2">
            <p>You need to buy plan to see location details</p>
            <Link
              href="/choose-plan"
              className="text-orange-500 hover:underline"
            >
              Buy Plan
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyLocation;
