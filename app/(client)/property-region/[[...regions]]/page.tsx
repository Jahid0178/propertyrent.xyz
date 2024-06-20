import React from "react";
import axios from "axios";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PopularPropertyCard from "@/components/Cards/PopularPropertyCard";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { getPropertyByRegion } from "@/lib/actions/property.action";
import { PropertyProps } from "@/typescript/interface";
import PropertyCard from "@/components/Cards/PropertyCard";

type PropertyRegionPageProps = {
  params: { regions?: string[] };
};

const PropertyRegionPage = async ({ params }: PropertyRegionPageProps) => {
  const { regions } = params;
  const regionName = regions ? regions[0] : "Your Region";
  const { data: regionLocations } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/popularLocation`
  );

  const firstRegion = (regions && regions[0]) || "";

  const propertyByRegions = await getPropertyByRegion(firstRegion);
  return (
    <section>
      <div className="container">
        <SectionHeading
          title={`Find Your Perfect Home in ${capitalizeFirstLetter(regionName)} - Top Rental Properties!`}
          subTitle={`Discover Your Ideal Rental in ${capitalizeFirstLetter(regionName)} Today!`}
        />
        <div className="mt-6">
          {regions ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {propertyByRegions?.map((propertyByRegion: PropertyProps) => (
                <PropertyCard
                  key={propertyByRegion.id}
                  propertyData={propertyByRegion}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionLocations.map((regionLocation: any) => (
                <PopularPropertyCard popularProperty={regionLocation} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyRegionPage;
