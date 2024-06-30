import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function isAuthenticated(options) {
  const cookieStore = cookies();
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const { data: user } = await axios.get(baseUrl + "/users/me", {
      headers: { Cookie: cookieStore.toString() },
      withCredentials: true,
    });

    return {
      user,
    };
  } catch (err) {
    if (!options?.noRedirect) {
      if (err?.response?.status === 401 || err?.response?.status === 403) {
        redirect("/");
      }
    } else {
      return {
        error: true,
      };
    }
  }
}
