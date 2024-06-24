import create from "zustand";
import { devtools } from "zustand/middleware";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";

const authStore = create(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    logout: () => set({ user: null }),

    // google sign in
    handleGoogleSignIn: async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        set({ user: result.user });
        console.log("User signed in: ", result);
      } catch (error) {
        console.log("Error during sign in: ", error);
      }
    },
  }))
);

export default authStore;
