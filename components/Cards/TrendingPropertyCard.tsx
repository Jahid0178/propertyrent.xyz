import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PropertyProps } from "@/typescript/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";

interface IPropertyCard {
  propertyData: PropertyProps;
}

const TredingPropertyCard = ({ propertyData }: IPropertyCard) => {
  const { _id, title, price, address, images } = propertyData;

  const imageURL = images?.[0]?.url || "/images/placeholder.png";

  return (
    <Link href={`/properties/${_id}`}>
      <Card className="overflow-hidden">
        <CardHeader className="px-0 pt-0 pb-6">
          <Image
            src={imageURL}
            alt={title}
            width={800}
            height={800}
            className="!m-0 h-52"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-3">{title}</CardTitle>
          <div className="flex justify-between items-center">
            <p className="text-sm flex gap-1 items-center">
              <FaMoneyBill1 size={16} /> {formatNumberWithCommas(price)} BDT
            </p>
            <p className="text-sm flex gap-1 items-center">
              <FaLocationArrow size={16} /> {address?.city}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TredingPropertyCard;
