import React from "react";
import CheckoutPageSection from "./_components/CheckoutPageSection";
import { handleGetSinglePackage } from "@/lib/actions/package.action";

interface CheckoutPageProps {
  params: { id: string };
}

const CheckoutPage = async ({ params }: CheckoutPageProps) => {
  const { id } = params;

  const { creditPackage } = await handleGetSinglePackage(id);

  return <CheckoutPageSection creditPackage={creditPackage} />;
};

export default CheckoutPage;
