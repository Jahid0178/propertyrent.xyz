import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ITrendingProperty } from "@/typescript/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FaLocationArrow } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";

interface IPropertyCard {
  propertyData: ITrendingProperty;
}

const TredingPropertyCard = ({ propertyData }: IPropertyCard) => {
  const { id, name, location, price, image } = propertyData;
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
          <div className="flex justify-between items-center">
            <p className="text-sm flex gap-1 items-center">
              <FaMoneyBill1 size={16} /> {price} BDT
            </p>
            <p className="text-sm flex gap-1 items-center">
              <FaLocationArrow size={16} /> {location}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TredingPropertyCard;
