import create from "zustand";
import { devtools } from "zustand/middleware";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";
import axios from "axios";

const authStore = create(
  devtools((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    // handle user observer
    // handleUserObserver: () => {
    //   return onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       set({ user });
    //     } else {
    //       set({ user: null });
    //     }
    //   });
    // },

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

    // sign out
    logout: async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`
        );
        if (response.status === 200) {
          set({ user: null });
        }
      } catch (error) {}
    },
  }))
);

export default authStore;
