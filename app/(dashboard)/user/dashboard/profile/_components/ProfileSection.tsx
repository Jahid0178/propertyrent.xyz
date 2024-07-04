import React from "react";
import ProfileCard from "@/components/Cards/ProfileCard";

const ProfileSection = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full md:w-96 mx-auto">
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
