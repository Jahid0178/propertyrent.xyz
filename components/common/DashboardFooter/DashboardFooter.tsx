import Link from "next/link";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="p-4 sm:ml-64">
      <p className="text-sm text-gray-500 text-center">
        Copyright © {new Date().getFullYear()} - All right reserved by
        <Link href="/" className="ml-1 hover:underline">
          PropertyRent.xyz
        </Link>
      </p>
    </footer>
  );
};

export default DashboardFooter;
