"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import analyticsStore from "@/store/analytics";
import { useEffect } from "react";

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const ViewsAnalyticsChart = () => {
  const { chartAnalyticsData, getChartAnalyticsData } = analyticsStore(
    (state) => state
  );
  const chartData = chartAnalyticsData.map((property: any) => ({
    title: property.title,
    views: property.views,
  }));

  useEffect(() => {
    getChartAnalyticsData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Property Views Analytics</CardTitle>
        <CardDescription>
          Analyzing the Popularity of Your Top Properties Based on View Counts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="title"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="views"
              type="linear"
              fill="#FF9500"
              fillOpacity={0.6}
              stroke="#FF9500"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default ViewsAnalyticsChart;
