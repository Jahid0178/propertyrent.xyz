import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { AuthorInfo } from "@/typescript/interface";

type AuthorCardProps = {
  author: AuthorInfo;
};

const AuthorCard = ({ author }: AuthorCardProps) => {
  const { fullName, email, avatar } = author;
  return (
    <Card>
      <CardHeader>
        <Image
          src={avatar?.url || "/images/user_placeholder2.png"}
          alt={`${fullName} Avatar`}
          width={100}
          height={100}
          className="mx-auto w-28 h-28 object-cover rounded-full"
        />
        <CardTitle className="text-center text-lg">{fullName}</CardTitle>
        <CardDescription className="text-center">Owner</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>Email: {email}</p>
        {/* <p>Phone: {phone}</p> */}
        <Button className="!mt-6 w-full" size="lg">
          Contact Me
        </Button>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
