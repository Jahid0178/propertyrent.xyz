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
        href: "/properties/barisal",
      },
      {
        id: 3,
        name: "Chittagong Division",
        href: "/properties/chittagong",
      },
      {
        id: 4,
        name: "Dhaka Division",
        href: "/properties/dhaka",
      },
      {
        id: 5,
        name: "Khulna Division",
        href: "/properties/khulna",
      },
      {
        id: 6,
        name: "Rajshahi Division",
        href: "/properties/rajshahi",
      },
      {
        id: 7,
        name: "Sylhet Division",
        href: "/properties/sylhet",
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
