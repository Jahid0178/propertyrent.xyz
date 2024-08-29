"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from "@/components/common/Logo/Logo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { handleRegisterUser } from "@/lib/actions/user.action";
import { toast } from "react-hot-toast";

// register form validation schema
const registerFormSchema = z.object({
  fullName: z.string().trim().min(3, "Full name is required"),
  username: z.string().trim().min(3, "Username is required"),
  phone: z.string().trim().min(3, "Phone number is required"),
  email: z.string().trim().email("Email is required"),
  password: z.string().trim().min(1, "Password is required"),
});

const RegisterPage = () => {
  // register form
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      username: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const handleRegisterOnSubmit = async (
    data: z.infer<typeof registerFormSchema>
  ) => {
    try {
      const response = await handleRegisterUser(data);
      if (response?.statusText === "OK") {
        toast.success(response.data.message);

        console.log("user_auth_register_form_data", response.data);
      }
      registerForm.reset();
    } catch (error) {
      console.log("register error", error);
    }
  };
  return (
    <section className="h-dvh bg-gray-100">
      <div className="container min-h-full flex justify-center items-center">
        <Card className="mx-auto max-w-sm">
          <Logo type="text" href="/" className="text-center px-4 pt-4" />
          <CardHeader>
            <CardTitle className="text-2xl">Register</CardTitle>
            <CardDescription>
              Provide your details below to create a new account and join our
              service. Welcome aboard!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...registerForm}>
              <form
                onSubmit={registerForm.handleSubmit(handleRegisterOnSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={registerForm.control}
                  name="fullName"
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your user name"
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
                <Button type="submit" className="w-full">
                  Register
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterPage;
