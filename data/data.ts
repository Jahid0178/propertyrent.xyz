import {
  MdOutlineSpaceDashboard,
  MdHistory,
  MdCreditCard,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsBuilding, BsBuildingAdd, BsBuildingCheck } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { features } from "process";
import { IPackage } from "@/typescript/interface";

export const navigationMenus: {
  id: number;
  name: string;
  href?: string;
  children?: { id: number; name: string; href: string }[];
}[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Property Listing",
    children: [
      {
        id: 1,
        name: "All Property",
        href: "/properties",
      },
      {
        id: 2,
        name: "Barisal Division",
        href: "/property-region/barisal",
      },
      {
        id: 3,
        name: "Chittagong Division",
        href: "/property-region/chittagong",
      },
      {
        id: 4,
        name: "Dhaka Division",
        href: "/property-region/dhaka",
      },
      {
        id: 5,
        name: "Khulna Division",
        href: "/property-region/khulna",
      },
      {
        id: 6,
        name: "Rajshahi Division",
        href: "/property-region/rajshahi",
      },
      {
        id: 7,
        name: "Sylhet Division",
        href: "/property-region/sylhet",
      },
    ],
  },
  {
    id: 3,
    name: "Become a freelancer",
    href: "/become-a-freelancer",
  },
];

export const footerLinks: { id: number; name: string; href: string }[] = [
  {
    id: 1,
    name: "About Us",
    href: "/about-us",
  },
  {
    id: 2,
    name: "Terms and Conditions",
    href: "/terms-and-conditions",
  },
  {
    id: 3,
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: 4,
    name: "FAQ",
    href: "/faq",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact-us",
  },
];

export const dashboardSidebarLinks: {
  id: number;
  name: string;
  href: string;
  icon?: any;
}[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/user/dashboard",
    icon: MdOutlineSpaceDashboard as typeof MdOutlineSpaceDashboard,
  },
  {
    id: 2,
    name: "Profile",
    href: "/user/dashboard/profile",
    icon: FaRegUser as typeof FaRegUser,
  },
  {
    id: 3,
    name: "My Property",
    href: "/user/dashboard/my-property",
    icon: BsBuilding as typeof BsBuilding,
  },
  {
    id: 4,
    name: "Add Property",
    href: "/user/dashboard/add-property",
    icon: BsBuildingAdd as typeof BsBuildingAdd,
  },
  {
    id: 5,
    name: "Saved Property",
    href: "/user/dashboard/saved-property",
    icon: BsBuildingCheck as typeof BsBuildingCheck,
  },
  {
    id: 6,
    name: "History",
    href: "/user/dashboard/history",
    icon: MdHistory as typeof MdHistory,
  },
  {
    id: 7,
    name: "Buy Credit",
    href: "/user/dashboard/buy-credit",
    icon: MdCreditCard as typeof MdCreditCard,
  },
  {
    id: 8,
    name: "Settings",
    href: "/user/dashboard/settings",
    icon: GoGear as typeof GoGear,
  },
];

export const listingTypes: {
  id: number;
  name: string;
  value: string;
  disabled?: boolean;
}[] = [
  {
    id: 1,
    name: "Rent",
    value: "Rent",
  },
  {
    id: 2,
    name: "Sell",
    value: "Sell",
    disabled: true,
  },
];

export const propertyTypes: {
  id: string;
  label: string;
  value: string;
}[] = [
  { id: "1", label: "Apartment", value: "Apartment" },
  { id: "2", label: "Flat", value: "Flat" },
  { id: "3", label: "House", value: "House" },
  { id: "4", label: "Condominium", value: "Condominium" },
  { id: "5", label: "Townhouse", value: "Townhouse" },
  { id: "6", label: "Villa", value: "Villa" },
  { id: "7", label: "Cottage", value: "Cottage" },
  { id: "8", label: "Bungalow", value: "Bungalow" },
  { id: "9", label: "Duplex", value: "Duplex" },
  { id: "10", label: "Penthouse", value: "Penthouse" },
  { id: "11", label: "Loft", value: "Loft" },
  { id: "12", label: "Studio", value: "Studio" },
  { id: "13", label: "Farmhouse", value: "Farmhouse" },
  { id: "14", label: "Ranch", value: "Ranch" },
  { id: "15", label: "Mobile Home", value: "Mobile Home" },
  { id: "16", label: "Multi-family Home", value: "Multi-family Home" },
  { id: "17", label: "Commercial Property", value: "Commercial Property" },
  { id: "18", label: "Land", value: "Land" },
  { id: "19", label: "Manufactured Home", value: "Manufactured Home" },
  { id: "20", label: "Cabin", value: "Cabin" },
  { id: "21", label: "Chateau", value: "Chateau" },
];

export const buildYears: {
  id: number;
  label: string;
  value: string;
}[] = [
  { id: 2024, label: "2024", value: "2024" },
  { id: 2023, label: "2023", value: "2023" },
  { id: 2022, label: "2022", value: "2022" },
  { id: 2021, label: "2021", value: "2021" },
  { id: 2020, label: "2020", value: "2020" },
  { id: 2019, label: "2019", value: "2019" },
  { id: 2018, label: "2018", value: "2018" },
  { id: 2017, label: "2017", value: "2017" },
  { id: 2016, label: "2016", value: "2016" },
  { id: 2015, label: "2015", value: "2015" },
  { id: 2014, label: "2014", value: "2014" },
  { id: 2013, label: "2013", value: "2013" },
  { id: 2012, label: "2012", value: "2012" },
  { id: 2011, label: "2011", value: "2011" },
  { id: 2010, label: "2010", value: "2010" },
  { id: 2009, label: "2009", value: "2009" },
  { id: 2008, label: "2008", value: "2008" },
  { id: 2007, label: "2007", value: "2007" },
  { id: 2006, label: "2006", value: "2006" },
  { id: 2005, label: "2005", value: "2005" },
  { id: 2004, label: "2004", value: "2004" },
  { id: 2003, label: "2003", value: "2003" },
  { id: 2002, label: "2002", value: "2002" },
  { id: 2001, label: "2001", value: "2001" },
  { id: 2000, label: "2000", value: "2000" },
];

