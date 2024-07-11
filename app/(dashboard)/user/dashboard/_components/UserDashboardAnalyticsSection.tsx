import React from "react";
import MostViewedSection from "./MostViewedSection";

const UserDashboardAnalyticsSection = async () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">Analytics chart</div>
      <div className="col-span-12 md:col-span-4">
        <MostViewedSection />
      </div>
    </div>
  );
};

export default UserDashboardAnalyticsSection;
