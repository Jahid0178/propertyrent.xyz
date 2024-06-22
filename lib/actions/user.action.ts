import axios from "axios";

export const handleRegisterUser = async (userData: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
      userData
    );
    return response;
  } catch (error) {
    console.log("error from handle register user", error);
  }
};
