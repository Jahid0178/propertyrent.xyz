import axios from "axios";

export const handleRegisterUser = async (userData: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`,
      userData
    );
    return response;
  } catch (error) {
    console.log("error from handle register user", error);
  }
};

export const handleLoginUser = async (data: any) => {
  const { phoneNumber, password } = data;
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`,
    {
      phoneNumber,
      password,
    }
  );
  return response;
};
