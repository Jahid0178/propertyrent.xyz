"use client";

import React from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { FaStar, FaPrint } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { handleSavedProperty } from "@/lib/actions/property.action";
import authStore from "@/store/authStore";

type PropertyActionButtonsProps = {
  propertyId: string;
};

const PropertyActionButtons: React.FC<PropertyActionButtonsProps> = ({
  propertyId,
}) => {
  const { user } = authStore((state) => state);
  const handleSave = async () => {
    const savedResponse = await handleSavedProperty(propertyId, user?._id);
    if (savedResponse?.status === 200) {
      toast.success(savedResponse?.message);
    } else {
      toast.warning(savedResponse?.message);
    }
  };

  const handleShare = () => {
    // Logic to share the property
    console.log("Property shared!");
  };

  const handlePrint = () => {
    // Logic to print the property details
    window.print();
  };

  return (
    <div className="flex space-x-4">
      <Button
        onClick={handleSave}
        className="flex items-center gap-2 p-2"
        variant="outline"
        disabled={!user}
      >
        <FaStar />
        Save
      </Button>
      <Button
        onClick={handleShare}
        className="flex items-center gap-2 p-2"
        variant="outline"
      >
        <FaShareFromSquare />
        Share
      </Button>
      <Button
        onClick={handlePrint}
        className="flex items-center gap-2 p-2"
        variant="outline"
      >
        <FaPrint />
        Print
      </Button>
    </div>
  );
};

export default PropertyActionButtons;
