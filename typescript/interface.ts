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
  avatar: string;
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
  properties: string[];
  totalProperties: number;
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
  title: string;
  description: string;
  propertyType: string;
  listingType: "Rent" | "Sale" | "Buy" | "Lease";
  currency: string;
  images: {
    url: string;
  }[];
  address: {
    street: string;
    city: string;
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
      renovation: string;
      yearBuilt: string;
    };
    propertyUtilities: {
      gas: string;
      electricity: string;
      internet: string;
      water: string;
    };
    outdoorFeatures: {
      garden: string;
      pool: string;
      playground: string;
      fencing: string;
    };
    nearby: {
      school: string;
      hospital: string;
      shoppingCenter: string;
      publicTransport: string;
    };
  };
  author?: any;
}

export interface IPackage {
  _id: string;
  packageTitle: string;
  creditTitle: string;
  price: string;
  features: string[];
  description?: string;
}
