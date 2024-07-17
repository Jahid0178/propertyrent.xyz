"use client";

import React from "react";
import Image from "next/image";
import moment from "moment";
import authStore from "@/store/authStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";

const ProfileCard = () => {
  const { user } = authStore((state) => state);

  const isProfileVerified = user?.isEmailVerified && user?.isPhoneVerified;

  return (
    <Card>
      <CardHeader className="items-center">
        <span className="relative">
          <Image
            src={user?.avatar?.url || "/images/user_placeholder2.png"}
            alt={`${user?.fullName} Avatar`}
            width={100}
            height={100}
            className="rounded-full w-28 h-28"
          />
          <span className="absolute right-1 top-0">
            {isProfileVerified ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={"/svg/verified.svg"}
                      alt="verified"
                      width={24}
                      height={24}
                    />
                  </TooltipTrigger>
                  <TooltipContent>Verified</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image
                      src={"/svg/unverified.svg"}
                      alt="unverified"
                      width={24}
                      height={24}
                    />
                  </TooltipTrigger>
                  <TooltipContent>Unverified</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </span>
        </span>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{user?.fullName}</CardTitle>
        <CardDescription>Email: {user?.email}</CardDescription>
        <CardDescription>Phone: {user?.phone}</CardDescription>
        <CardDescription>
          Joined: {moment(user?.createdAt).format("LL")}
        </CardDescription>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild size="sm">
          <Link href="/user/dashboard/profile/edit" className="text-sm">
            Edit Profile
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href="/user/dashboard/buy-credit" className="text-sm">
            Credit Left: {user?.credit}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
