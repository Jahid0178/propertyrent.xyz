import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  type: "image" | "text";
  href: string;
}

const Logo = ({ type, href }: LogoProps) => {
  return (
    <div>
      <Link href={href}>
        {type === "image" ? (
          <Image
            src="/images/logo/logo.svg"
            alt="Logo"
            width={150}
            height={150}
          />
        ) : (
          <h2 className="text-2xl font-semibold">
            <span className="text-orange-500">Property</span>Rent.xyz
          </h2>
        )}
      </Link>
    </div>
  );
};

export default Logo;
