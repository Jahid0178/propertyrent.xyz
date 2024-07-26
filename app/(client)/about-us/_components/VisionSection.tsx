import React from "react";
import Image from "next/image";
import aboutImg1 from "../../../../public/images/about/about-us-img1.jpg";

const VisionSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div>
        <Image
          src={aboutImg1}
          alt="vision image"
          width={800}
          height={450}
          className="rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">Vision</h2>
        <p>
          Our vision is to become a leading and trusted name in the property
          rental industry, recognized for our innovative approach and commitment
          to excellence. We aspire to create a marketplace where finding the
          perfect rental property is easy, efficient, and stress-free. By
          leveraging cutting-edge technology and a customer-centric philosophy,
          we aim to set new standards in the industry and positively impact the
          communities we serve. Our long-term vision is to expand our services
          globally, offering unparalleled expertise and value to clients around
          the world.
        </p>
      </div>
    </div>
  );
};

export default VisionSection;
