import { z } from "zod";

export const propertyListingFormValidation = {
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
    country: z
      .string({
        required_error: "Country is required",
        invalid_type_error: "Country must be a string",
      })
      .min(3, { message: "Country must be at least 3 characters" }),
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
      numberOfDiningrooms: z
        .string({
          required_error: "Number of Diningrooms is required",
          invalid_type_error: "Number of Diningrooms must be a string",
        })
        .nonempty("Number of Diningrooms is required"),
      numberOfGarage: z
        .string({
          required_error: "Number of Garage is required",
          invalid_type_error: "Number of Garage must be a string",
        })
        .nonempty("Number of Garage is required"),
      numberOfBalconies: z
        .string({
          required_error: "Number of Balconies is required",
          invalid_type_error: "Number of Balconies must be a string",
        })
        .nonempty("Number of Balconies is required"),
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
    outdoorFeatures: z.object({
      garden: z
        .string({
          required_error: "Garden is required",
          invalid_type_error: "Garden must be a string",
        })
        .nonempty("Garden is required"),
      pool: z
        .string({
          required_error: "Pool is required",
          invalid_type_error: "Pool must be a string",
        })
        .nonempty("Pool is required"),
      playground: z
        .string({
          required_error: "Playground is required",
          invalid_type_error: "Playground must be a string",
        })
        .nonempty("Playground is required"),
      fencing: z
        .string({
          required_error: "Fencing is required",
          invalid_type_error: "Fencing must be a string",
        })
        .nonempty("Fencing is required"),
    }),
    nearby: z.object({
      school: z
        .string({
          required_error: "Schools is required",
          invalid_type_error: "Schools must be a string",
        })
        .min(1, { message: "Schools is required" }),
      hospital: z
        .string({
          required_error: "Hospitals is required",
          invalid_type_error: "Hospitals must be a string",
        })
        .min(1, { message: "Hospitals is required" }),
      shoppingCenter: z
        .string({
          required_error: "Shopping Centers is required",
          invalid_type_error: "Shopping Centers must be a string",
        })
        .min(1, { message: "Shopping Centers is required" }),
      publicTransport: z
        .string({
          required_error: "Public Transport is required",
          invalid_type_error: "Public Transport must be a string",
        })
        .min(1, { message: "Public Transport is required" }),
    }),
  }),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
};
