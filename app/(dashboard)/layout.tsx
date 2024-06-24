import React from "react";
import DashboardSidebar from "@/components/Sidebars/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "@/components/common/DashboardHeader/DashboardHeader";
import DashboardFooter from "@/components/common/DashboardFooter/DashboardFooter";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <DashboardSidebar />
      <>
        <DashboardHeader />
        <main className="p-4 sm:ml-64 mt-16">{children}</main>
        <DashboardFooter />
      </>
    </>
  );
};

export default DashboardLayout;
