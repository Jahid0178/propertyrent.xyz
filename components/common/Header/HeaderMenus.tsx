"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenus } from "@/data/data";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const HeaderMenus = () => {
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default HeaderMenus;
