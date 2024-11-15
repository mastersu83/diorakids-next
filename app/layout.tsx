import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Diora Kids",
  description: "Baby clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
