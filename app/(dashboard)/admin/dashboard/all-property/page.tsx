import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import AllPropertyTable from "./_components/AllPropertyTable";

const AdminAllPropertyPage = async () => {
  return (
    <section>
      <div className="container">
        <SectionHeading
          title="All Properties"
          subTitle="Manage All Properties"
          subTitleClassName="mb-4"
        />
        <AllPropertyTable />
      </div>
    </section>
  );
};

export default AdminAllPropertyPage;
