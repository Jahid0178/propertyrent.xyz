import Header from "@/components/common/Header/Header";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default ClientLayout;
