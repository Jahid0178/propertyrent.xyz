"use client";

import React, { useEffect } from "react";
import { z } from "zod";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FaUser } from "react-icons/fa";
import { handleLoginUser, handleRegisterUser } from "@/lib/actions/user.action";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";

import authStore from "@/store/authStore";

// login form validation schema
const loginFormSchema = z.object({
  phone: z.string().trim().min(3, "Phone number is required"),
  password: z.string().trim().min(1, "Password is required"),
});
// register form validation schema
const registerFormSchema = z.object({
  name: z.string().trim().min(3, "Full name is required"),
  phone: z.string().trim().min(3, "Phone number is required"),
  email: z.string().trim().email("Email is required"),
  password: z.string().trim().min(1, "Password is required"),
});

const UserAuthenticationForm = () => {
  const { user, setUser } = authStore((state: any) => state);
  // login form
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  // register form
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  // onsubmit handler for form
  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    const response = await handleLoginUser(data);
    if (response.status === 200) {
      toast.success(response.data.message);
      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", response.data.access_token);
      }
      setUser(response.data.user);
    }
    // loginForm.reset();
  };

  const handleRegisterOnSubmit = async (
    data: z.infer<typeof registerFormSchema>
  ) => {
    const response = await handleRegisterUser(data);
    if (response.statusText === "OK") {
      toast.success(response.data.message);

      console.log("user_auth_register_form_data", response.data);
    }
    registerForm.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <FaUser />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="login">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={loginForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Login</Button>
              </form>
            </Form>
            <hr className="my-5 block" />
            <div>
              <Button className="w-full" variant="secondary">
                <FaGoogle className="mr-2 h-4 w-4" /> Login with Google
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="register">
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(handleRegisterOnSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Register</Button>
              </form>
            </Form>
            <hr className="my-5 block" />
            <div>
              <Button className="w-full" variant="secondary">
                <FaGoogle className="mr-2 h-4 w-4" /> Login with Google
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default UserAuthenticationForm;
