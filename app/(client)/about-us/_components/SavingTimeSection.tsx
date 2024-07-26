import React from "react";
import Image from "next/image";
import aboutImg3 from "../../../../public/images/about/about-us-img1.jpg";

const SavingTimeSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div>
        <Image
          src={aboutImg3}
          alt="about img 3"
          width={800}
          height={450}
          className="rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">Service we offer</h2>
        <p>
          From property rentals to tenant placement, explore the wide range of
          services we offer to meet your needs.
        </p>
      </div>
    </div>
  );
};

export default SavingTimeSection;
