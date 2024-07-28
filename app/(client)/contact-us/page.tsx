import React from "react";
import { Metadata } from "next";
import ContactUsSection from "./_components/ContactUsSection";

export const metadata: Metadata = {
  title: "PropertyRent.xyz | Contact Us",
  description: "Contact us for any inquiries or questions. We're here to help!",
};

const ContactUsPage = () => {
  return <ContactUsSection />;
};

export default ContactUsPage;
