"use client";

import React, { useEffect } from "react";
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
  uploadPropertyListingImage,
} from "@/lib/actions/property.action";
import { PiWarningCircleBold } from "react-icons/pi";
import { toast } from "react-hot-toast";
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
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter";
import { PropertyProps } from "@/typescript/interface";

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

  const form = useForm<PropertyProps>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      _id: property?._id || "",
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
          numberOfFloors:
            property?.propertyDetails?.propertyFeatures?.numberOfFloors || "",
          gender: property?.propertyDetails?.propertyFeatures?.gender || "",
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
      mapLocation: {
        coordinates: property?.coordinates,
      },
    },
  });

  const getTitle = () => {
    if (property?.title) return property?.title;

    const propertyType = form.watch("propertyType");
    const listingType = form.watch("listingType");

    if (!propertyType || !listingType) return "";

    const modifiedPropertyCategory = capitalizeFirstLetter(propertyCategory!);

    return `${modifiedPropertyCategory} ${propertyType} For ${listingType}`;
  };

  useEffect(() => {
    form.setValue("title", getTitle());
  }, [property, form.watch("propertyType"), form.watch("listingType")]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response =
        formType === "create"
          ? // @ts-ignore
            createPropertyListing(data)
          : updatePropertyListing(data, property?._id);

      const res = await toast.promise(response, {
        loading: "Creating property...",
        success: (res) => `${res?.data?.message}`,
        error: "Error creating property",
      });

      const propertyId = res?.data?.property?._id;

      const uploadImagesResponse = await toast.promise(
        uploadPropertyListingImage(propertyId, data.images),
        {
          loading: "Image Uploading...",
          success: (res) => `${res?.data?.message}`,
          error: "Error uploading image",
        }
      );

      if (uploadImagesResponse?.status === 200) {
        toast.success(uploadImagesResponse?.data?.message);
      }
    } catch (error) {
      console.error("Error on property submit form:", error);
    }
  };

  const onCoordinatesChange = (lat: number, lng: number) => {
    form.setValue("mapLocation.coordinates", [lat, lng]);
  };

  const userCurrentPlanStatus = !user?.currentPlan?.status;

  return (
    <Form {...form}>
      {/* @ts-ignore */}
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        {userCurrentPlanStatus && (
          <p className="text-sm text-red-500 text-center bg-red-500/10 p-4 rounded-md">
            You need to upgrade your plan to add property
          </p>
        )}
        <BasicInformation form={form} propertyCategory={propertyCategory!} />
        <PriceAndAreaDetails form={form} />
        {["family", "bachelor", "sublet"].includes(propertyCategory ?? "") && (
          <>
            <PropertyFeatures form={form} propertyCategory={propertyCategory} />
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
        <Button type="submit" size="lg" disabled={userCurrentPlanStatus}>
          {formType === "create" ? "Add Property" : "Update Property"}
        </Button>
      </form>
    </Form>
  );
};

export default PropertyListingForm;
