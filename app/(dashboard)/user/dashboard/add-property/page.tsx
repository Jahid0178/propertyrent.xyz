import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import PropertyListingForm from "@/components/Forms/PropertyListingForm";

const AddPropertyPage = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full max-w-screen-md mx-auto">
          <SectionHeading
            title="Add Property"
            subTitle="Please fill up the form below to add a new property"
            subTitleClassName="mb-8"
          />
          <PropertyListingForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
