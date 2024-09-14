"use client";

import React from "react";
import Link from "next/link";
import authStore from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownMenuProps {
  id: string;
  label: string;
  href: string;
}

interface ProfileDropdownMenuProps {
  dropdownMenus: DropdownMenuProps[];
}

const ProfileDropdownMenu = ({ dropdownMenus }: ProfileDropdownMenuProps) => {
  const { user, logout } = authStore((state) => state);
  const userFullName = user?.fullName;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src={user?.avatar?.url || ""}
            alt={user?.fullName || ""}
          />
          <AvatarFallback>{user?.fullName?.slice(0, 1) || ""}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{`${userFullName} Account`}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {dropdownMenus?.map((dropdownMenu: DropdownMenuProps) => (
          <DropdownMenuItem key={dropdownMenu.id}>
            <Link href={`${dropdownMenu.href}`}>{dropdownMenu.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdownMenu;
