import React from "react";
import Map from "@/components/Map/Map";
import ContactUsForm from "./ContactUsForm";
import SectionHeading from "@/components/common/Heading/SectionHeading";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const ContactUsSection = () => {
  const coorindates = [23.847813660351978, 90.25809643928837];
  return (
    <section>
      <div className="container">
        <SectionHeading title="Contact Us" subTitle="Get in touch with us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <ContactUsForm />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.5887587570849!2d90.25733287118825!3d23.84782935679608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd214db68a9%3A0x2937463eab42af7c!2z4KaF4Kao4KeN4KanIOCmuOCmguCmuOCnjeCmpeCmviDgpq7gpr7gprDgp43gppXgp4fgpp8!5e0!3m2!1sen!2sbd!4v1720822291026!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-2 bg-gray-50 rounded-md p-4">
            <div>
              <FaLocationArrow size={30} color="#F99B16" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Address</h4>
              <p className="text-sm">
                Andha Market 3rd Floor - Savar, Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 rounded-md p-4">
            <div>
              <MdEmail size={30} color="#F99B16" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Email</h4>
              <Link
                href="mailto:propertyrent.xyz@gmail.com"
                className="text-sm"
              >
                Propertyrent.xyz@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 rounded-md p-4">
            <div>
              <FaPhoneAlt size={30} color="#F99B16" />
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Phone</h4>
              <Link href="tel:+8801791705799" className="text-sm">
                +88 01791-705799
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
