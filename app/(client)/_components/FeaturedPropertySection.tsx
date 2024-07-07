import React from "react";
import Link from "next/link";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import { Button } from "@/components/ui/button";
import { ITrendingProperty } from "@/typescript/interface";
import TredingPropertyCard from "@/components/Cards/TrendingPropertyCard";
import { getFeaturedProperties } from "@/lib/actions/property.action";

const FeaturedPropertySection = async () => {
  const featuredProperties = await getFeaturedProperties();
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <SectionHeading
            title={`Featured ${featuredProperties.length > 1 ? "Properties" : "Property"}`}
            titleClassName="text-xl md:text-2xl"
          />
          <Button asChild variant="outline">
            <Link href="/properties?search=featured">See More</Link>
          </Button>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProperties.slice(0, 8).map((featuredProperty: any) => (
              <TredingPropertyCard
                key={featuredProperty._id}
                propertyData={featuredProperty}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertySection;
