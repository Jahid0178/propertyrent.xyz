import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import FeaturedPropertySlider from "@/components/Sliders/FeaturedPropertySlider";
import { Button } from "@/components/ui/button";
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
          <FeaturedPropertySlider featuredProperties={featuredProperties} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertySection;
