export interface AuthorInfo {
  id: string;
  name: string;
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
  id: string;
  propertyId: number;
  name: string;
  location: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  type: string;
  image: {
    url?: string;
  };
  listingType: "Rent" | "Sell" | "Buy" | "Lease";
  description: string;
  author?: AuthorInfo;
}
