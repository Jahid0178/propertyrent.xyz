"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MdOutlineMoreHoriz } from "react-icons/md";

const PropertyListingActionButton = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MdOutlineMoreHoriz size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button size="icon" asChild className="w-full">
            <Link href={`/user/dashboard/my-property/edit/${propertyId}`}>
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button onClick={() => console.log("Selected mark as featured")}>
            Mark as featured
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button size="icon" variant="destructive" className="w-full">
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PropertyListingActionButton;
