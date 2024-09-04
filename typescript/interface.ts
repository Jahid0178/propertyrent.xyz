export interface AuthorInfo {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  contactInformation: {
    phone: string;
    email: string;
  };
  avatar: {
    url: string;
  };
  points: number;
  rating: number;
  credit: number;
  paymentMethod: string;
}

export interface IPopularLocation {
  id: number;
  name: string;
  value: string;
  image: string;
}

export interface ITrendingProperty {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  views: number;
  inquiries: number;
  image: string;
}

export interface PropertyProps {
  _id: string;
  puid?: string;
  title: string;
  description: string;
  propertyType: string;
  listingType: "Rent" | "Sale" | "Buy" | "Lease";
  category: string;
  currency: string;
  views: number;
  availableFrom: string;
  isFeatured?: boolean;
  status: boolean;
  images: {
    url: string;
  }[];
  address: {
    street: string;
    city: string;
    upazilla: string;
    country: string;
    zipCode: string;
  };
  price: number;
  propertyDetails: {
    propertyFeatures: {
      propertySize: string;
      propertySizeUnit: string;
      numberOfBedrooms: string;
      numberOfBathrooms: string;
      numberOfDiningrooms: string;
      numberOfGarage: string;
      numberOfBalconies: string;
      numberOfFloors: string;
      renovation: string;
      yearBuilt: string;
      gender: string;
    };
    propertyUtilities: {
      gas: string;
      electricity: string;
      internet: string;
      water: string;
    };
  };
  author?: any;
  expiresAt: string;
  mapLocation: {
    coordinates: [number, number];
  };
}

export interface IPackage {
  _id: string;
  packageTitle: string;
  packageType: string;
  price: number;
  currency: string;
  features: string[];
  description?: string;
  packageCode: string;
}

export interface IPaymentData {
  _id: string;
  userId: string;
  tranId: string;
  amount: number;
  status: boolean;
  packageId: IPackage;
  createdAt: Date;
  updatedAt: Date;
}
