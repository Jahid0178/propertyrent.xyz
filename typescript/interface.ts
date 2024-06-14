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
  name: string;
  location: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  type: string;
  image: string;
  description: string;
}
