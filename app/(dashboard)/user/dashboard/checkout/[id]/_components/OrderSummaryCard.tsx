import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IPackage } from "@/typescript/interface";

interface OrderSummaryCardProps {
  creditPackage: IPackage | undefined;
}

const OrderSummaryCard = ({ creditPackage }: OrderSummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <h5 className="font-semibold text-lg">
          Name: {creditPackage?.packageTitle}
        </h5>
        <p className="text-sm">Credits: {creditPackage?.creditTitle}</p>
        <p className="text-sm">
          Price: {creditPackage?.price || 0} {creditPackage?.currency}
        </p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold">
          Total: {creditPackage?.price || 0} {creditPackage?.currency}
        </p>
      </CardFooter>
    </Card>
  );
};

export default OrderSummaryCard;
