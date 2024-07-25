"use client";

import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import authStore from "@/store/authStore";
import { IPackage } from "@/typescript/interface";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { handlePayout } from "@/lib/actions/payout.action";
import { toast } from "react-toastify";

interface CheckoutFormProps {
  packageId: string | undefined;
}

const formSchema = z.object({
  userId: z.string().nonempty("User Id is required"),
  fullName: z.string().trim().min(3, "Full name must be at least 3 characters"),
  email: z.string().trim().email("Email is required"),
  phone: z
    .string()
    .trim()
    .min(11, "Phone number must be at least 11 characters"),
  address: z.string().trim().min(3, "Address must be at least 3 characters"),
  currency: z.string().min(1, "Currency is required"),
});

const CheckoutForm = ({ packageId }: CheckoutFormProps) => {
  const { user } = authStore((state) => state);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: user?._id || "",
      fullName: user?.fullName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: "",
      currency: "",
    },
  });

  const handleCheckoutForm = async (data: z.infer<typeof formSchema>) => {
    const mergedData = {
      ...data,
      packageId,
    };

    const response = await handlePayout(mergedData);
    if (response.status === 200) {
      toast.success(response.message);
      window.location.replace(response.url);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleCheckoutForm)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe123@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+880 123 456 789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123, House Name, Street Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BDT">BDT</SelectItem>
                    <SelectItem value="INR" disabled>
                      INR
                    </SelectItem>
                    <SelectItem value="USD" disabled>
                      USD
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Proceed to checkout</Button>
      </form>
    </Form>
  );
};

export default CheckoutForm;
