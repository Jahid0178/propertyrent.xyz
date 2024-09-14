import React from "react";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import UserManageTable from "./_components/UserManageTable";

const UserControlPage = () => {
  return (
    <section>
      <div className="container">
        <SectionHeading title="User Control" subTitle="Manage All Users" />
        <div className="mt-4">
          <UserManageTable />
        </div>
      </div>
    </section>
  );
};

export default UserControlPage;
