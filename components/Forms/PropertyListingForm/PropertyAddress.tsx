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
import { locations } from "@/data/data";
import React from "react";

const PropertyAddress = ({ form }: { form: any }) => {
  return (
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
  );
};

export default PropertyAddress;
