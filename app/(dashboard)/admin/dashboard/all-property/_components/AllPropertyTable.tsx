import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const AllPropertyTable = async () => {
  const resonse = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing`
  );
  const { properties } = await resonse.json();
  return (
    <Table className="border">
      <TableCaption>A list of your all property.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Property Type</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Rent Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property: any) => (
          <TableRow key={property._id}>
            <TableCell>{property.puid}</TableCell>
            <TableCell>
              <Image
                src={property.images[0].url}
                alt={property.name}
                width={80}
                height={80}
              />
            </TableCell>
            <TableCell>{property.title}</TableCell>
            <TableCell>{property.author.fullName}</TableCell>
            <TableCell>{property.propertyType}</TableCell>
            <TableCell>{property.address.city}</TableCell>
            <TableCell>
              {property.price} / {property.currency}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllPropertyTable;
