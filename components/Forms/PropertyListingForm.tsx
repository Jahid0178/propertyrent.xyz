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
} from "../ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
} from "../ui/tooltip";
import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "@/constant/constant";
import { propertyListingFormValidation } from "@/validation/validation";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

const FormSchema = z.object(propertyListingFormValidation);

interface PropertyListingFormProps {
  property?: any;
  formType?: "create" | "edit";
}

const PropertyListingForm = ({
  property,
  formType = "create",
}: PropertyListingFormProps) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: property?.title || "",
      description: property?.description || "",
      propertyType: property?.propertyType || "",
      listingType: property?.listingType || "",
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
        outdoorFeatures: {
          garden: property?.propertyDetails?.outdoorFeatures?.garden || "",
          pool: property?.propertyDetails?.outdoorFeatures?.pool || "",
          playground:
            property?.propertyDetails?.outdoorFeatures?.playground || "",
          fencing: property?.propertyDetails?.outdoorFeatures?.fencing || "",
        },
        nearby: {
          school: property?.propertyDetails?.nearby?.school || "",
          hospital: property?.propertyDetails?.nearby?.hospital || "",
          shoppingCenter:
            property?.propertyDetails?.nearby?.shoppingCenter || "",
          publicTransport:
            property?.propertyDetails?.nearby?.publicTransport || "",
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
      const formData = new FormData();

      if (data.images && data.images.length > 0) {
        for (let i = 0; i < data.images.length; i++) {
          formData.append("images", data.images[i]);
        }
      }

      formData.append("data", JSON.stringify(data));

      const response =
        formType === "create"
          ? createPropertyListing(formData)
          : updatePropertyListing(formData, property?._id);
      await toast.promise(response, {
        pending:
          formType === "create"
            ? "Creating property listing"
            : "Updating property listing",
        success:
          formType === "create"
            ? "Property listing created successfully"
            : "Property listing updated successfully",
        error:
          formType === "create"
            ? "Error creating property listing"
            : "Error updating property listing",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onCoordinatesChange = (lat: number, lng: number) => {
    form.setValue("coordinates", { lat, lng });
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4">
          <h3 className="text-lg font-medium">Basic Information</h3>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="listingType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Listing Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Listing Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {listingTypes.map((listingType) => (
                            <SelectItem
                              key={listingType.id}
                              value={listingType.value}
                              disabled={listingType?.disabled}
                            >
                              {listingType.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {propertyTypes.map((propertyType) => (
                            <SelectItem
                              key={propertyType.id}
                              value={propertyType.value}
                            >
                              {propertyType.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="propertyDetails.propertyFeatures.yearBuilt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Build Year</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select Build Year" />
                        </SelectTrigger>
                        <SelectContent>
                          {buildYears.map((buildYear) => (
                            <SelectItem
                              key={buildYear.id}
                              value={buildYear.value}
                            >
                              {buildYear.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyDetails.propertyFeatures.renovation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Renovation Year</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white"
                        placeholder="Enter Renovation Year"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Title</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="bg-white"
                        placeholder="Enter Property Title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="availableFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Available From</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              moment(field.value).format("DD MMM YYYY")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-white resize-none"
                      placeholder="Enter Property Description"
                      {...field}
                      rows={8}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="bg-white"
                      placeholder="Enter Property Image"
                      // {...field}
                      multiple
                      onChange={(e) => field.onChange(e.target.files)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Price & Area Details</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter Property Price"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Currency</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {currencyTypes.map((currencyType) => (
                          <SelectItem
                            key={currencyType.id}
                            value={currencyType.value}
                            disabled={currencyType?.disabled}
                          >
                            {currencyType.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.propertySize"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Property Size</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="bg-white resize-none"
                      placeholder="Enter Property Size"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.propertySizeUnit"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Property Size Unit</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {propertySizeUnits.map((propertySizeUnit) => (
                          <SelectItem
                            key={propertySizeUnit.id}
                            value={propertySizeUnit.value}
                          >
                            {propertySizeUnit.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Property Features</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.numberOfBedrooms"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Bed Room</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter number of bedrooms"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.numberOfBathrooms"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Bath Room</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter number of bathrooms"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.numberOfDiningrooms"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Dining Room</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter number of dining rooms"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.numberOfBalconies"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Belcony</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter number of belconies"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyFeatures.numberOfGarage"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Garage</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="bg-white resize-none"
                      placeholder="Enter number of garage"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Property Utilities</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyUtilities.gas"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Gas</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Gas Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {gasTypes.map((gasType) => (
                          <SelectItem key={gasType.id} value={gasType.value}>
                            {gasType.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.propertyUtilities.internet"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Internet</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Internet Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {internetTypes.map((internetType) => (
                          <SelectItem
                            key={internetType.id}
                            value={internetType.value}
                          >
                            {internetType.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyUtilities.electricity"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Electricity</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Electricity Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {electricityTypes.map((electricityType) => (
                          <SelectItem
                            key={electricityType.id}
                            value={electricityType.value}
                          >
                            {electricityType.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.propertyUtilities.water"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Water</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select Water Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {waterTypes.map((waterType) => (
                          <SelectItem
                            key={waterType.id}
                            value={waterType.value}
                          >
                            {waterType.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Outdoor Features</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.outdoorFeatures.pool"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Pool</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Does Property Have Pool?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.outdoorFeatures.garden"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Garden</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Does Property Have Garden?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.outdoorFeatures.playground"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Playground</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Does Property Have Playground?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.outdoorFeatures.fencing"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Fencing</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Does Property Have Fencing?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Near By</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.nearby.school"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>School</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-white"
                      placeholder="Type area distance"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.nearby.hospital"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Hospital</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-white"
                      placeholder="Type area distance"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.nearby.shoppingCenter"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Shopping Center</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-white"
                      placeholder="Type area distance"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertyDetails.nearby.publicTransport"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Public Transport</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="bg-white"
                      placeholder="Type area distance"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Property Address</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Enter your street"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>

                      <SelectContent>
                        {locations.map((location, ind) => (
                          <SelectItem key={ind} value={location.district}>
                            {location.district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="address.upazilla"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Upazilla</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select your upazilla" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations
                          .filter(
                            (location) =>
                              location.district === form.watch("address.city")
                          )[0]
                          ?.upazillas.map((upazilla, ind) => (
                            <SelectItem key={ind} value={upazilla}>
                              {upazilla}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.zipCode"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Enter your zip code"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-white">
                        <SelectValue
                          placeholder="Select your country"
                          defaultValue="Bangladesh"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
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
        <Button type="submit" size="lg">
          {formType === "create" ? "Add Property" : "Update Property"}
        </Button>
      </form>
    </Form>
  );
};

export default PropertyListingForm;
