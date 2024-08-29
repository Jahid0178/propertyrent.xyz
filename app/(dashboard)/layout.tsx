import React from "react";
import DashboardSidebar from "@/components/Sidebars/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "@/components/common/DashboardHeader/DashboardHeader";
import DashboardFooter from "@/components/common/DashboardFooter/DashboardFooter";
import isAuthenticated from "@/utils/isAuthenticated";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  await isAuthenticated();
  return (
    <>
      <DashboardSidebar />
      <>
        <DashboardHeader />
        <main className="sm:ml-64 mt-16">{children}</main>
        <DashboardFooter />
      </>
    </>
  );
};

export default DashboardLayout;
