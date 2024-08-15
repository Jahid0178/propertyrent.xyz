import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PropertyListingForm from "@/components/Forms/PropertyListingForm/PropertyListingForm";
import { getPropertyById } from "@/lib/actions/property.action";

interface PageProps {
  params: {
    id: string;
  };
  searchParams: any;
}

const PropertyEditPage = async ({ params }: PageProps) => {
  const { id } = params;
  const property = await getPropertyById(id);

  return (
    <section>
      <div className="container">
        <div className="w-full max-w-screen-md mx-auto">
          <SectionHeading
            title={`Edit ${property?.title} Property`}
            subTitle="Please edit the form below to update the property"
            subTitleClassName="mb-8"
          />
          <PropertyListingForm property={property} formType="edit" />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
