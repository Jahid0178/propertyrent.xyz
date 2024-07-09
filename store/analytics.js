import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const analyticsStore = create(
  devtools((set, get) => ({
    totalProperty: 0,
    totalViews: 0,
    totalSales: 0,
    totalCredits: 0,

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
  }))
);

export default analyticsStore;
