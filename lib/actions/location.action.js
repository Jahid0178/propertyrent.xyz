import axios from "axios";
export const getAllLocations = async () => {
  try {
    const response = await axios.get("http://localhost:4000/location");
    return response.data;
  } catch (error) {}
};
