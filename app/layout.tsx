import type { Metadata } from "next";
import "./globals.css";
import { MiLayout } from "@/components/MiLayout";

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
        <MiLayout>{children}</MiLayout>
      </body>
    </html>
  );
}
