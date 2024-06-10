import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import Swiper styles
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyRent.xyz",
  description:
    "PropertyRent.xyz is a platform that connects property owners with tenants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
