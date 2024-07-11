import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import { Badge } from "../ui/badge";
import Link from "next/link";

const PropertyListingTable = ({ properties }: any) => {
  return (
    <Table className="border dark:border-gray-800">
      <TableCaption>
        A list of your {properties.length > 1 ? "properties" : "property"}.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Property ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property: any) => (
          <TableRow key={property._id}>
            <TableCell>
              <Image
                src={property?.images[0]?.url || "/images/placeholder.png"}
                alt={property.title}
                width={100}
                height={100}
                className="rounded-md"
              />
            </TableCell>
            <TableCell className="font-medium">{property._id}</TableCell>
            <TableCell>{property.title}</TableCell>
            <TableCell>
              {formatNumberWithCommas(property.price)} {property.currency}
            </TableCell>
            <TableCell>
              <Badge>Active</Badge>
            </TableCell>
            <TableCell className="text-right space-x-2">
              <Button size="icon" asChild>
                <Link href={`/user/dashboard/my-property/edit/${property._id}`}>
                  <FaRegEdit size={16} />
                </Link>
              </Button>
              <Button size="icon" variant="destructive">
                <FaRegTrashAlt size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
        {properties.length === 0 && (
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              No property found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default PropertyListingTable;
