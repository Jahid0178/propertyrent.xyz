import React from "react";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PropertyCard from "@/components/Cards/PropertyCard";
import { ITrendingProperty } from "@/typescript/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TrendingPropertySection = async () => {
  const { data: trendingProperties } = await axios.get(
    "http://localhost:4000/trendingProperties"
  );
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <SectionHeading
            title="Trending Properties"
            titleClassName="text-xl md:text-2xl"
          />
          <Button asChild variant="outline">
            <Link href="/properties">See More</Link>
          </Button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProperties
              .slice(0, 8)
              .map((trendingProperty: ITrendingProperty) => (
                <PropertyCard
                  key={trendingProperty.id}
                  propertyData={trendingProperty}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPropertySection;
