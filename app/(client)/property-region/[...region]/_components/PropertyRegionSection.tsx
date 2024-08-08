import React from "react";
import LocationCarousel from "@/components/Carousel/LocationCarousel";
import PropertyCard from "@/components/Cards/PropertyCard";
import { handleGetPropertyByLocations } from "@/lib/actions/property.action";

interface PropertyRegionSectionProps {
  locations: any[];
  region: string;
  upazilla: string;
}

const PropertyRegionSection = async ({
  locations,
  region,
  upazilla,
}: PropertyRegionSectionProps) => {
  const properties = await handleGetPropertyByLocations(region, upazilla);

  return (
    <section>
      <div className="container">
        <LocationCarousel locations={locations} />
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {properties.map((property: any) => (
              <PropertyCard key={property._id} propertyData={property} />
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-center">No Property Found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyRegionSection;
