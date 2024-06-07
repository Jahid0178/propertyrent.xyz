"use client";

import React, { useEffect, useState } from "react";
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
import { getAllLocations } from "../../lib/actions/location.action";
import { getAllPropertiesType } from "../../lib/actions/property.action";

const FormSchema = z.object({
  propertyType: z.string({
    required_error: "Please select an property type",
  }),
  location: z.string({
    required_error: "Please select an location",
  }),
  budget: z.string({
    required_error: "Please select an budget range",
  }),
});

const PropertySearch = () => {
  const [locations, setLocations] = useState([]);
  const [propertiesType, setPropertiesType] = useState([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const propertyFormData = {
      propertyType: data.propertyType as string,
      location: data.location as string,
      budget: data.budget as string,
    };
    console.log(propertyFormData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locations, propertiesType] = await Promise.all([
          getAllLocations(),
          getAllPropertiesType(),
        ]);
        setLocations(locations);
        setPropertiesType(propertiesType);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Form {...form}>
      <form
        className="property-search-form-wrapper"
        onSubmit={form.handleSubmit(onSubmit)}
      >
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
                    {propertiesType.map(({ id, name, value }) => (
                      <SelectItem key={id} value={value}>
                        {name}
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
            name="location"
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
                    {locations.map(({ id, name, value }) => (
                      <SelectItem key={id} value={value}>
                        {name}
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
            name="budget"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="100000-500000">
                      1,00,000 - 50,000
                    </SelectItem>
                    <SelectItem value="50000-25000">50,000 - 25,000</SelectItem>
                    <SelectItem value="25000-500">25,000 - 500</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default PropertySearch;
