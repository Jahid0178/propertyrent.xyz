import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const analyticsStore = create(
  devtools((set, get) => ({
    totalProperty: 0,
    totalViews: 0,
    totalSales: 0,
    totalCredits: 0,
    mostViewedProperties: [],
    chartAnalyticsData: [],

    getTotalProperty: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/analytics`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        set({
          totalProperty: response.data.data.properties.length,
          totalViews: response.data.data.totalPropertyViews,
        });
      }
    },

    getMostViewedProperty: async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/analytics/most-viewed`,
          {
            withCredentials: true,
          }
        );

        set({
          mostViewedProperties: response.data.data,
        });
      } catch (error) {
        console.log("get error from most viewed", error);
      }
    },

    getChartAnalyticsData: async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/analytics/chart-analytics`,
          {
            withCredentials: true,
          }
        );

        set({
          chartAnalyticsData: response.data.data,
        });
      } catch (error) {
        console.log("get error from chart analytics data", error);
      }
    },
  }))
);

export default analyticsStore;
