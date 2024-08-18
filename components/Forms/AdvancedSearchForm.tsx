"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { buildYears, propertyTypes } from "@/data/data";
import { useRouter, useSearchParams } from "next/navigation";

interface AdvancedSearchFormProps {
  locations: any[];
  propertiesType: any[];
}

const AdvancedFormSchema = z.object({
  city: z.string({ message: "City is required" }),
  listingType: z.string({ message: "Listing Type is required" }),
  propertyType: z.string({ message: "Property type is required" }),
  yearBuild: z.string({ message: "Year build is required" }),
  propertySize: z.string({ message: "Property size is required" }),
  numberOfBedrooms: z.string({ message: "Number of bedrooms is required" }),
  numberOfBathrooms: z.string({ message: "Number of bathrooms is required" }),
  minPrice: z.string({ message: "Minimum price is required" }),
  maxPrice: z.string({ message: "Maximum price is required" }),
});

const AdvancedSearchForm = ({
  locations,
  propertiesType,
}: AdvancedSearchFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "12";
  const form = useForm<z.infer<typeof AdvancedFormSchema>>({
    resolver: zodResolver(AdvancedFormSchema),
  });

  const onSubmit = (data: z.infer<typeof AdvancedFormSchema>) => {
    const modifiedData = {
      ...data,
      page,
      limit,
    };
    const advancedUrlSearchParams = new URLSearchParams(modifiedData);
    router.push(`/properties?${advancedUrlSearchParams}`);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" className="w-full">
          <HiAdjustmentsHorizontal className="mr-2 h-5 w-5" /> Advanced Search
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] max-h-[750px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Advanced Option</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location, ind) => {
                          const { district } = location;
                          return (
                            <SelectItem key={ind} value={district}>
                              {district}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <DialogHeader className="mb-2">
                <DialogTitle>More Filter</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FormField
                    control={form.control}
                    name="listingType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Listing Type
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select listing type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Rent">Rent</SelectItem>
                            <SelectItem value="Sale" disabled>
                              Sale
                            </SelectItem>
                            <SelectItem value="Buy" disabled>
                              Buy
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="propertyType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Property Type
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            {propertyTypes.map(({ id, label, value }) => (
                              <SelectItem key={id} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="yearBuild"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">Year Build</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select build year" />
                          </SelectTrigger>
                          <SelectContent>
                            {buildYears.map(({ id, label, value }) => (
                              <SelectItem key={id} value={value}>
                                {label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="propertySize"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Property Size
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select property size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1200">1200sqf</SelectItem>
                            <SelectItem value="1500">1500sqf</SelectItem>
                            <SelectItem value="2400">2400sqf</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="numberOfBedrooms"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Number Of Bed Room
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of bed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="numberOfBathrooms"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Number Of Bath Room
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select number of bath" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <DialogHeader className="mb-2">
                <DialogTitle>Price Range</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FormField
                    control={form.control}
                    name="minPrice"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">Min (Price)</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select min price" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000">5,000</SelectItem>
                            <SelectItem value="10000">10,000</SelectItem>
                            <SelectItem value="20000">20,000</SelectItem>
                            <SelectItem value="30000">30,000</SelectItem>
                            <SelectItem value="40000">40,000</SelectItem>
                            <SelectItem value="50000">50,000</SelectItem>
                            <SelectItem value="60000">60,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="maxPrice"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">Max (Price)</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select max price" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000">5,000</SelectItem>
                            <SelectItem value="10000">10,000</SelectItem>
                            <SelectItem value="20000">20,000</SelectItem>
                            <SelectItem value="30000">30,000</SelectItem>
                            <SelectItem value="40000">40,000</SelectItem>
                            <SelectItem value="50000">50,000</SelectItem>
                            <SelectItem value="60000">60,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Apply Filter</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedSearchForm;
