import axios from "axios";

export const handleRegisterUser = async (userData: any): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      userData
    );
    console.log("user registered successfully", response);
    return response;
  } catch (error) {
    console.log("error from handle register user", error);
  }
};

export const handleLoginUser = async (data: any) => {
  const { phone, password } = data;
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    {
      phone,
      password,
    }
  );
  return response;
};
