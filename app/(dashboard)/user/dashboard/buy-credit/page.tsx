import React from "react";
import PackageCard from "@/components/Cards/PackageCard";
import { IPackage } from "@/typescript/interface";
import { handleGetAllPackages } from "@/lib/actions/package.action";

const BuyCreditPage = async () => {
  const { creditPackages } = await handleGetAllPackages();

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default BuyCreditPage;
