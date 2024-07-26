import React from "react";
import Image from "next/image";
import aboutImg2 from "../../../../public/images/about/about-us-img2.jpg";

const MissionSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Mission</h2>
        <p>
          At PropertyRent.xyz, our mission is to provide exceptional and
          comprehensive property rental services, ensuring a seamless and
          satisfying experience for both landlords and tenants. We are dedicated
          to delivering top-notch customer service, maintaining transparency in
          all our dealings, and continuously improving our processes to meet the
          evolving needs of our clients. Our goal is to build lasting
          relationships based on trust and professionalism.
        </p>
      </div>
      <div>
        <Image
          src={aboutImg2}
          alt="vision image"
          width={800}
          height={450}
          className="rounded-md w-full"
        />
      </div>
    </div>
  );
};

export default MissionSection;
