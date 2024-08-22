import type { Metadata } from "next";
import { Inter } from "next/font/google";
import isAuthenticated from "../utils/isAuthenticated";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import InitializeStore from "./InitializeStore";
import ThemeProvider from "@/providers/ThemeProvider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyRent.xyz",
  description:
    "PropertyRent.xyz is a platform that connects property owners with tenants.",
  keywords:
    "Apartments for Rent in Bangaldesh, Houses for Rent in Bangaldesh, Rental Properties in Bangaldesh, Property for Rent, Property for Rent in Bangaldesh, Commercial Space for Rent in Bangaldesh, Real Estate Listings, Flats for Rent in Bangaldesh, Office Space for Rent in Bangaldesh, Student Housing in Bangladesh, Rental Market, Real Estate Market, Real Estate Market in Bangladesh, Real Estate Marketplace, Property Market, Property Market in Bangladesh, Real Estate Market in Bangladesh, PropertyRent.xyz, Property Rent, Property Rent in Bangladesh",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await isAuthenticated({ noRedirect: true });
  return (
    <html lang="en">
      <InitializeStore user={data?.user?.user}>
        <body className={`${inter.className} dark:bg-gray-950`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </InitializeStore>

      <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? ""}
      />

      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID ?? ""}
      />
    </html>
  );
}
