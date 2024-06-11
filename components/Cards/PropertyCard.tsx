import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ITrendingProperty } from "@/typescript/interface";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface IPropertyCard {
  propertyData: ITrendingProperty;
}

const PropertyCard = ({ propertyData }: IPropertyCard) => {
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
          <p className="text-sm">Rent: {price} BDT</p>
          <p className="text-sm">Location: {location}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
