import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <section className="h-screen">
      <div className="container h-full flex justify-center items-center">
        <div className="space-y-3 text-center">
          <Image
            src="/svg/not-found.svg"
            alt="not found"
            width={400}
            height={400}
            className="w-full"
          />
          <h1 className="text-2xl md:text-4xl font-semibold text-orange-500">
            Page Not Found!
          </h1>
          <p className="text-sm md:text-base">
            Sorry, the page you are looking for does not exist or has been
            removed.
          </p>
          <Button asChild>
            <Link href="/">Back Home Page</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
