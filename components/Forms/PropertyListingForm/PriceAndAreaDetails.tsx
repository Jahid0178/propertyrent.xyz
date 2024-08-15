import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencyTypes, propertySizeUnits } from "@/data/data";

const PriceAndAreaDetails = ({ form }: any) => {
  return (
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
  );
};

export default PriceAndAreaDetails;
