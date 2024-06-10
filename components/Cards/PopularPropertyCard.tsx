import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "../ui/card";
import { IPopularLocation } from "@/typescript/interface";

interface PopularPropertyCardProps {
  popularProperty: IPopularLocation;
}

const PopularPropertyCard = ({ popularProperty }: PopularPropertyCardProps) => {
  return (
    <Link href={`/property/division/${popularProperty.value}`}>
      <Card className="rounded-lg overflow-hidden relative group">
        <CardHeader className="p-0">
          <Image
            src={popularProperty.image}
            alt={popularProperty.name}
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        </CardHeader>
        <div className="absolute bottom-0 left-0 right-0 text-white p-4">
          <h3 className="text-2xl">{popularProperty.name}</h3>
          <p>{popularProperty.totalProperties} Properties</p>
        </div>
      </Card>
    </Link>
  );
};

export default PopularPropertyCard;
