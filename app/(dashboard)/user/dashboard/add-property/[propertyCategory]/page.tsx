import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import PropertyListingForm from "@/components/Forms/PropertyListingForm/PropertyListingForm";

interface AddPropertyByCategoryPageProps {
  params: {
    propertyCategory: string;
  };
}

const AddPropertyByCategoryPage = ({
  params,
}: AddPropertyByCategoryPageProps) => {
  const { propertyCategory } = params;
  const capitalizePropertyCategoryTitle = capitalizeFirstLetter(
    propertyCategory.split("-").join(" ")
  );
  return (
    <section>
      <div className="container">
        <SectionHeading
          title={capitalizePropertyCategoryTitle}
          subTitle="Please fill up the form to add property"
          subTitleClassName="mb-8"
        />

        <PropertyListingForm
          formType="create"
          propertyCategory={propertyCategory}
        />
      </div>
    </section>
  );
};

export default AddPropertyByCategoryPage;
