import React from "react";
import { Metadata } from "next";
import PropertyCard from "@/components/Cards/PropertyCard";
import PropertyListingTopbar from "@/components/PropertyListingTopbar/PropertyListingTopbar";
import PaginationWrapper from "@/components/common/Pagination/PaginationWrapper";
import { getAllPropertyListings } from "@/lib/actions/property.action";

export const metadata: Metadata = {
  title: "PropertyRent.xyz | All Property",
  description:
    "Explore a diverse selection of rental properties on PropertyRent.xyz. Browse all available listings, including apartments, houses, and commercial spaces in prime locations. Easily find the perfect property that meets your needs with detailed descriptions, photos, and up-to-date availability. Start your search now!",
};

type PropertiesPageProps = {
  searchParams: any;
};

const PropertiesPage = async ({ searchParams }: PropertiesPageProps) => {
  const params = searchParams;
  const { properties, meta } = await getAllPropertyListings(params);

  return (
    <section>
      <div className="container">
        <div className="mb-6">
          <PropertyListingTopbar properties={properties} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property: any) => (
            <PropertyCard key={property._id} propertyData={property} />
          ))}
        </div>
        <div className="mt-8">
          <PaginationWrapper
            page={meta.page}
            limit={meta.limit}
            total={meta.total}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
