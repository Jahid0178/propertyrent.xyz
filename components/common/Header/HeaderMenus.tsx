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
import { navigationMenus } from "@/data/data";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import UserAuthenticationForm from "@/components/Forms/UserAuthenticationForm";
import authStore from "@/store/authStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeaderMenus = () => {
  const { user, logout } = authStore((state) => state);
  return (
    <NavigationMenu className="hidden md:block">
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
            <Link href={`${user ? "/user/dashboard/add-property" : "/"}`}>
              <FaHouse className="mr-2 h-4 w-4" /> Add Property
            </Link>
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={user?.avatar?.url || ""}
                    alt={user?.fullName || ""}
                  />
                  <AvatarFallback>
                    {user?.fullName?.slice(0, 1) || ""}
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
                <DropdownMenuItem onClick={() => logout()}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <UserAuthenticationForm />
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenus;
