"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PiWarningCircleBold } from "react-icons/pi";
import authStore from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { handleUpdateUser } from "@/lib/actions/user.action";
import { toast } from "react-toastify";

const ProfileEditForm = () => {
  const { user } = authStore((state) => state);
  const form = useForm({
    defaultValues: {
      fullName: user?.fullName,
      username: user?.username,
      email: user?.email,
      phone: user?.phone,
      address: {
        street: user?.address?.street,
        city: user?.address?.city,
        state: user?.address?.state,
        country: user?.address?.country,
        zipCode: user?.address?.zipCode,
      },
    },
  });

  const handleSubmit = async (data: any) => {
    const response = await handleUpdateUser(user?._id, data);
    if (response?.status === 200) {
      toast.success(response?.data.message);
    }
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 border rounded-md p-4 bg-white shadow-md"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel className="inline-flex gap-2 items-center">
                  Username{" "}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <PiWarningCircleBold
                          size={16}
                          className="text-gray-500"
                        />
                      </TooltipTrigger>
                      <TooltipContent>Username not changable</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="johndoe123" disabled />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="johndoe@example.com" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel className="inline-flex gap-2 items-center">
                  Phone{" "}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <PiWarningCircleBold
                          size={16}
                          className="text-gray-500"
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        Phone number not changable
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="123-456-7890" disabled />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.street"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="123 Main St" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.city"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Anytown" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.state"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="DHK" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.country"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="BD" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address.zipCode"
            render={({ field }) => (
              <FormItem className="bg-white">
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="12345" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Update</Button>
        </form>
      </Form>
    </div>
  );
};

export default ProfileEditForm;
