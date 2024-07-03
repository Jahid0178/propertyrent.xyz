import { IPackage } from "@/typescript/interface";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { IoMdCheckmark } from "react-icons/io";

type PackageCardProps = {
  creditPackage: IPackage;
};

const PackageCard = ({ creditPackage }: PackageCardProps) => {
  const { packageTitle, creditTitle, price, features, description } =
    creditPackage;
  return (
    <Card className="text-center bg-white">
      <CardHeader>
        <CardTitle className="font-medium">{packageTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <h3 className="text-3xl font-semibold">{creditTitle}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feature, ind) => (
            <li key={ind} className="flex justify-center items-center gap-2">
              <IoMdCheckmark size={16} color="#0CB803" /> {feature}
            </li>
          ))}
        </ul>
        <p>
          <strong>Price:</strong> {price}
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild size="lg">
          <Link href="#">Buy Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
