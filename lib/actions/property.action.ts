import axios from "axios";
import { PropertyProps } from "@/typescript/interface";

const defaultProperty: PropertyProps = {
  _id: "",
  title: "",
  description: "",
  propertyType: "",
  listingType: "Rent",
  currency: "",
  images: [],
  address: {
    street: "",
    city: "",
    country: "",
    zipCode: "",
  },
  price: 0,
  propertyDetails: {
    propertyFeatures: {
      propertySize: "",
      propertySizeUnit: "",
      numberOfBedrooms: "",
      numberOfBathrooms: "",
      numberOfDiningrooms: "",
      numberOfGarage: "",
      numberOfBalconies: "",
      renovation: "",
      yearBuilt: "",
    },
    propertyUtilities: {
      gas: "",
      electricity: "",
      internet: "",
      water: "",
    },
    outdoorFeatures: {
      garden: "",
      pool: "",
      playground: "",
      fencing: "",
    },
    nearby: {
      school: "",
      hospital: "",
      shoppingCenter: "",
      publicTransport: "",
    },
  },
};

export const getAllPropertiesType = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TEST_API_URL}/propertyType`
    );
    return response.data;
  } catch (error) {}
};

export const getAllPropertyListings = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing`
    );
    return response.data;
  } catch (error) {
    console.error("getAllPropertyListings", error);
  }
};

export const getAllProperties = async (searchParams: string = "") => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TEST_API_URL}/properties?featuredType=${searchParams}`
    );
    return response.data;
  } catch (error) {}
};

// create property listing
export const createPropertyListing = async (data: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing`,
      data,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("createPropertyListing", error);
  }
};

export const getPropertyById = async (
  propertyId: string
): Promise<PropertyProps> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/${propertyId}`
    );

    return response.data.property ?? defaultProperty;
  } catch (error) {
    console.log(error);
    return defaultProperty;
  }
};

export const getPropertyByRegion = async (
  regionName: string
): Promise<PropertyProps[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TEST_API_URL}/properties?location=${regionName}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
