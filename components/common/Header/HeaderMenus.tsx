"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenus, userDropdownMenus } from "@/data/data";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import authStore from "@/store/authStore";
import ProfileDropdownMenu from "../ProfileDropdownMenu/ProfileDropdownMenu";
import { UserRole } from "@/typescript/types";

const HeaderMenus = () => {
  const { user } = authStore((state) => state);

  // Get user role
  const userRole = user?.role as UserRole;

  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {navigationMenus.map((navigationMenu) => (
          <NavigationMenuItem key={navigationMenu.id}>
            {navigationMenu.children ? (
              <>
                <NavigationMenuTrigger>
                  {navigationMenu.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[400px] p-3 md:w-[500px] lg:w-[200px] space-y-3">
                    {navigationMenu.children.map((navSubMenu) => (
                      <li key={navSubMenu.id}>
                        <Link href={navSubMenu.href} className="w-full block">
                          {navSubMenu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={navigationMenu?.href ?? ""}
                legacyBehavior
                passHref
                className="w-full"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {navigationMenu.name}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="!ml-5 flex gap-4">
          <Button asChild>
            <Link href={`${user ? "/user/dashboard/add-property" : "/login"}`}>
              <FaHouse className="mr-2 h-4 w-4" /> Add Property
            </Link>
          </Button>
          {user ? (
            <ProfileDropdownMenu dropdownMenus={userDropdownMenus[userRole]} />
          ) : (
            <Button asChild variant="outline">
              <Link href="/login">
                <FaUser />
              </Link>
            </Button>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenus;
