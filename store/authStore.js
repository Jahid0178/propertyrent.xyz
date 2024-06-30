import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const authStore = create(
  devtools((set, get) => ({
    user: null,
    setUser: (user) => set({ user }),

    // sign out
    logout: async () => {
      if (!get().user) {
        return;
      }
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`,
          {},
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          set({ user: null });
        }
      } catch (error) {}
    },
  }))
);

export default authStore;
