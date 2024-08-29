import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PropertyStatsCardProps = {
  title: string;
  count?: number | string;
  status?: boolean;
  showStatus?: boolean;
  icon: any;
};

const DashboardMetricCard = ({
  title,
  count,
  status = false,
  showStatus = false,
  icon,
}: PropertyStatsCardProps) => {
  const statusText = status ? "Active" : "Deactive";
  const statusColor = status ? "text-green-500" : "text-red-500";

  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center space-y-0">
        <span className="space-y-1">
          <CardTitle>{title}</CardTitle>
        </span>
        <span>{icon}</span>
      </CardHeader>
      <CardContent>
        <p
          className={`text-2xl font-semibold ${showStatus ? statusColor : ""}`}
        >
          {showStatus ? statusText : count}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardMetricCard;
