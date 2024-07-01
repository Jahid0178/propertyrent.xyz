"use client";

import React from "react";
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
  propertySizeUnits,
  propertyTypes,
  waterTypes,
} from "@/data/data";
import { createPropertyListing } from "@/lib/actions/property.action";
import { PropertyProps } from "@/typescript/interface";
import { toast } from "react-toastify";

const FormSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must be at least 3 characters" })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(20, { message: "Description must be at least 20 characters" })
    .trim(),
  propertyType: z.string().nonempty("Property Type is required"),
  listingType: z.string().nonempty("Listing Type is required"),
  currency: z.string().min(1, { message: "Currency is required" }),
  address: z.object({
    street: z
      .string({
        required_error: "Street is required",
        invalid_type_error: "Street must be a string",
      })
      .min(3, { message: "Street must be at least 3 characters" }),
    city: z
      .string({
        required_error: "City is required",
        invalid_type_error: "City must be a string",
      })
      .min(3, { message: "City must be at least 3 characters" }),
    country: z
      .string({
        required_error: "Country is required",
        invalid_type_error: "Country must be a string",
      })
      .min(3, { message: "Country must be at least 3 characters" }),
    zipCode: z
      .string({
        required_error: "Zip Code is required",
        invalid_type_error: "Zip Code must be a string",
      })
      .min(3, { message: "Zip Code must be at least 3 characters" }),
  }),
  price: z
    .string({
      required_error: "Price is required",
      invalid_type_error: "Price must be a string",
    })
    .min(3, { message: "Price must be at least 3 characters" }),
  propertyDetails: z.object({
    propertyFeatures: z.object({
      propertySize: z
        .string({
          required_error: "Property Size is required",
          invalid_type_error: "Property Size must be a string",
        })
        .min(3, { message: "Property Size must be at least 3 characters" }),
      propertySizeUnit: z
        .string({
          required_error: "Property Size Unit is required",
          invalid_type_error: "Property Size must be a string",
        })
        .nonempty("Property Size Unit is required"),
      numberOfBedrooms: z
        .string({
          required_error: "Number of Bedrooms is required",
          invalid_type_error: "Number of Bedrooms must be a string",
        })
        .nonempty("Number of Bedrooms is required"),
      numberOfBathrooms: z
        .string({
          required_error: "Number of Bathrooms is required",
          invalid_type_error: "Number of Bathrooms must be a string",
        })
        .nonempty("Number of Bathrooms is required"),
      numberOfDiningrooms: z
        .string({
          required_error: "Number of Diningrooms is required",
          invalid_type_error: "Number of Diningrooms must be a string",
        })
        .nonempty("Number of Diningrooms is required"),
      numberOfGarage: z
        .string({
          required_error: "Number of Garage is required",
          invalid_type_error: "Number of Garage must be a string",
        })
        .nonempty("Number of Garage is required"),
      numberOfBalconies: z
        .string({
          required_error: "Number of Balconies is required",
          invalid_type_error: "Number of Balconies must be a string",
        })
        .nonempty("Number of Balconies is required"),
      renovation: z
        .string({
          required_error: "Renovation is required",
          invalid_type_error: "Renovation must be a string",
        })
        .nonempty("Renovation is required"),
      yearBuilt: z
        .string({
          required_error: "Year Built is required",
          invalid_type_error: "Year Built must be a string",
        })
        .nonempty("Year Built is required"),
    }),
    propertyUtilities: z.object({
      gas: z
        .string({
          required_error: "Gas is required",
          invalid_type_error: "Gas must be a string",
        })
        .nonempty("Gas is required"),
      electricity: z
        .string({
          required_error: "Electricity is required",
          invalid_type_error: "Electricity must be a string",
        })
        .nonempty("Electricity is required"),
      internet: z
        .string({
          required_error: "Internet is required",
          invalid_type_error: "Internet must be a string",
        })
        .nonempty("Internet is required"),
      water: z
        .string({
          required_error: "Water is required",
          invalid_type_error: "Water must be a string",
        })
        .nonempty("Water is required"),
    }),
    outdoorFeatures: z.object({
      garden: z
        .string({
          required_error: "Garden is required",
          invalid_type_error: "Garden must be a string",
        })
        .nonempty("Garden is required"),
      pool: z
        .string({
          required_error: "Pool is required",
          invalid_type_error: "Pool must be a string",
        })
        .nonempty("Pool is required"),
      playground: z
        .string({
          required_error: "Playground is required",
          invalid_type_error: "Playground must be a string",
        })
        .nonempty("Playground is required"),
      fencing: z
        .string({
          required_error: "Fencing is required",
          invalid_type_error: "Fencing must be a string",
        })
        .nonempty("Fencing is required"),
    }),
    nearby: z.object({
      school: z
        .string({
          required_error: "Schools is required",
          invalid_type_error: "Schools must be a string",
        })
        .min(1, { message: "Schools is required" }),
      hospital: z
        .string({
          required_error: "Hospitals is required",
          invalid_type_error: "Hospitals must be a string",
        })
        .min(1, { message: "Hospitals is required" }),
      shoppingCenter: z
        .string({
          required_error: "Shopping Centers is required",
          invalid_type_error: "Shopping Centers must be a string",
        })
        .min(1, { message: "Shopping Centers is required" }),
      publicTransport: z
        .string({
          required_error: "Public Transport is required",
          invalid_type_error: "Public Transport must be a string",
        })
        .min(1, { message: "Public Transport is required" }),
    }),
  }),
});

const PropertyListingForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      propertyType: "",
      listingType: "",
      currency: "",
      address: {
        street: "",
        city: "",
        country: "",
        zipCode: "",
      },
      price: "",
      propertyDetails: {
        propertyFeatures: {
          propertySize: "",
          propertySizeUnit: "",
          numberOfBedrooms: "",
          numberOfBathrooms: "",
          numberOfDiningrooms: "",
          numberOfGarage: "",
          numberOfBalconies: "",
          renovation: "",
          yearBuilt: "",
        },
        propertyUtilities: {
          gas: "",
          electricity: "",
          internet: "",
          water: "",
        },
        outdoorFeatures: {
          garden: "",
          pool: "",
          playground: "",
          fencing: "",
        },
        nearby: {
          school: "",
          hospital: "",
          shoppingCenter: "",
          publicTransport: "",
        },
      },
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const updatedData = {
      ...data,
      listingType: data.listingType as "Rent" | "Sale" | "Buy" | "Lease",
    };
    const response = await createPropertyListing(updatedData);
    console.log(response);
    if (response?.status === 201) {
      toast.success(response.data.message);
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-gray-100 rounded-md p-4">
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
                      <Select onValueChange={field.onChange}>
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
                      <Select onValueChange={field.onChange}>
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
                      <Select onValueChange={field.onChange}>
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
          </div>
        </div>
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
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
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
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
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Property Utilities</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.propertyUtilities.gas"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Gas</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
          <h3 className="text-lg font-medium">Outdoor Features</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyDetails.outdoorFeatures.pool"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Pool</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
                    <Select onValueChange={field.onChange}>
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
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
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
        <div className="bg-gray-100 rounded-md p-4 space-y-4">
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
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Enter your city"
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
            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white"
                      placeholder="Enter your country"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" size="lg">
          Add Property
        </Button>
      </form>
    </Form>
  );
};

export default PropertyListingForm;
