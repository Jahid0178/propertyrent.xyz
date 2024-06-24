"use client";

import React, { useEffect } from "react";
import Logo from "../Logo/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import authStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import DashboardMobileSidebar from "@/components/Sidebars/DashboardSidebar/DashboardMobileSidebar";

const DashboardHeader = () => {
  const router = useRouter();
  const { user, logout, handleUserObserver } = authStore((state) => state);
  console.log("user info", user);

  useEffect(() => {
    if (!user) router.push("/");
    handleUserObserver();
  }, [user]);
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <DashboardMobileSidebar />
              <Logo type="text" href="/" />
            </div>
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage
                      src={user?.photoURL}
                      alt={user?.displayName || ""}
                    />
                    <AvatarFallback>
                      {user?.displayName.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user/dashboard/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
