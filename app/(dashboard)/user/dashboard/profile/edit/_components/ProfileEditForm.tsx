"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import authStore from "@/store/authStore";
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
import { Button } from "@/components/ui/button";
import {
  handleUpdateUser,
  handleUserProfileImage,
} from "@/lib/actions/user.action";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa6";

const ProfileEditForm = () => {
  const [avatar, setAvatar] = useState<null>(null);
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
    await toast.promise(handleUpdateUser(user?._id, data), {
      pending: "Updating user profile",
      success: {
        async render({ data }) {
          if (avatar) {
            const formData = new FormData();
            formData.append("avatar", avatar);
            await toast.promise(handleUserProfileImage(user?._id, formData), {
              pending: "Updating user avatar",
              success: {
                render({ data }) {
                  return data?.data?.message;
                },
              },
              error: "Error updating user profile",
            });
          }

          return data?.data?.message;
        },
      },
      error: "Error updating user profile",
    });
  };

  const handleAvatarChange = (event: any) => {
    const file = event.target.files[0];
    console.log(event);
    if (file) {
      setAvatar(file);
    }
  };

  const handleAvatarRemove = () => {
    setAvatar(null);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 border dark:border-gray-800 rounded-md p-4 bg-white dark:bg-gray-900 shadow-md"
        >
          <div className="w-40 h-40 mx-auto border">
            <label
              htmlFor="avatar"
              className="w-full h-full flex justify-center items-center"
            >
              {avatar ? (
                <div className="relative w-full h-full">
                  <Image
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                  <FaTrash
                    color="red"
                    onClick={handleAvatarRemove}
                    className="absolute top-2 right-2"
                  />
                </div>
              ) : (
                <div>
                  <p>Upload Avatar</p>
                </div>
              )}
            </label>
            <input
              id="avatar"
              type="file"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
              <FormItem className="bg-white dark:bg-gray-900">
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
