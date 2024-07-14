import React from "react";
import OrderSummaryCard from "./OrderSummaryCard";
import CheckoutForm from "@/components/Forms/CheckoutForm";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import { IPackage } from "@/typescript/interface";

interface CheckoutPageSectionProps {
  creditPackage: IPackage | undefined;
}

const CheckoutPageSection = ({ creditPackage }: CheckoutPageSectionProps) => {
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="Checkout"
          subTitle="Fill up all the fields of the form"
        />
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-12 md:col-span-8">
            <CheckoutForm packageId={creditPackage?._id} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <OrderSummaryCard creditPackage={creditPackage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPageSection;
