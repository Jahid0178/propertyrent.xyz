import React from "react";
import MostViewedSection from "./MostViewedSection";
import ViewsAnalyticsChart from "@/components/Charts/ViewsAnalyticsChart";

const UserDashboardAnalyticsSection = async () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <ViewsAnalyticsChart />
      </div>
      <div className="col-span-12 md:col-span-4">
        <MostViewedSection />
      </div>
    </div>
  );
};

export default UserDashboardAnalyticsSection;
