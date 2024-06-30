"use client";

import authStore from "@/store/authStore";

const InitializeStore = ({ user, children }: any) => {
  if (user) {
    authStore.setState({ user: user });
  } else {
    authStore.setState({ user: null });
  }
  return children;
};

export default InitializeStore;
