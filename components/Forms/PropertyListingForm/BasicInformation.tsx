import React from "react";
import moment from "moment";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildYears, listingTypes, propertyTypes } from "@/data/data";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";

interface BasicInformationProps {
  form: any;
  propertyCategory: string;
}

const BasicInformation = ({
  form,
  propertyCategory,
}: BasicInformationProps) => {
  return (
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
                      {propertyTypes?.map((propertyType) => (
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
                        <SelectItem key={buildYear.id} value={buildYear.value}>
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
                    placeholder="Select listing and property type title will be generated automatically"
                    {...field}
                    readOnly
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
                  placeholder="Enter Full Property Description"
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
  );
};

export default BasicInformation;
