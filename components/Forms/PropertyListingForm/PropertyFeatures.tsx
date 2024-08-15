import React from "react";
import { Input } from "@/components/ui/input";
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

interface PropertyFeaturesProps {
  form: any;
  propertyCategory?: string;
}

const PropertyFeatures = ({
  form,
  propertyCategory,
}: PropertyFeaturesProps) => {
  return (
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
        <FormField
          control={form.control}
          name="propertyDetails.propertyFeatures.numberOfFloors"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Floor No</FormLabel>
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
      {["bachelor", "sublet"].includes(propertyCategory ?? "") && (
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="propertyDetails.propertyFeatures.gender"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
          control={form.control}
          name="propertyDetails.propertyFeatures.numberOfFloors"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Floor No</FormLabel>
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
        /> */}
        </div>
      )}
    </div>
  );
};

export default PropertyFeatures;
