import React from "react";
import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { ToastContainer } from "react-toastify";
// React toastify css
import "react-toastify/dist/ReactToastify.css";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ClientLayout;
