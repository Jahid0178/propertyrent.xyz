"use client";

import React, { useEffect } from "react";
import DashboardMetricCard from "@/components/Cards/DashboardMetricCard";
import analyticsStore from "@/store/analytics";
import authStore from "@/store/authStore";

const UserDashboardStatsSection = () => {
  const { getTotalProperty, totalProperty, totalViews } = analyticsStore(
    (state) => state
  );
  const { user } = authStore((state) => state);

  useEffect(() => {
    getTotalProperty();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardMetricCard title="Total Property" count={totalProperty || 0} />
      <DashboardMetricCard title="Total Views" count={totalViews || 0} />
      <DashboardMetricCard title="Total Sales" count={0} />
      <DashboardMetricCard title="Total Credits" count={user?.credit || 0} />
    </div>
  );
};

export default UserDashboardStatsSection;
