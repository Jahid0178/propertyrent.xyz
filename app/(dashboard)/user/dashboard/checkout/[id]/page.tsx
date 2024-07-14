import React from "react";
import { creditPackages } from "@/data/data";
import CheckoutPageSection from "./_components/CheckoutPageSection";
import { IPackage } from "@/typescript/interface";

interface CheckoutPageProps {
  params: { id: string };
}

const CheckoutPage = ({ params }: CheckoutPageProps) => {
  const { id } = params;

  const findPackage = creditPackages.find(
    (creditPackage: IPackage) => creditPackage._id === id
  );

  return <CheckoutPageSection creditPackage={findPackage} />;
};

export default CheckoutPage;
