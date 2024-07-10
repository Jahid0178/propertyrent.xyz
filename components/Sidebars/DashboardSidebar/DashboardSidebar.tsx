"use client";

import React from "react";
import Link from "next/link";
import authStore from "@/store/authStore";
import { usePathname } from "next/navigation";
import { dashboardSidebarLinks } from "@/data/data";

const DashboardSidebar = () => {
  const { user } = authStore((state) => state);
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {dashboardSidebarLinks.map((link) => (
            <li
              key={link.id}
              className={`${pathname === link.href ? "bg-orange-500 text-white rounded-sm" : "hover:bg-orange-50 dark:hover:bg-gray-700"}`}
            >
              <Link
                href={
                  link.id === 3 ? `${link.href}?id=${user?._id}` : link.href
                }
                className="flex gap-2 items-center p-2"
              >
                {link.icon({ size: 20 })} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
