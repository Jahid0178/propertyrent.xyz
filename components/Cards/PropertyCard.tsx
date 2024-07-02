import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PropertyProps } from "@/typescript/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { RxSize } from "react-icons/rx";
import { TbBath } from "react-icons/tb";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { Badge } from "../ui/badge";

interface IPropertyCard {
  propertyData: PropertyProps;
}

const PropertyCard = ({ propertyData }: { propertyData: PropertyProps }) => {
  const {
    _id,
    images,
    listingType,
    title,
    price,
    currency,
    propertyDetails: {
      propertyFeatures: {
        propertySize,
        propertySizeUnit,
        numberOfBedrooms,
        numberOfBathrooms,
      },
    },
    address: { city },
  } = propertyData;

  const imageURL = images[0]?.url ? images[0]?.url : "/images/placeholder.png";
  return (
    <Link href={`/properties/${_id}`}>
      <Card className="overflow-hidden">
        <CardHeader className="px-0 pt-0 pb-6 relative">
          <Badge className="absolute top-3 left-3">{listingType}</Badge>
          <Image
            src={imageURL}
            alt={title}
            width={800}
            height={800}
            className="!m-0 h-52"
            loading="lazy"
            blurDataURL={imageURL}
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-3">{title}</CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm flex gap-1 items-center">
                <RxSize size={18} /> {propertySize} {propertySizeUnit}
              </p>
              <p className="text-sm flex gap-1 items-center">
                <IoBedOutline size={18} /> {numberOfBedrooms} Beds
              </p>
              <p className="text-sm flex gap-1 items-center">
                <TbBath size={18} /> {numberOfBathrooms} Baths
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm flex gap-1 items-center">
                <FaMoneyBill1 size={18} /> {formatNumberWithCommas(price)}{" "}
                {currency}
              </p>
              <p className="text-sm flex gap-1 items-center">
                <FaLocationArrow size={18} /> {city}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
