import axios from "axios";
export const getAllPropertiesType = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/propertyType`
    );
    return response.data;
  } catch (error) {}
};

export const getAllProperties = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/properties`
    );
    return response.data;
  } catch (error) {}
};
