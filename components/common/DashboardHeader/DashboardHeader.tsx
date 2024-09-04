"use client";

import React from "react";
import Logo from "../Logo/Logo";
import authStore from "@/store/authStore";
import DashboardMobileSidebar from "@/components/Sidebars/DashboardSidebar/DashboardMobileSidebar";
import ProfileDropdownMenu from "../ProfileDropdownMenu/ProfileDropdownMenu";
import { useRouter } from "next/navigation";
import { userDropdownMenus } from "@/data/data";

const DashboardHeader = () => {
  const router = useRouter();
  const { user, logout } = authStore((state) => state);
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <DashboardMobileSidebar />
              <Logo type="text" href="/" />
            </div>
            <div className="flex gap-4 items-center">
              <h5 className="hidden md:block text-lg font-medium">
                Hello, {user?.fullName}
              </h5>
              <ProfileDropdownMenu dropdownMenus={userDropdownMenus} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
