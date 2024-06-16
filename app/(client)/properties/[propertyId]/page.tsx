import React from "react";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Link from "next/link";
import PropertyImageGallery from "@/components/Sliders/PropertyImageGallery";
import { getPropertyById } from "@/lib/actions/property.action";
import { Badge } from "@/components/ui/badge";
import PropertyDetailsSection from "./_component/PropertyDetailsSection";

interface PropertyDetailsPageProps {
  params: { propertyId: string };
}

/**
 * Generates metadata for a property details page based on the provided property ID.
 *
 * @param {PropertyDetailsPageProps} props - The props object containing the property ID.
 * @param {string} props.params.propertyId - The ID of the property.
 * @return {Promise<{
 *   title: string;
 *   description: string;
 *   openGraph: {
 *     title: string;
 *     description: string;
 *     url: string;
 *     images: string[];
 *   };
 * }>} - A promise that resolves to an object containing the generated metadata.
 */
export async function generateMetadata({
  params: { propertyId },
}: PropertyDetailsPageProps): Promise<{
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: string[];
  };
}> {
  const property = await getPropertyById(propertyId);
  const title = `${property?.name} - PropertyRent.xyz` || "PropertyRent.xyz";
  const description = property?.description || "";
  const image = property?.image?.url || "";
  const url = `https://propertyrent.xyz/properties/${propertyId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
    },
  };
}

const PropertyDetailsPage = async ({
  params: { propertyId },
}: PropertyDetailsPageProps) => {
  const propertyData = await getPropertyById(propertyId);

  const { name, price, currency, listingType, type, image } = propertyData;

  return (
    <section>
      <div className="container">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>
              Price: {formatNumberWithCommas(price as number)} {currency}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Badge>{listingType}</Badge>
              <Link
                href={`/property-category/${type.toLowerCase()}`}
                className="hover:text-orange-500"
              >
                {type}
              </Link>
              <p>Property ID: {propertyId}</p>
              <p>Views: 6352</p>
            </div>
            <div>2</div>
          </div>
        </div>
        <div className="mt-6">
          {image?.gallery && <PropertyImageGallery gallery={image?.gallery} />}
        </div>
        <PropertyDetailsSection propertyData={propertyData} />
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
