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
        id: 3,
        name: "All Property",
        href: "/properties",
      },
      {
        id: 4,
        name: "Barisal Division",
        href: "/property-region/Barisal",
      },
      {
        id: 5,
        name: "Chattogram Division",
        href: "/property-region/Chattogram",
      },
      {
        id: 6,
        name: "Dhaka Division",
        href: "/property-region/Dhaka",
      },
      {
        id: 7,
        name: "Khulna Division",
        href: "/property-region/Khulna",
      },
      {
        id: 8,
        name: "Rajshahi Division",
        href: "/property-region/Rajshahi",
      },
      {
        id: 9,
        name: "Sylhet Division",
        href: "/property-region/Sylhet",
      },
    ],
  },
  {
    id: 10,
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
  {
    id: "1",
    label: "House",
    value: "House",
  },
  {
    id: "2",
    label: "Flat",
    value: "Flat",
  },
  {
    id: "3",
    label: "Apartment",
    value: "Apartment",
  },
  {
    id: "4",
    label: "Room",
    value: "Room",
  },
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

export const locations: {
  district: string;
  districtbn: string;
  coordinates: string;
  upazillas: string[];
}[] = [
  {
    district: "Barguna",
    districtbn: "বরগুনা",
    coordinates: "22.0953, 90.1121",
    upazillas: [
      "Amtali",
      "Bamna",
      "Barguna Sadar",
      "Betagi",
      "Patharghata",
      "Taltali",
    ],
  },
  {
    district: "Barishal",
    districtbn: "বরিশাল",
    coordinates: "22.7022, 90.3696",
    upazillas: [
      "Agailjhara",
      "Babuganj",
      "Bakerganj",
      "Banaripara",
      "Barisal Sadar",
      "Gaurnadi",
      "Hizla",
      "Mehendiganj",
      "Muladi",
      "Wazirpur",
    ],
  },
  {
    district: "Bhola",
    districtbn: "ভোলা",
    coordinates: "22.1785, 90.7101",
    upazillas: [
      "Bhola Sadar",
      "Burhanuddin",
      "Char Fasson",
      "Daulatkhan",
      "Lalmohan",
      "Manpura",
      "Tazumuddin",
    ],
  },
  {
    district: "Jhalokati",
    districtbn: "ঝালকাঠী",
    coordinates: "22.5721, 90.1870",
    upazillas: ["Kathalia", "Nalchhiti", "Jhalokati Sadar", "Rajapur"],
  },
  {
    district: "Patuakhali",
    districtbn: "পটুয়াখালী",
    coordinates: "22.2249, 90.4548",
    upazillas: [
      "Bauphal",
      "Dashmina",
      "Dumki",
      "Galachipa",
      "Kalapara",
      "Mirzaganj",
      "Patuakhali Sadar",
      "Rangabali",
    ],
  },
  {
    district: "Pirojpur",
    districtbn: "পিরোজপুর",
    coordinates: "22.5791, 89.9759",
    upazillas: [
      "Bhandaria",
      "Indurkani",
      "Kawkhali",
      "Mathbaria",
      "Nazirpur",
      "Nesarabad (Swarupkati)",
      "Pirojpur Sadar",
    ],
  },
  {
    district: "Bandarban",
    districtbn: "বান্দরবান",
    coordinates: "21.8311, 92.3686",
    upazillas: [
      "Ali Kadam",
      "Bandarban Sadar",
      "Lama",
      "Naikhongchhari",
      "Rowangchhari",
      "Ruma",
      "Thanchi",
    ],
  },
  {
    district: "Brahmanbaria",
    districtbn: "ব্রাহ্মণবাড়িয়া",
    coordinates: "23.9608, 91.1115",
    upazillas: [
      "Akhaura",
      "Ashuganj",
      "Bancharampur",
      "Brahmanbaria Sadar",
      "Bijoynagar",
      "Kasba",
      "Nabinagar",
      "Nasirnagar",
      "Sarail",
    ],
  },
  {
    district: "Chandpur",
    districtbn: "চাঁদপুর",
    coordinates: "23.2513, 90.8518",
    upazillas: [
      "Chandpur Sadar",
      "Faridganj",
      "Haimchar",
      "Haziganj",
      "Kachua",
      "Matlab Dakshin",
      "Matlab Uttar",
      "Shahrasti",
    ],
  },
  {
    district: "Chattogram",
    districtbn: "চট্টগ্রাম",
    coordinates: "22.5150, 91.7539",
    upazillas: [
      "Anwara",
      "Banshkhali",
      "Boalkhali",
      "Chandanaish",
      "Fatikchhari",
      "Hathazari",
      "Karnaphuli",
      "Lohagara",
      "Mirsharai",
      "Patiya",
      "Rangunia",
      "Raozan",
      "Sandwip",
      "Satkania",
      "Sitakunda",
    ],
  },
  {
    district: "Cox's Bazar",
    districtbn: "কক্স বাজার",
    coordinates: "21.5641, 92.0282",
    upazillas: [
      "Cox's Bazar Sadar",
      "Chakaria",
      "Kutubdia",
      "Maheshkhali",
      "Ramu",
      "Teknaf",
      "Ukhia",
      "Pekua",
      "Eidgaon",
    ],
  },
  {
    district: "Cumilla",
    districtbn: "কুমিল্লা",
    coordinates: "23.4576, 91.1809",
    upazillas: [
      "Barura",
      "Brahmanpara",
      "Burichang",
      "Chandina",
      "Chauddagram",
      "Cumilla Adarsha Sadar",
      "Cumilla Sadar South",
      "Daudkandi",
      "Debidwar",
      "Homna",
      "Laksam",
      "Lalmai",
      "Meghna",
      "Monohargonj",
      "Muradnagar",
      "Nangalkot",
      "Titas",
    ],
  },
  {
    district: "Feni",
    districtbn: "ফেনী",
    coordinates: "22.9409, 91.4067",
    upazillas: [
      "Chhagalnaiya",
      "Daganbhuiyan",
      "Feni Sadar",
      "Fulgazi",
      "Parshuram",
      "Sonagazi",
    ],
  },
  {
    district: "Khagrachari",
    districtbn: "খাগড়াছড়ি",
    coordinates: "23.1322, 91.9490",
    upazillas: [
      "Dighinala",
      "Khagrachhari Sadar",
      "Lakshmichhari",
      "Mahalchhari",
      "Manikchhari",
      "Matiranga",
      "Panchhari",
      "Ramgarh",
    ],
  },
  {
    district: "Lakshmipur",
    districtbn: "লক্ষ্মীপুর",
    coordinates: "22.9447, 90.8282",
    upazillas: [
      "Lakshmipur Sadar",
      "Kamalnagar",
      "Raipur",
      "Ramganj",
      "Ramgati",
    ],
  },
  {
    district: "Noakhali",
    districtbn: "নোয়াখালী",
    coordinates: "22.8724, 91.0973",
    upazillas: [
      "Begumganj",
      "Noakhali Sadar",
      "Chatkhil",
      "Companiganj",
      "Hatiya",
      "Kabirhat",
      "Senbagh",
      "Sonaimuri",
      "Subarnachar",
    ],
  },
  {
    district: "Rangamati",
    districtbn: "রাঙ্গামাটি",
    coordinates: "22.7324, 92.2985",
    upazillas: [
      "Bagaichhari",
      "Barkal",
      "Belaichhari",
      "Juraichhari",
      "Kaptai",
      "Kawkhali",
      "Langadu",
      "Naniyachar",
      "Rajasthali",
      "Rangamati Sadar",
    ],
  },
  {
    district: "Dhaka",
    districtbn: "ঢাকা",
    coordinates: "23.8105, 90.3372",
    upazillas: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
  },
  {
    district: "Faridpur",
    districtbn: "ফরিদপুর",
    coordinates: "23.5424, 89.6309",
    upazillas: [
      "Alfadanga",
      "Bhanga",
      "Boalmari",
      "Charbhadrasan",
      "Faridpur Sadar",
      "Madhukhali",
      "Nagarkanda",
      "Sadarpur",
      "Saltha",
    ],
  },
  {
    district: "Gazipur",
    districtbn: "গাজীপুর",
    coordinates: "24.0958, 90.4125",
    upazillas: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
  },
  {
    district: "Gopalganj",
    districtbn: "গোপালগঞ্জ",
    coordinates: "23.0488, 89.8879",
    upazillas: [
      "Gopalganj Sadar",
      "Kashiani",
      "Kotalipara",
      "Muksudpur",
      "Tungipara",
    ],
  },
  {
    district: "Kishoreganj",
    districtbn: "কিশোরগঞ্জ",
    coordinates: "24.4260, 90.9821",
    upazillas: [
      "Austagram",
      "Bajitpur",
      "Bhairab",
      "Hossainpur",
      "Itna",
      "Karimganj",
      "Katiadi",
      "Kishoreganj Sadar",
      "Kuliarchar",
      "Mithamain",
      "Nikli",
      "Pakundia",
      "Tarail",
    ],
  },
  {
    district: "Madaripur",
    districtbn: "মাদারীপুর",
    coordinates: "23.2393, 90.1870",
    upazillas: ["Rajoir", "Madaripur Sadar", "Kalkini", "Shibchar"],
  },
  {
    district: "Manikganj",
    districtbn: "মানিকগঞ্জ",
    coordinates: "23.8617, 90.0003",
    upazillas: [
      "Daulatpur",
      "Ghior",
      "Harirampur",
      "Manikgonj Sadar",
      "Saturia",
      "Shivalaya",
      "Singair",
    ],
  },
  {
    district: "Munshiganj",
    districtbn: "মুন্সিগঞ্জ",
    coordinates: "23.4981, 90.4127",
    upazillas: [
      "Gazaria",
      "Lohajang",
      "Munshiganj Sadar",
      "Sirajdikhan",
      "Sreenagar",
      "Tongibari",
    ],
  },
  {
    district: "Narayanganj",
    districtbn: "নারায়ণগঞ্জ",
    coordinates: "23.7147, 90.5636",
    upazillas: [
      "Araihazar",
      "Bandar",
      "Narayanganj Sadar",
      "Rupganj",
      "Sonargaon",
    ],
  },
  {
    district: "Narsingdi",
    districtbn: "নরসিংদী",
    coordinates: "24.1344, 90.7860",
    upazillas: [
      "Belabo",
      "Monohardi",
      "Narsingdi Sadar",
      "Palash",
      "Raipura",
      "Shibpur",
    ],
  },
  {
    district: "Rajbari",
    districtbn: "রাজবাড়ী",
    coordinates: "23.7151, 89.5875",
    upazillas: [
      "Baliakandi",
      "Goalandaghat",
      "Kalukhali",
      "Pangsha",
      "Rajbari Sadar",
    ],
  },
  {
    district: "Shariatpur",
    districtbn: "শরিয়তপুর",
    coordinates: "23.2423, 90.4348",
    upazillas: [
      "Bhedarganj",
      "Damudya",
      "Gosairhat",
      "Naria",
      "Shariatpur Sadar",
      "Zajira",
    ],
  },
  {
    district: "Tangail",
    districtbn: "টাঙ্গাইল",
    coordinates: "24.3917, 89.9948",
    upazillas: [
      "Basail",
      "Bhuapur",
      "Delduar",
      "Dhanbari",
      "Ghatail",
      "Gopalpur",
      "Kalihati",
      "Madhupur",
      "Mirzapur",
      "Nagarpur",
      "Sakhipur",
      "Tangail Sadar",
    ],
  },
  {
    district: "Bagerhat",
    districtbn: "বাগেরহাট",
    coordinates: "22.6602, 89.7895",
    upazillas: [
      "Bagerhat Sadar",
      "Chitalmari",
      "Fakirhat",
      "Kachua",
      "Mollahat",
      "Mongla",
      "Morrelganj",
      "Rampal",
      "Sarankhola",
    ],
  },
  {
    district: "Chuadanga",
    districtbn: "চুয়াডাঙ্গা",
    coordinates: "23.6161, 88.8263",
    upazillas: ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
  },
  {
    district: "Jashore",
    districtbn: "যশোর",
    coordinates: "23.1634, 89.2182",
    upazillas: [
      "Abhaynagar",
      "Bagherpara",
      "Chaugachha",
      "Jhikargachha",
      "Keshabpur",
      "Jashore Sadar",
      "Manirampur",
      "Sharsha",
    ],
  },
  {
    district: "Jhenaidah",
    districtbn: "ঝিনাইদহ",
    coordinates: "23.5450, 89.1726",
    upazillas: [
      "Harinakunda",
      "Jhenaidah Sadar",
      "Kaliganj",
      "Kotchandpur",
      "Maheshpur",
      "Shailkupa",
    ],
  },
  {
    district: "Khulna",
    districtbn: "খুলনা",
    coordinates: "22.6738, 89.3967",
    upazillas: [
      "Batiaghata",
      "Dacope",
      "Dumuria",
      "Dighalia",
      "Koyra",
      "Paikgachha",
      "Phultala",
      "Rupsha",
      "Terokhada",
    ],
  },
  {
    district: "Kushtia",
    districtbn: "কুষ্টিয়া",
    coordinates: "23.8907, 89.1099",
    upazillas: [
      "Bheramara",
      "Daulatpur",
      "Khoksa",
      "Kumarkhali",
      "Kushtia Sadar",
      "Mirpur",
    ],
  },
  {
    district: "Magura",
    districtbn: "মাগুরা",
    coordinates: "23.4290, 89.4364",
    upazillas: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
  },
  {
    district: "Meherpur",
    districtbn: "মেহেরপুর",
    coordinates: "23.8052, 88.6724",
    upazillas: ["Gangni", "Meherpur Sadar", "Mujibnagar"],
  },
  {
    district: "Narail",
    districtbn: "নড়াইল",
    coordinates: "23.1163, 89.5840",
    upazillas: ["Kalia", "Lohagara", "Narail Sadar"],
  },
  {
    district: "Satkhira",
    districtbn: "সাতক্ষীরা",
    coordinates: "22.3155, 89.1115",
    upazillas: [
      "Assasuni",
      "Debhata",
      "Kalaroa",
      "Kaliganj",
      "Satkhira Sadar",
      "Shyamnagar",
      "Tala",
    ],
  },
  {
    district: "Jamalpur",
    districtbn: "জামালপুর",
    coordinates: "25.0831, 89.7853",
    upazillas: [
      "Baksiganj",
      "Dewanganj",
      "Islampur",
      "Jamalpur Sadar",
      "Madarganj",
      "Melandaha",
      "Sarishabari",
    ],
  },
  {
    district: "Mymensingh",
    districtbn: "ময়মনসিংহ",
    coordinates: "24.7539, 90.4073",
    upazillas: [
      "Bhaluka",
      "Dhobaura",
      "Fulbaria",
      "Gafargaon",
      "Gauripur",
      "Haluaghat",
      "Ishwarganj",
      "Mymensingh Sadar",
      "Muktagachha",
      "Nandail",
      "Phulpur",
      "Tara Khanda",
      "Trishal",
    ],
  },
  {
    district: "Netrokona",
    districtbn: "নেত্রকোনা",
    coordinates: "24.8103, 90.8656",
    upazillas: [
      "Atpara",
      "Barhatta",
      "Durgapur",
      "Khaliajuri",
      "Kalmakanda",
      "Kendua",
      "Madan",
      "Mohanganj",
      "Netrokona Sadar",
      "Purbadhala",
    ],
  },
  {
    district: "Sherpur",
    districtbn: "শেরপুর",
    coordinates: "25.0746, 90.1495",
    upazillas: [
      "Jhenaigati",
      "Nakla",
      "Nalitabari",
      "Sherpur Sadar",
      "Sreebardi",
    ],
  },
  {
    district: "Bogura",
    districtbn: "বগুড়া",
    coordinates: "24.8510, 89.3697",
    upazillas: [
      "Adamdighi",
      "Bogura Sadar",
      "Dhunat",
      "Dhupchanchia",
      "Gabtali",
      "Kahaloo",
      "Nandigram",
      "Sariakandi",
      "Shajahanpur",
      "Sherpur",
      "Shibganj",
      "Sonatola",
    ],
  },
  {
    district: "Joypurhat",
    districtbn: "জয়পুরহাট",
    coordinates: "25.0947, 89.0945",
    upazillas: ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
  },
  {
    district: "Naogaon",
    districtbn: "নওগাঁ",
    coordinates: "24.9132, 88.7531",
    upazillas: [
      "Atrai",
      "Badalgachhi",
      "Manda",
      "Dhamoirhat",
      "Mohadevpur",
      "Naogaon Sadar",
      "Niamatpur",
      "Patnitala",
      "Porsha",
      "Raninagar",
      "Sapahar",
    ],
  },
  {
    district: "Natore",
    districtbn: "নাটোর",
    coordinates: "24.4102, 89.0076",
    upazillas: [
      "Bagatipara",
      "Baraigram",
      "Gurudaspur",
      "Lalpur",
      "Natore Sadar",
      "Singra",
      "Naldanga",
    ],
  },
  {
    district: "Chapai Nawabganj",
    districtbn: "চাঁপাইনবাবগঞ্জ",
    coordinates: "24.7413, 88.2912",
    upazillas: [
      "Bholahat",
      "Chapai Nawabganj Sadar",
      "Dogachi",
      "Gomostapur",
      "Nachol",
      "Shibganj",
    ],
  },
  {
    district: "Pabna",
    districtbn: "পাবনা",
    coordinates: "24.1585, 89.4481",
    upazillas: [
      "Atgharia",
      "Bera",
      "Bhangura",
      "Chatmohar",
      "Faridpur",
      "Ishwardi",
      "Pabna Sadar",
      "Santhia",
      "Sujanagar",
    ],
  },
  {
    district: "Rajshahi",
    districtbn: "রাজশাহী",
    coordinates: "24.3733, 88.6049",
    upazillas: [
      "Bagha",
      "Bagmara",
      "Charghat",
      "Durgapur",
      "Godagari",
      "Mohanpur",
      "Paba",
      "Puthia",
      "Tanore",
    ],
  },
  {
    district: "Sirajganj",
    districtbn: "সিরাজগঞ্জ",
    coordinates: "24.3141, 89.5700",
    upazillas: [
      "Belkuchi",
      "Chauhali",
      "Kamarkhanda",
      "Kazipur",
      "Raiganj",
      "Shahjadpur",
      "Sirajganj Sadar",
      "Tarash",
      "Ullahpara",
    ],
  },
  {
    district: "Dinajpur",
    districtbn: "দিনাজপুর",
    coordinates: "25.6279, 88.6332",
    upazillas: [
      "Birampur",
      "Birganj",
      "Biral",
      "Bochaganj",
      "Chirirbandar",
      "Dinajpur Sadar",
      "Ghoraghat",
      "Hakimpur",
      "Kaharole",
      "Khansama",
      "Nawabganj",
      "Parbatipur",
      "Phulbari",
    ],
  },
  {
    district: "Gaibandha",
    districtbn: "গাইবান্ধা",
    coordinates: "25.3297, 89.5430",
    upazillas: [
      "Phulchhari",
      "Gaibandha Sadar",
      "Gobindaganj",
      "Palashbari",
      "Sadullapur",
      "Sughatta",
      "Sundarganj",
    ],
  },
  {
    district: "Kurigram",
    districtbn: "কুড়িগ্রাম",
    coordinates: "25.8072, 89.6295",
    upazillas: [
      "Bhurungamari",
      "Char Rajibpur",
      "Chilmari",
      "Kurigram Sadar",
      "Nageshwari",
      "Phulbari",
      "Rajarhat",
      "Raomari",
      "Ulipur",
    ],
  },
  {
    district: "Lalmonirhat",
    districtbn: "লালমনিরহাট",
    coordinates: "25.9923, 89.2847",
    upazillas: [
      "Aditmari",
      "Hatibandha",
      "Kaliganj",
      "Lalmonirhat Sadar",
      "Patgram",
    ],
  },
  {
    district: "Nilphamari",
    districtbn: "নিলফামারী",
    coordinates: "25.8483, 88.9414",
    upazillas: [
      "Dimla",
      "Domar",
      "Jaldhaka",
      "Kishoreganj",
      "Nilphamari Sadar",
      "Saidpur",
    ],
  },
  {
    district: "Panchagarh",
    districtbn: "পঞ্চগড়",
    coordinates: "26.2709, 88.5952",
    upazillas: ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
  },
  {
    district: "Rangpur",
    districtbn: "রংপুর",
    coordinates: "25.7468, 89.2508",
    upazillas: [
      "Badarganj",
      "Gangachhara",
      "Kaunia",
      "Mithapukur",
      "Pirgachha",
      "Pirganj",
      "Rangpur Sadar",
      "Taraganj",
    ],
  },
  {
    district: "Thakurgaon",
    districtbn: "ঠাকুরগাঁও",
    coordinates: "26.0418, 88.4283",
    upazillas: [
      "Baliadangi",
      "Haripur",
      "Pirganj",
      "Ranisankail",
      "Thakurgaon Sadar",
    ],
  },
  {
    district: "Habiganj",
    districtbn: "হবিগঞ্জ",
    coordinates: "24.4771, 91.4507",
    upazillas: [
      "Ajmiriganj",
      "Bahubal",
      "Baniyachong",
      "Chunarughat",
      "Habiganj Sadar",
      "Lakhai",
      "Madhabpur",
      "Nabiganj",
      "Sayestaganj",
    ],
  },
  {
    district: "Moulvibazar",
    districtbn: "মৌলভীবাজার",
    coordinates: "24.3095, 91.7315",
    upazillas: [
      "Barlekha",
      "Juri",
      "Kamalganj",
      "Kulaura",
      "Moulvibazar Sadar",
      "Rajnagar",
      "Sreemangal",
    ],
  },
  {
    district: "Sunamganj",
    districtbn: "সুনামগঞ্জ",
    coordinates: "25.0715, 91.3992",
    upazillas: [
      "Bishwamvarpur",
      "Chhatak",
      "Dakshin Sunamganj",
      "Derai",
      "Dharamapasha",
      "Dowarabazar",
      "Jagannathpur",
      "Jamalganj",
      "Sullah",
      "Sunamganj Sadar",
      "Tahirpur",
    ],
  },
  {
    district: "Sylhet",
    districtbn: "সিলেট",
    coordinates: "24.8993, 91.8700",
    upazillas: [
      "Balaganj",
      "Beanibazar",
      "Bishwanath",
      "Companigonj",
      "Dakshin Surma",
      "Fenchuganj",
      "Golapganj",
      "Gowainghat",
      "Jaintiapur",
      "Kanaighat",
      "Osmani Nagar",
      "Sylhet Sadar",
      "Zakiganj",
    ],
  },
];

export const popularLocations = [
  {
    id: 1,
    name: "Barisal",
    value: "Barisal",
    image: "/images/location-image/barisal.webp",
  },
  {
    id: 2,
    name: "Chattogram",
    value: "Chattogram",
    image: "/images/location-image/chittagong.webp",
  },
  {
    id: 3,
    name: "Dhaka",
    value: "Dhaka",
    image: "/images/location-image/dhaka.webp",
  },
  {
    id: 4,
    name: "Khulna",
    value: "Khulna",
    image: "/images/location-image/khulna.webp",
  },
  {
    id: 5,
    name: "Rajshahi",
    value: "Rajshahi",
    image: "/images/location-image/rajshahi.webp",
  },
  {
    id: 6,
    name: "Sylhet",
    value: "Sylhet",
    image: "/images/location-image/sylhet.webp",
  },
  {
    id: 7,
    name: "Rangpur",
    value: "Rangpur",
    image: "/images/location-image/rangpur.webp",
  },
  {
    id: 8,
    name: "Mymensingh",
    value: "Mymensingh",
    image: "/images/location-image/mymensingh.webp",
  },
];

export const propertyCategories: {
  id: string;
  label: string;
  value: string;
  icon: any;
  href: string;
  disabled?: boolean;
}[] = [
  {
    id: "1",
    label: "Family",
    value: "family",
    icon: "house",
    href: "/user/dashboard/add-property/family",
  },
  {
    id: "2",
    label: "Bachelor",
    value: "bachelor",
    icon: "house-plus",
    href: "/user/dashboard/add-property/bachelor",
  },
  {
    id: "3",
    label: "Office",
    value: "office",
    icon: "building",
    href: "/user/dashboard/add-property",
    disabled: true,
  },
  {
    id: "4",
    label: "Sublet",
    value: "sublet",
    icon: "share-2",
    href: "/user/dashboard/add-property/sublet",
  },
  {
    id: "5",
    label: "Hostel",
    value: "hostel",
    icon: "bed-single",
    href: "/user/dashboard/add-property",
    disabled: true,
  },
  {
    id: "6",
    label: "Shop",
    value: "shop",
    icon: "store",
    href: "/user/dashboard/add-property",
    disabled: true,
  },
  {
    id: "7",
    label: "Land",
    value: "land",
    icon: "land-plot",
    href: "/user/dashboard/add-property",
    disabled: true,
  },
];

export const clientHeaderUserDropdownMenus: {
  id: string;
  label: string;
  href: string;
}[] = [
  {
    id: "1",
    label: "Dashboard",
    href: "user/dashboard",
  },
  {
    id: "2",
    label: "Profile",
    href: "user/profile",
  },
  {
    id: "3",
    label: "Settings",
    href: "user/settings",
  },
];

export const userDropdownMenus: {
  id: string;
  label: string;
  href: string;
}[] = [
  {
    id: "1",
    label: "Dashboard",
    href: "dashboard",
  },
  {
    id: "2",
    label: "Profile",
    href: "profile",
  },
  {
    id: "3",
    label: "Settings",
    href: "settings",
  },
];
