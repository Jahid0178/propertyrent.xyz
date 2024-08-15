import { z } from "zod";

export const propertyListingFormValidation = {
  propertyId: z.string(),
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must be at least 3 characters" })
    .trim(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(20, { message: "Description must be at least 20 characters" })
    .trim(),
  propertyType: z.string().nonempty("Property Type is required"),
  listingType: z.string().nonempty("Listing Type is required"),
  category: z.string().nonempty("Category is required"),
  currency: z.string().min(1, { message: "Currency is required" }),
  availableFrom: z.date({ required_error: "Available From is required" }),
  images: z.any(),
  address: z.object({
    street: z
      .string({
        required_error: "Street is required",
        invalid_type_error: "Street must be a string",
      })
      .min(3, { message: "Street must be at least 3 characters" }),
    city: z
      .string({
        required_error: "City is required",
        invalid_type_error: "City must be a string",
      })
      .min(3, { message: "City must be at least 3 characters" }),
    upazilla: z.string().nonempty("Upazilla is required"),
    country: z.string({}).nonempty("Country is required"),
    zipCode: z
      .string({
        required_error: "Zip Code is required",
        invalid_type_error: "Zip Code must be a string",
      })
      .min(3, { message: "Zip Code must be at least 3 characters" }),
  }),
  price: z
    .string({
      required_error: "Price is required",
      invalid_type_error: "Price must be a string",
    })
    .min(3, { message: "Price must be at least 3 characters" }),
  propertyDetails: z.object({
    propertyFeatures: z.object({
      propertySize: z
        .string({
          required_error: "Property Size is required",
          invalid_type_error: "Property Size must be a string",
        })
        .min(3, { message: "Property Size must be at least 3 characters" }),
      propertySizeUnit: z
        .string({
          required_error: "Property Size Unit is required",
          invalid_type_error: "Property Size must be a string",
        })
        .nonempty("Property Size Unit is required"),
      numberOfBedrooms: z
        .string({
          required_error: "Number of Bedrooms is required",
          invalid_type_error: "Number of Bedrooms must be a string",
        })
        .nonempty("Number of Bedrooms is required"),
      numberOfBathrooms: z
        .string({
          required_error: "Number of Bathrooms is required",
          invalid_type_error: "Number of Bathrooms must be a string",
        })
        .nonempty("Number of Bathrooms is required"),
      numberOfDiningrooms: z.string(),
      numberOfGarage: z.string(),
      numberOfBalconies: z.string(),
      numberOfFloors: z.string(),
      gender: z.string(),
      renovation: z
        .string({
          required_error: "Renovation is required",
          invalid_type_error: "Renovation must be a string",
        })
        .nonempty("Renovation is required"),
      yearBuilt: z
        .string({
          required_error: "Year Built is required",
          invalid_type_error: "Year Built must be a string",
        })
        .nonempty("Year Built is required"),
    }),
    propertyUtilities: z.object({
      gas: z
        .string({
          required_error: "Gas is required",
          invalid_type_error: "Gas must be a string",
        })
        .nonempty("Gas is required"),
      electricity: z
        .string({
          required_error: "Electricity is required",
          invalid_type_error: "Electricity must be a string",
        })
        .nonempty("Electricity is required"),
      internet: z
        .string({
          required_error: "Internet is required",
          invalid_type_error: "Internet must be a string",
        })
        .nonempty("Internet is required"),
      water: z
        .string({
          required_error: "Water is required",
          invalid_type_error: "Water must be a string",
        })
        .nonempty("Water is required"),
    }),
  }),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
};
