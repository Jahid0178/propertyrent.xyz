import {
  MdOutlineSpaceDashboard,
  MdHistory,
  MdCreditCard,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsBuilding, BsBuildingAdd, BsBuildingCheck } from "react-icons/bs";
import { GoGear } from "react-icons/go";

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
