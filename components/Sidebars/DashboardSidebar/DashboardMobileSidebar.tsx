"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dashboardSidebarLinks } from "@/data/data";
import Logo from "@/components/common/Logo/Logo";
import Link from "next/link";
import authStore from "@/store/authStore";
import { UserRole } from "@/typescript/types";

const DashboardMobileSidebar = () => {
  const { user } = authStore((state) => state);

  const userRole = user?.role as UserRole;

  console.log("dashboardSidebarLinks", dashboardSidebarLinks);
  return (
    <Sheet>
      <SheetTrigger className="inline-block lg:hidden">
        <FaBarsStaggered size={16} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="mb-4">
          <SheetTitle>
            <Logo type="text" href="/" />
          </SheetTitle>
        </SheetHeader>
        <ul className="space-y-4">
          {dashboardSidebarLinks[userRole]?.map((link) => (
            <li key={link.id}>
              <Link
                href={link.query ? `${link.href}?id=${user?._id}` : link.href}
                className="p-2 flex gap-2 items-center w-full"
              >
                {link.icon({ size: 20 })} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileSidebar;
