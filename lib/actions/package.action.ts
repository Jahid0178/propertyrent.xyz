import axios from "axios";

export const handleGetAllPackages = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/credit-package/`
    );

    if (response.status === 200) {
      return response.data;
    }

    console.log("response from get all packages", response);
  } catch (error) {
    console.log("error from get all packages", error);
  }
};

export const handleGetSinglePackage = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/credit-package/${id}`
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("error from get single package", error);
  }
};
