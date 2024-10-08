import React from "react";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
