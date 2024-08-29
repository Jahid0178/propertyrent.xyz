"use client";

import React, { useEffect, useMemo } from "react";
import DashboardMetricCard from "@/components/Cards/DashboardMetricCard";
import analyticsStore from "@/store/analytics";
import authStore from "@/store/authStore";
import { FaHouse, FaEye, FaMoneyBill1 } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

const UserDashboardStatsSection = () => {
  const { getTotalProperty, totalProperty, totalViews } = analyticsStore(
    (state) => state
  );
  const { user } = authStore((state) => state);
  useEffect(() => {
    getTotalProperty();
  }, []);

  const currentPlanTitle = useMemo(() => {
    return user?.currentPlan?.packageId?.packageTitle?.split(" ")[0] || "";
  }, [user]);

  const currentPlanStatus = useMemo(() => {
    return user?.currentPlan?.status || false;
  }, [user]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardMetricCard
        title="Total Property"
        count={totalProperty || 0}
        icon={<FaHouse size={20} />}
      />
      <DashboardMetricCard
        title="Total Views"
        count={totalViews || 0}
        icon={<FaEye size={20} />}
      />
      <DashboardMetricCard
        title="Total Sales"
        count={0}
        icon={<FaMoneyBill1 size={20} />}
      />
      <DashboardMetricCard
        title={`Current Plan ${currentPlanTitle}`}
        status={currentPlanStatus}
        showStatus={Boolean(user?.currentPlan)}
        count={currentPlanTitle || "No Plan"}
        icon={<GrStatusGood size={20} />}
      />
    </div>
  );
};

export default UserDashboardStatsSection;
