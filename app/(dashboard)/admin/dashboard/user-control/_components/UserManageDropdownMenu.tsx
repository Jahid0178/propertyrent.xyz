"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { IoMdMore } from "react-icons/io";

const UserManageDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${buttonVariants({ variant: "outline", size: "icon" })} !mt-0`}
      >
        <IoMdMore size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="w-full"
          onClick={() => console.log("clicked the button delete")}
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem
          className="w-full"
          onClick={() => console.log("clicked the button banned")}
        >
          Banned
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserManageDropdownMenu;
