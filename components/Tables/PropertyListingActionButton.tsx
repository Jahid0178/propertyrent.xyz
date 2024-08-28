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
import { MdMoreVert } from "react-icons/md";

const PropertyListingActionButton = ({
  propertyId,
}: {
  propertyId: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MdMoreVert size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={`/user/dashboard/my-property/edit/${propertyId}`}>
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          role="button"
          onClick={() => console.log("Mark as featured")}
        >
          Mark as featured
        </DropdownMenuItem>
        <DropdownMenuItem role="button" onClick={() => console.log("Delete")}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PropertyListingActionButton;
