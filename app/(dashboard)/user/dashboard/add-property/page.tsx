import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import IconWithTitleCard from "@/components/Cards/IconWithTitleCard";
import { Badge } from "@/components/ui/badge";
import { propertyCategories } from "@/data/data";

const AddPropertyPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <SectionHeading
            title="Add Property"
            subTitle="Please fill up the form below to add a new property"
            subTitleClassName="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {propertyCategories.map((propertyCategory) => (
              <Link
                key={propertyCategory.id}
                href={propertyCategory.href}
                className={`relative ${propertyCategory.disabled ? "cursor-not-allowed" : ""}`}
              >
                <IconWithTitleCard
                  icon={propertyCategory.icon}
                  title={propertyCategory.label}
                />
                {propertyCategory.disabled && (
                  <Badge
                    className="absolute top-2 left-2"
                    variant={"destructive"}
                  >
                    Coming Soon
                  </Badge>
                )}
              </Link>
            ))}
          </div>
          {/* <PropertyListingForm /> */}
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
