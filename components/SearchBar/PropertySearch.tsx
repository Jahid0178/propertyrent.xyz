"use client";

import React from "react";
import AdvancedSearchForm from "../Forms/AdvancedSearchForm";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BsSearch } from "react-icons/bs";
import { locations, propertyTypes } from "@/data/data";
import { Input } from "../ui/input";

const FormSchema = z.object({
  propertyType: z.string({
    required_error: "Please select an property type",
  }),
  city: z.string({
    required_error: "Please select an location",
  }),
  minPrice: z.string({
    required_error: "Please enter your min price range",
  }),
  maxPrice: z.string({
    required_error: "Please enter your max price range",
  }),
});

const PropertySearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "12";

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const propertyFormData = {
      propertyType: data.propertyType as string,
      city: data.city as string,
      minPrice: data.minPrice as string,
      maxPrice: data.maxPrice as string,
      page,
      limit,
    };

    router.push(`/properties?${new URLSearchParams(propertyFormData)}`);
  };

  return (
    <div className="property-search-form-wrapper text-end">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Property Type" />
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
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(({ district }, ind) => (
                        <SelectItem key={ind} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minPrice"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    type="text"
                    placeholder="Enter Your Min Price"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maxPrice"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Input
                    type="text"
                    placeholder="Enter Your Max Price"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <BsSearch className="mr-2 h-5 w-5" />
              Search Property
            </Button>
          </div>
        </form>
      </Form>
      <AdvancedSearchForm
        locations={locations}
        propertiesType={propertyTypes}
      />
    </div>
  );
};

export default PropertySearch;