export const currencyTypes: {
  id: number;
  label: string;
  value: string;
  disabled?: boolean;
}[] = [
  {
    id: 1,
    label: "BDT",
    value: "BDT",
  },
  {
    id: 2,
    label: "INR",
    value: "INR",
    disabled: true,
  },
  {
    id: 3,
    label: "USD",
    value: "USD",
    disabled: true,
  },
];

export const propertySizeUnits: {
  id: string;
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    label: "Square Feet",
    value: "Sq.ft",
  },
  {
    id: "2",
    label: "Cm",
    value: "Cm",
  },
  {
    id: "3",
    label: "Square Meters",
    value: "Sq.m",
  },
  {
    id: "4",
    label: "Square Yards",
    value: "Sq.yd",
  },
];

export const gasTypes: {
  id: string;
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    label: "Natural Gas",
    value: "Natural Gas",
  },
  {
    id: "2",
    label: "Cylinder",
    value: "Cylinder",
  },
];

export const internetTypes: {
  id: string;
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    label: "Broadband (Cable)",
    value: "Broadband (Cable)",
  },
  {
    id: "2",
    label: "DSL (Digital Subscriber Line)",
    value: "DSL (Digital Subscriber Line)",
  },
  {
    id: "3",
    label: "Fiber Optic",
    value: "Fiber Optic",
  },
  {
    id: "4",
    label: "Satellite Internet",
    value: "Satellite Internet",
  },
  {
    id: "5",
    label: "Mobile Data (4G/5G)",
    value: "Mobile Data (4G/5G)",
  },
  {
    id: "6",
    label: "Wi-Fi",
    value: "Wi-Fi",
  },
  {
    id: "7",
    label: "Fixed Wireless",
    value: "Fixed Wireless",
  },
  {
    id: "8",
    label: "Dial-up",
    value: "Dial-up",
  },
];

export const electricityTypes: {
  id: string;
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    label: "Grid Electricity",
    value: "Grid Electricity",
  },
  {
    id: "2",
    label: "Solar Power",
    value: "Solar Power",
  },
  {
    id: "3",
    label: "Generator Power",
    value: "Generator Power",
  },
  {
    id: "4",
    label: "Inverter/Battery Backup",
    value: "Inverter/Battery Backup",
  },
  {
    id: "5",
    label: "Wind Power",
    value: "Wind Power",
  },
];

export const waterTypes: {
  id: string;
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    label: "Municipal Water Supply",
    value: "Municipal Water Supply",
  },
  {
    id: "2",
    label: "Borewell Water",
    value: "Borewell Water",
  },
  {
    id: "3",
    label: "Tube Well Water",
    value: "Tube Well Water",
  },
  {
    id: "4",
    label: "Rainwater Harvesting",
    value: "Rainwater Harvesting",
  },
];

export const creditPackages: IPackage[] = [
  {
    _id: "1",
    packageTitle: "Budget Bliss Package",
    creditTitle: "50 Credits",
    price: "50 BDT",
    features: ["50 Credits", "No hidden fees", "Unilimited Validity"],
    description:
      "Perfect for those seeking value and essential features at an unbeatable price. Enjoy 50 credits with no hidden fees and unlimited validity.",
  },
  {
    _id: "2",
    packageTitle: "Comfort Choice Package",
    creditTitle: "100 Credits",
    price: "100 BDT",
    features: ["100 Credits", "No hidden fees", "Unilimited Validity"],
    description:
      "A balanced option providing 100 credits. Ideal for moderate needs with the assurance of no hidden fees and unlimited validity.",
  },
  {
    _id: "3",
    packageTitle: "Premium Plus Package",
    creditTitle: "200 Credits",
    price: "200 BDT",
    features: [
      "200 Credits",
      "Free 24/7 support",
      "No hidden fees",
      "Unilimited Validity",
    ],
    description:
      "Upgrade to 200 credits with added benefits like free 24/7 support. Experience premium features with the convenience of no hidden fees and unlimited validity.",
  },
  {
    _id: "4",
    packageTitle: "Elite Excellence Package",
    creditTitle: "500 Credits",
    price: "500 BDT",
    features: [
      "500 Credits",
      "Free 24/7 support",
      "No hidden fees",
      "Unilimited Validity",
    ],
    description:
      "For those who seek excellence, this package offers 500 credits and premium support services. No hidden fees and unlimited validity make it a top choice.",
  },
  {
    _id: "5",
    packageTitle: "Luxury Living Package",
    creditTitle: "1000 Credits",
    price: "1000 BDT",
    features: [
      "1000 Credits",
      "Free 24/7 support",
      "No hidden fees",
      "Unilimited Validity",
    ],
    description:
      "Designed for the luxury seeker, this package offers 1000 credits and unparalleled support. Enjoy a seamless experience with no hidden fees and unlimited validity.",
  },
  {
    _id: "6",
    packageTitle: "Ultimate Prestige Package",
    creditTitle: "2000 Credits",
    price: "2000 BDT",
    features: [
      "2000 Credits",
      "Free 24/7 support",
      "No hidden fees",
      "Unilimited Validity",
    ],
    description:
      "The epitome of prestige and value. Receive 2000 credits with top-tier support, no hidden fees, and unlimited validity for the ultimate property rental experience.",
  },
];
