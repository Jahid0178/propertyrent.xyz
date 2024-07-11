import React from "react";
import UserDashboardStatsSection from "./UserDashboardStatsSection";
import UserDashboardAnalyticsSection from "./UserDashboardAnalyticsSection";

const UserDashboardPageSection = () => {
  return (
    <section>
      <div className="container space-y-8">
        <UserDashboardStatsSection />
        <UserDashboardAnalyticsSection />
      </div>
    </section>
  );
};

export default UserDashboardPageSection;
