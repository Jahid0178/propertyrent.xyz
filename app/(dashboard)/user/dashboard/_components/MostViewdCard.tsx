import React from "react";
import Image from "next/image";
import { PropertyProps } from "@/typescript/interface";
import formatNumberWithCommas from "@/utils/formatNumberWithCommas";

interface MostViewdCardProps {
  data: PropertyProps;
}

const MostViewdCard = ({ data }: MostViewdCardProps) => {
  const { title, price, views, images, currency } = data;
  const imageURL = images?.[0]?.url || "/images/placeholder.png";
  return (
    <article className="flex gap-4 border dark:border-gray-800 p-2 rounded bg-white dark:bg-gray-900">
      <figure>
        <Image
          src={imageURL}
          alt={`${title} Most Viewed Card`}
          width={100}
          height={80}
          className="w-100 h-full rounded object-cover"
        />
      </figure>
      <div className="w-full space-y-1">
        <h5 className="text-md font-semibold" title={title}>
          {title}
        </h5>
        <p className="text-sm">Views: {views}</p>
      </div>
    </article>
  );
};

export default MostViewdCard;
