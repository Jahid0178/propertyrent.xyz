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
