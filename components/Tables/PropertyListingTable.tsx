import React from "react";
import Image from "next/image";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import moment from "moment";
import PropertyListingActionButton from "./PropertyListingActionButton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { PropertyProps } from "@/typescript/interface";

interface PropertyListingTableProps {
  properties: PropertyProps[];
}

const PropertyListingTable = ({ properties }: PropertyListingTableProps) => {
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
          <TableHead>Expired Date</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property: any) => {
          const formatExpiredDate = moment(property.expiresAt).format("ll");
          return (
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
                {property.expiresAt ? formatExpiredDate : "-"}
              </TableCell>
              <TableCell>
                {formatNumberWithCommas(property.price)} {property.currency}
              </TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <PropertyListingActionButton propertyId={property._id} />
              </TableCell>
            </TableRow>
          );
        })}
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
