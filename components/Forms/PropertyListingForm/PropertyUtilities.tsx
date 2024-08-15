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
import {
  electricityTypes,
  gasTypes,
  internetTypes,
  waterTypes,
} from "@/data/data";
import React from "react";

const PropertyUtilities = ({ form }: { form: any }) => {
  return (
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
                      <SelectItem key={waterType.id} value={waterType.value}>
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
  );
};

export default PropertyUtilities;
