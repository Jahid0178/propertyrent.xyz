import React from "react";
import Link from "next/link";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import { Button } from "@/components/ui/button";
import { ITrendingProperty } from "@/typescript/interface";
import TredingPropertyCard from "@/components/Cards/TrendingPropertyCard";

const FeaturedPropertySection = async () => {
  const { data: trendingProperties } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/trendingProperties`
  );
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <SectionHeading
            title={`Featured ${trendingProperties.length > 1 ? "Properties" : "Property"}`}
            titleClassName="text-xl md:text-2xl"
          />
          <Button asChild variant="outline">
            <Link href="/properties?search=featured">See More</Link>
          </Button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProperties
              .slice(0, 8)
              .map((trendingProperty: ITrendingProperty) => (
                <TredingPropertyCard
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

export default FeaturedPropertySection;
