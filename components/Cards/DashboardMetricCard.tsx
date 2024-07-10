import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PropertyStatsCardProps = {
  title: string;
  count: number;
  icon: any;
};

const DashboardMetricCard = ({
  title,
  count,
  icon,
}: PropertyStatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center space-y-0">
        <CardTitle>{title}</CardTitle>
        <span>{icon}</span>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardMetricCard;
