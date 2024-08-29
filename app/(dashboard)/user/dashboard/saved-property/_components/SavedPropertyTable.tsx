"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegTrashAlt, FaLink } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import authStore from "@/store/authStore";
import {
  handleDeleteSavedProperty,
  handleGetSavedPropertyByUserId,
} from "@/lib/actions/property.action";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { toast } from "react-hot-toast";

const SavedPropertyTable = () => {
  const [savedProperties, setSavedProperties] = useState([]);
  const { user } = authStore((state) => state);

  useEffect(() => {
    const getSavedPropertyByUserId = async () => {
      const savedProperties = await handleGetSavedPropertyByUserId(user?._id);
      setSavedProperties(savedProperties);
    };
    getSavedPropertyByUserId();
  }, [savedProperties]);

  const handleDelete = async (savedPropertyId: string) => {
    try {
      const response = await handleDeleteSavedProperty(savedPropertyId);
      if (response.status === 200) {
        toast.success(response.message);
      }
    } catch (error) {
      console.error("error from handle delete", error);
    }
  };

  return (
    <Table className="border dark:border-gray-800">
      <TableCaption>A list of your saved properties</TableCaption>
      <TableHeader className="border-b">
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Property ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Property Type</TableHead>
          <TableHead>Listing Type</TableHead>
          <TableHead>Saved at</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {savedProperties.map((savedProperty, ind) => {
          const {
            _id,
            createdAt,
            propertyId: {
              title,
              images,
              price,
              propertyType,
              listingType,
              _id: propertyId,
            },
          } = savedProperty;
          const formattedPrice = formatNumberWithCommas(price);
          const formattedTime = moment(createdAt).format("LL");
          return (
            <TableRow key={ind}>
              <TableCell className="font-medium">
                <Image
                  // @ts-ignore
                  src={images?.[0]?.url || "/images/placeholder.png"}
                  alt={title}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell>{_id}</TableCell>
              <TableCell>{title}</TableCell>
              <TableCell>{formattedPrice}</TableCell>
              <TableCell>{propertyType}</TableCell>
              <TableCell>{listingType}</TableCell>
              <TableCell>{formattedTime}</TableCell>
              <TableCell className="text-right space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/properties/${propertyId}`}>
                    <FaLink />
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(_id)}
                >
                  <FaRegTrashAlt />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
        {savedProperties.length === 0 && (
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              No saved property found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SavedPropertyTable;
