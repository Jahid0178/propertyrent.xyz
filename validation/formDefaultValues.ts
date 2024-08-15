import { DEFAULT_MAP_LAT, DEFAULT_MAP_LNG } from "@/constant/constant";

export const getPropertyListingDefaultValues = (
  property: any,
  propertyCategoryType: string
) => {
  const baseDefaults = {
    title: property?.title || "",
    description: property?.description || "",
    propertyType: property?.propertyType || propertyCategoryType || "",
    listingType: property?.listingType || "",
    currency: property?.currency || "",
    images: property?.images || [],
    availableFrom: property?.availableFrom || "",
    address: {
      street: property?.address?.street || "",
      city: property?.address?.city || "",
      upazilla: property?.address?.upazilla || "",
      country: property?.address?.country || "",
      zipCode: property?.address?.zipCode || "",
    },
    price: property?.price || "",
    coordinates: {
      lat: property?.coordinates?.lat || DEFAULT_MAP_LAT,
      lng: property?.coordinates?.lng || DEFAULT_MAP_LNG,
    },
  };

  switch (propertyCategoryType) {
    case "family":
      return {
        ...baseDefaults,
        propertyDetails: {
          propertyFeatures: {
            propertySize:
              property?.propertyDetails?.propertyFeatures?.propertySize || "",
            propertySizeUnit:
              property?.propertyDetails?.propertyFeatures?.propertySizeUnit ||
              "",
            numberOfBedrooms:
              property?.propertyDetails?.propertyFeatures?.numberOfBedrooms ||
              "",
            numberOfBathrooms:
              property?.propertyDetails?.propertyFeatures?.numberOfBathrooms ||
              "",
            numberOfDiningrooms:
              property?.propertyDetails?.propertyFeatures
                ?.numberOfDiningrooms || "",
            numberOfGarage:
              property?.propertyDetails?.propertyFeatures?.numberOfGarage || "",
            numberOfBalconies:
              property?.propertyDetails?.propertyFeatures?.numberOfBalconies ||
              "",
            renovation:
              property?.propertyDetails?.propertyFeatures?.renovation || "",
            yearBuilt:
              property?.propertyDetails?.propertyFeatures?.yearBuilt || "",
          },
          propertyUtilities: {
            gas: property?.propertyDetails?.propertyUtilities?.gas || "",
            electricity:
              property?.propertyDetails?.propertyUtilities?.electricity || "",
            internet:
              property?.propertyDetails?.propertyUtilities?.internet || "",
            water: property?.propertyDetails?.propertyUtilities?.water || "",
          },
          nearby: {
            school: property?.propertyDetails?.nearby?.school || "",
            hospital: property?.propertyDetails?.nearby?.hospital || "",
            shoppingCenter:
              property?.propertyDetails?.nearby?.shoppingCenter || "",
            publicTransport:
              property?.propertyDetails?.nearby?.publicTransport || "",
          },
        },
      };
    case "bachelor":
      return {
        ...baseDefaults,
        propertyDetails: {
          sharedRoom: property?.propertyDetails?.sharedRoom || true,
          roommates: property?.propertyDetails?.roommates || 1,
        },
      };
    case "land":
      return {
        ...baseDefaults,
        zoning: property?.zoning || "",
        landUse: property?.landUse || "",
        utilitiesAvailability: {
          water: property?.utilitiesAvailability?.water || false,
          electricity: property?.utilitiesAvailability?.electricity || false,
          gas: property?.utilitiesAvailability?.gas || false,
          internet: property?.utilitiesAvailability?.internet || false,
        },
      };
    default:
      return {
        ...baseDefaults,
        propertyDetails: {
          propertyFeatures: {
            propertySize: "",
            buildYear: "",
          },
        },
      };
  }
};
