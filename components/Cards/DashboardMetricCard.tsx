import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PropertyStatsCardProps = {
  title: string;
  count: number;
};

const DashboardMetricCard = ({ title, count }: PropertyStatsCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{count}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardMetricCard;
