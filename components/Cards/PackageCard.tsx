"use client";

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
import authStore from "@/store/authStore";

type PackageCardProps = {
  creditPackage: IPackage;
};

const PackageCard = ({ creditPackage }: PackageCardProps) => {
  const { user } = authStore((state) => state);
  const {
    _id,
    packageTitle,
    packageType,
    price,
    features,
    description,
    currency,
  } = creditPackage;

  const isUserLoggedIn = Boolean(user);
  const checkoutUrl = isUserLoggedIn
    ? `/user/dashboard/checkout/${_id}`
    : "/login";
  return (
    <Card className="text-center bg-white">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{packageTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p>{description}</p>
        <ul>
          {features.map((feature, ind) => (
            <li key={ind} className="flex justify-center items-center gap-2">
              <IoMdCheckmark size={16} color="#0CB803" /> {feature}
            </li>
          ))}
        </ul>
        <p>
          <strong>Price:</strong> {price} {currency}
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button asChild size="lg">
          <Link href={checkoutUrl}>Buy Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
