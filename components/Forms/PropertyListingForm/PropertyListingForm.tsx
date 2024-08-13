"use client";

import React from "react";
import moment from "moment";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import {
  buildYears,
  currencyTypes,
  electricityTypes,
  gasTypes,
  internetTypes,
  listingTypes,
  locations,
  propertySizeUnits,
  propertyTypes,
  waterTypes,
} from "@/data/data";
import {
  createPropertyListing,
  updatePropertyListing,
} from "@/lib/actions/property.action";
import { PiWarningCircleBold } from "react-icons/pi";
import { toast } from "react-toastify";
import ListingMap from "@/app/(dashboard)/user/dashboard/add-property/_components/ListingMap";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import {
  DEFAULT_MAP_LAT,
  DEFAULT_MAP_LNG,
  USER_MINIMUM_CREDIT,
} from "@/constant/constant";
import { propertyListingFormValidation } from "@/validation/validation";
import authStore from "@/store/authStore";

import BasicInformation from "./BasicInformation";
import PriceAndAreaDetails from "./PriceAndAreaDetails";
import PropertyFeatures from "./PropertyFeatures";
import PropertyUtilities from "./PropertyUtilities";
import PropertyAddress from "./PropertyAddress";

const FormSchema = z.object(propertyListingFormValidation);

interface PropertyListingFormProps {
  property?: any;
  formType?: "create" | "edit";
  propertyCategory?: string;
}

const PropertyListingForm = ({
  property,
  formType = "create",
  propertyCategory,
}: PropertyListingFormProps) => {
  const { user } = authStore((state) => state);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: property?.title || "",
      description: property?.description || "",
      propertyType: property?.propertyType || "",
      listingType: property?.listingType || "",
      category: property?.category || propertyCategory || "",
      currency: property?.currency || "",
      images: property?.images || [],
      availableFrom: property?.availableFrom || "",
      address: {
        street: property?.address?.street || "",
        city: property?.address?.city || "",
        upazilla: property?.address?.upazilla || "",
        country: property?.address?.country || "",
        zipCode: property?.address?.zipCode || "",
      },
      price: property?.price || "",
      propertyDetails: {
        propertyFeatures: {
          propertySize:
            property?.propertyDetails?.propertyFeatures?.propertySize || "",
          propertySizeUnit:
            property?.propertyDetails?.propertyFeatures?.propertySizeUnit || "",
          numberOfBedrooms:
            property?.propertyDetails?.propertyFeatures?.numberOfBedrooms || "",
          numberOfBathrooms:
            property?.propertyDetails?.propertyFeatures?.numberOfBathrooms ||
            "",
          numberOfDiningrooms:
            property?.propertyDetails?.propertyFeatures?.numberOfDiningrooms ||
            "",
          numberOfGarage:
            property?.propertyDetails?.propertyFeatures?.numberOfGarage || "",
          numberOfBalconies:
            property?.propertyDetails?.propertyFeatures?.numberOfBalconies ||
            "",
          renovation:
            property?.propertyDetails?.propertyFeatures?.renovation || "",
          yearBuilt:
            property?.propertyDetails?.propertyFeatures?.yearBuilt || "",
        },
        propertyUtilities: {
          gas: property?.propertyDetails?.propertyUtilities?.gas || "",
          electricity:
            property?.propertyDetails?.propertyUtilities?.electricity || "",
          internet:
            property?.propertyDetails?.propertyUtilities?.internet || "",
          water: property?.propertyDetails?.propertyUtilities?.water || "",
        },
      },
      coordinates: {
        lat: property?.coordinates?.lat || DEFAULT_MAP_LAT,
        lng: property?.coordinates?.lng || DEFAULT_MAP_LNG,
      },
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      console.log("data", data);
      // const formData = new FormData();

      // if (data.images && data.images.length > 0) {
      //   for (let i = 0; i < data.images.length; i++) {
      //     formData.append("images", data.images[i]);
      //   }
      // }

      // formData.append("data", JSON.stringify(data));

      // const response =
      //   formType === "create"
      //     ? createPropertyListing(formData)
      //     : updatePropertyListing(formData, property?._id);
      // await toast.promise(response, {
      //   pending:
      //     formType === "create"
      //       ? "Creating property listing"
      //       : "Updating property listing",
      //   success:
      //     formType === "create"
      //       ? "Property listing created successfully"
      //       : "Property listing updated successfully",
      //   error:
      //     formType === "create"
      //       ? "Error creating property listing"
      //       : "Error updating property listing",
      // });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onCoordinatesChange = (lat: number, lng: number) => {
    form.setValue("coordinates", { lat, lng });
  };

  console.log("property category", propertyCategory);

  const isButtonDisabled = user?.credit < USER_MINIMUM_CREDIT;

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <BasicInformation form={form} />
        <PriceAndAreaDetails form={form} />
        {propertyCategory?.toLowerCase() === "family" && (
          <>
            <PropertyFeatures form={form} />
            <PropertyUtilities form={form} />
          </>
        )}
        <PropertyAddress form={form} />
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium flex items-center gap-2">
            Maps{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <PiWarningCircleBold size={16} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Adjust marker on the map to set your property location</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          <ListingMap onCoordinatesChange={onCoordinatesChange} />
        </div>
        <Button type="submit" size="lg" disabled={isButtonDisabled}>
          {formType === "create" ? "Add Property" : "Update Property"}
        </Button>

        {isButtonDisabled && (
          <p className="text-sm text-red-500 text-center">
            Please purchase credit to add property
          </p>
        )}
      </form>
    </Form>
  );
};

export default PropertyListingForm;
