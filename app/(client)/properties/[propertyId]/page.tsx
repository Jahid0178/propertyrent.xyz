import React from "react";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Link from "next/link";
import PropertyImageGallery from "@/components/Sliders/PropertyImageGallery";
import { getPropertyById } from "@/lib/actions/property.action";
import { Badge } from "@/components/ui/badge";
import PropertyDetailsSection from "./_component/PropertyDetailsSection";
import PropertyActionButtons from "./_component/PropertyActionButton";

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
 *     images: {
 *        url: string;
 *  }[];
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
    images: {
      url: string;
    }[];
  };
}> {
  const property = await getPropertyById(propertyId);
  const title = `${property?.title} - PropertyRent.xyz` || "PropertyRent.xyz";
  const description = property?.description || "";
  const image = property?.images[0]?.url || "";
  const url = `https://propertyrent.xyz/properties/${propertyId}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
        },
      ],
    },
  };
}

const PropertyDetailsPage = async ({
  params: { propertyId },
}: PropertyDetailsPageProps) => {
  const propertyData = await getPropertyById(propertyId);

  const {
    _id,
    puid,
    title,
    price,
    currency,
    listingType,
    propertyType,
    images,
    views,
  } = propertyData;

  return (
    <section>
      <div className="container">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-md sm:text-lg md:text-2xl font-semibold">
              {title}
            </h2>
            <p className="text-md sm:text-lg md:text-2xl font-semibold">
              Price: {formatNumberWithCommas(price as number)} {currency}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Badge>{listingType}</Badge>
              <Link href={`#`} className="hover:text-orange-500">
                {propertyType}
              </Link>
              <p className="text-nowrap">Property ID: {puid}</p>
              <p className="text-nowrap">Views: {views}</p>
            </div>
            <PropertyActionButtons propertyId={_id} />
          </div>
        </div>
        <div className="mt-6">
          {images && <PropertyImageGallery gallery={images} />}
        </div>
        <PropertyDetailsSection propertyData={propertyData} />
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
