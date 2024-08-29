import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const handleRegisterUser = async (userData: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      userData
    );
    console.log("user registered successfully", response);
    return response;
  } catch (error: any) {
    console.error("error from handle register user", error);
    if ((error as AxiosError)?.response?.data) {
      const responseData = error.response.data as { message: string };
      toast.error(responseData.message);
    } else {
      toast.error("An error occurred");
    }
  }
};

export const handleLoginUser = async (data: any) => {
  const { phone, password } = data;
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      phone,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return response;
};

export const handleUpdateUser = async (userId: string, data: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`,
      data
    );
    return response;
  } catch (error: any) {
    console.log("error from handle update user", error);
  }
};

export const handleUserProfileImage = async (userId: string, data: any) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}/avatar`,
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error from handle update user image", error);
  }
};
