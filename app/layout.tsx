import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Diora Kids",
  description: "Baby clothes",
};

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
