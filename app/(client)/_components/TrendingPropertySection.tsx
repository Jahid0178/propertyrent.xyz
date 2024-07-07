import React from "react";
import axios from "axios";
import Link from "next/link";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import TredingPropertyCard from "@/components/Cards/TrendingPropertyCard";
import { ITrendingProperty, PropertyProps } from "@/typescript/interface";
import { Button } from "@/components/ui/button";
import { getTrendingProperties } from "@/lib/actions/property.action";

const TrendingPropertySection = async () => {
  const trendingProperties = await getTrendingProperties();

  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <SectionHeading
            title="Trending Properties"
            titleClassName="text-xl md:text-2xl"
          />
          <Button asChild variant="outline">
            <Link href="/properties?search=trending">See More</Link>
          </Button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingProperties
              .slice(0, 8)
              .map((trendingProperty: PropertyProps) => (
                <TredingPropertyCard
                  key={trendingProperty?._id}
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
