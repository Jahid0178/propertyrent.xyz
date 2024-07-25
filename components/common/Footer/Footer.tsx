import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/data";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container">
        <div className="flex justify-between items-center gap-3 flex-col lg:flex-row">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} <Link href="/">PropertyRent.xyz</Link>
            . All rights reserved.
          </p>
          <ul className="flex flex-col sm:flex-row gap-4">
            {footerLinks.map((footerLink) => (
              <li key={footerLink.id} className="text-center">
                <Link
                  href={footerLink.href}
                  className="text-sm text-gray-500 hover:underline"
                >
                  {footerLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <Image
            src={
              "https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-03.png"
            }
            alt="payment_methods"
            width={1600}
            height={100}
            className="hidden md:block"
          />
          <Image
            src={
              "https://securepay.sslcommerz.com/public/image/SSLCommerz-Pay-With-logo-All-Size-02.png"
            }
            alt="payment_methods"
            width={1600}
            height={100}
            className="block md:hidden"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
