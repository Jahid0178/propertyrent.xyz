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
import { Form, FormField, FormItem } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AdvancedSearchFormProps {
  locations: any[];
  propertiesType: any[];
}

const AdvancedFormSchema = z.object({
  location: z.string(),
  selectFor: z.string(),
  propertyType: z.string(),
  yearBuild: z.string(),
  condition: z.string(),
  propertySize: z.string(),
  numberOfRoom: z.string(),
  numberOfBath: z.string(),
  minPrice: z.string(),
  maxPrice: z.string(),
});

const AdvancedSearchForm = ({
  locations,
  propertiesType,
}: AdvancedSearchFormProps) => {
  const form = useForm<z.infer<typeof AdvancedFormSchema>>({
    resolver: zodResolver(AdvancedFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log("advanced_form_data", data);
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
                    name="selectFor"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">Select For</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rent">Rent</SelectItem>
                            <SelectItem value="sale">Sale</SelectItem>
                            <SelectItem value="buy">Buy</SelectItem>
                          </SelectContent>
                        </Select>
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
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {propertiesType.map(({ id, name, value }) => (
                              <SelectItem key={id} value={value}>
                                {name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="2021">2021</SelectItem>
                            <SelectItem value="2022">2022</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">Condition</Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="used">Used</SelectItem>
                            <SelectItem value="new">New</SelectItem>
                          </SelectContent>
                        </Select>
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
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1200sqf">1200sqf</SelectItem>
                            <SelectItem value="1500sqf">1500sqf</SelectItem>
                            <SelectItem value="2400sqf">2400sqf</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="numberOfRoom"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Number Of Room
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="numberOfBath"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <Label className="mb-2 inline-block">
                          Number Of Bath
                        </Label>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                          </SelectContent>
                        </Select>
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
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">10,000</SelectItem>
                            <SelectItem value="2">20,000</SelectItem>
                            <SelectItem value="3">30,000</SelectItem>
                            <SelectItem value="4">40,000</SelectItem>
                          </SelectContent>
                        </Select>
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
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">10,000</SelectItem>
                            <SelectItem value="2">20,000</SelectItem>
                            <SelectItem value="3">30,000</SelectItem>
                            <SelectItem value="4">40,000</SelectItem>
                          </SelectContent>
                        </Select>
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
