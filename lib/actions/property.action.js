import axios from "axios";
export const getAllPropertiesType = async () => {
  try {
    const response = await axios.get("http://localhost:4000/propertyType");
    return response.data;
  } catch (error) {}
};
