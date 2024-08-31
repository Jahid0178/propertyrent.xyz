"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the import path according to your project structure

interface BlurredImageCardProps {
  imageUrl: string;
  altText: string;
  planUrl: string;
  btnText: string;
  isBlurred: boolean;
}

const BlurredImageCard: React.FC<BlurredImageCardProps> = ({
  imageUrl,
  altText,
  planUrl,
  btnText,
  isBlurred,
}) => {
  return (
    <div className="relative border rounded-lg shadow-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        width={300}
        height={300}
        draggable={false}
        className={`w-full rounded-md border ${isBlurred ? "blur-sm" : ""}`}
      />
      {isBlurred && (
        <Button
          asChild
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Link href={planUrl}>{btnText}</Link>
        </Button>
      )}
    </div>
  );
};

export default BlurredImageCard;
