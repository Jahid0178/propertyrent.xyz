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

interface IPropertyCard {
  propertyData: PropertyProps;
}

const PropertyCard = ({ propertyData }: IPropertyCard) => {
  const {
    id,
    name,
    location,
    price,
    image,
    bathrooms,
    bedrooms,
    currency,
    squareFeet,
  } = propertyData;
  return (
    <Link href={`/properties/${id}`}>
      <Card className="overflow-hidden">
        <CardHeader className="px-0 pt-0 pb-6">
          <Image
            src={"/images/placeholder.png"}
            alt={name}
            width={800}
            height={800}
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-3">{name}</CardTitle>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm flex gap-1 items-center">
                <RxSize size={18} /> {squareFeet} Sq.ft
              </p>
              <p className="text-sm flex gap-1 items-center">
                <IoBedOutline size={18} /> {bedrooms} Beds
              </p>
              <p className="text-sm flex gap-1 items-center">
                <TbBath size={18} /> {bathrooms} Baths
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm flex gap-1 items-center">
                <FaMoneyBill1 size={18} /> {formatNumberWithCommas(price)}{" "}
                {currency}
              </p>
              <p className="text-sm flex gap-1 items-center">
                <FaLocationArrow size={18} /> {location}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
