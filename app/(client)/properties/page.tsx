import React from "react";
import PropertyCard from "@/components/Cards/PropertyCard";
import PropertyListingTopbar from "@/components/PropertyListingTopbar/PropertyListingTopbar";
import { getAllProperties } from "@/lib/actions/property.action";

type PropertiesPageProps = {
  searchParams: any;
};

const PropertiesPage = async ({ searchParams }: PropertiesPageProps) => {
  const params = searchParams;
  const properties = await getAllProperties(params.search);
  return (
    <section>
      <div className="container">
        <div className="mb-6">
          <PropertyListingTopbar properties={properties} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property: any) => (
            <PropertyCard key={property.id} propertyData={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
