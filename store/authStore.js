import create from "zustand";
import { devtools } from "zustand/middleware";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase.config";

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
        await signOut(auth);
        set({ user: null });
      } catch (error) {
        console.log("Error during sign out: ", error);
      }
    },
  }))
);

export default authStore;
