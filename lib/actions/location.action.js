import axios from "axios";
export const getAllLocations = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/location`
    );
    return response.data;
  } catch (error) {}
};
