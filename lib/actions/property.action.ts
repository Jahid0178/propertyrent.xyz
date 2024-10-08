import axios from "axios";
import { PropertyProps } from "@/typescript/interface";
import { toast } from "react-hot-toast";

const defaultProperty: PropertyProps = {
  _id: "",
  title: "",
  description: "",
  propertyType: "",
  listingType: "Rent",
  category: "",
  currency: "",
  images: [],
  views: 0,
  availableFrom: "",
  status: false,
  address: {
    street: "",
    city: "",
    upazilla: "",
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
      numberOfFloors: "",
      renovation: "",
      yearBuilt: "",
      gender: "",
    },
    propertyUtilities: {
      gas: "",
      electricity: "",
      internet: "",
      water: "",
    },
  },
  expiresAt: "",
  mapLocation: {
    coordinates: [0, 0],
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

export const getAllPropertyListings = async (
  query: {
    [key: string]: string;
  } = {}
): Promise<any> => {
  try {
    let baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing`;

    if (query) {
      baseURL += `?${new URLSearchParams(query).toString()}`;
    }

    const response = await axios.get(baseURL);
    return {
      properties: response.data.properties,
      meta: response.data.meta,
    };
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
export const createPropertyListing = async (
  data: PropertyProps
): Promise<any> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing`,
      data,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
    console.error("createPropertyListing", error);
  }
};

export const updatePropertyListing = async (data: any, propertyId: string) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/${propertyId}`,
      data,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("updatePropertyListing", error);
  }
};

export const uploadPropertyListingImage = async (
  propertyId: string,
  data: FormData
) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/${propertyId}/images`,
      data,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("uploadPropertyListingImage", error);
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

export const getPropertyByUserId = async (userId: string) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    if (response.status === 200) {
      return response.data?.user;
    }
  } catch (error) {
    console.error("get property by user id error", error);
  }
};

export const getTrendingProperties = async (): Promise<PropertyProps[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/trending`
    );

    return response.data?.trendingProperty;
  } catch (error) {
    console.log("trending property error", error);
    return [];
  }
};

export const getFeaturedProperties = async (): Promise<PropertyProps[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/featured`
    );

    return response.data?.featuredProperties;
  } catch (error) {
    console.log("trending property error", error);
    return [];
  }
};

export const getRecentProperties = async (): Promise<PropertyProps[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/recent`
    );

    return response.data?.recentProperties;
  } catch (error) {
    console.log("recent property error", error);
    return [];
  }
};

export const handleSavedProperty = async (
  propertyId: string,
  userId: string
) => {
  try {
    const data = {
      propertyId,
      userId,
    };
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/saved-property`,
      {
        data,
      },
      {
        withCredentials: true,
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("error from handler saved property", error);
  }
};

export const handleGetSavedPropertyByUserId = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/saved-property/${userId}`
    );

    if (response.status === 200) {
      return response.data.userSavedProperties;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("error from handler saved property", error);
  }
};

export const handleDeleteSavedProperty = async (propertyId: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/saved-property/${propertyId}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("error from handler saved property", error);
  }
};

export const handleGetPropertyByLocations = async (
  region: string,
  upazilla: string
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/property-listing/search/${region}${upazilla ? `/${upazilla}` : ""}`
    );
    if (response.status === 200) {
      return response.data?.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("error from handler get property by location", error);
  }
};
