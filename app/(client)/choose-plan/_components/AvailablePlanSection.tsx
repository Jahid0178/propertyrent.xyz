import React from "react";
import PackageCard from "@/components/Cards/PackageCard";
import { IPackage } from "@/typescript/interface";

interface AvailablePlanSectionProps {
  creditPackages: IPackage[];
}

const AvailablePlanSection = ({
  creditPackages,
}: AvailablePlanSectionProps) => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {creditPackages.map((creditPackage: IPackage) => (
            <PackageCard
              key={creditPackage._id}
              creditPackage={creditPackage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailablePlanSection;
