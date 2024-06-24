import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <header>Dashboard Header</header>
      {children}
      <footer>Dashboard Footer</footer>
    </>
  );
};

export default DashboardLayout;
