import { PropertyProps } from "@/typescript/interface";
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

const defaultProperty: PropertyProps = {
  id: "",
  name: "",
  location: "",
  address: "",
  description: "",
  propertyFeatures: {
    parking: "",
    coolingSystem: "",
    heatingSystem: "",
    flooring: "",
    renovation: "",
    constructionYear: "",
    furnishing: "",
  },
  propertyUtilities: {
    water: "",
    electricity: "",
    gas: "",
    internet: "",
  },
  outdoorFeatures: {
    garden: "",
    pool: "",
    playground: "",
    fencing: "",
  },
  nearby: {
    schools: [],
    hospitals: [],
    shoppingCenters: [],
    publicTransport: [],
  },
  price: 0,
  currency: "USD",
  listingType: "Rent",
  type: "unknown",
  propertyId: "N/A",
  image: {},
  bedrooms: 0,
  bathrooms: 0,
  squareFeet: 0,
  author: {
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    contactInformation: {
      phone: "",
      email: "",
    },
    avatar: "",
    points: 0,
    rating: 0,
    credit: 0,
    paymentMethod: "",
  },
};

export const getPropertyById = async (
  propertyId: string
): Promise<PropertyProps> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/properties/${propertyId}`
    );
    return response.data ?? defaultProperty;
  } catch (error) {
    console.log(error);
    return defaultProperty;
  }
};
