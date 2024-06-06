import React from "react";
import Link from "next/link";
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
      </div>
    </footer>
  );
};

export default Footer;
