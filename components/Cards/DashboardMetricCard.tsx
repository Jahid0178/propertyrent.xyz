import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PropertyStatsCardProps = {
  title: string;
  subTitle?: string;
  count?: number;
  status?: boolean;
  showStatus?: boolean;
  icon: any;
};

const DashboardMetricCard = ({
  title,
  subTitle,
  count,
  status,
  showStatus = false,
  icon,
}: PropertyStatsCardProps) => {
  console.log("status", status);
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center space-y-0">
        <span className="space-y-1">
          <CardTitle>{title}</CardTitle>
          {subTitle && (
            <p className="text-sm text-muted-foreground">{subTitle}</p>
          )}
        </span>
        <span>{icon}</span>
      </CardHeader>
      <CardContent>
        {showStatus ? (
          <p
            className={`text-xl font-semibold ${status ? "text-green-500" : "text-red-500"}`}
          >
            {status ? "Active" : "Deactive"}
          </p>
        ) : (
          <p className="text-3xl font-semibold">{count}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardMetricCard;
