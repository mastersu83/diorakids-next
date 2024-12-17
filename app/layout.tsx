import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { MiLayout } from "@/components/MiLayout";
import React from "react";

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
        <div className="h-screen">
          <MiLayout>{children}</MiLayout>
        </div>
      </body>
    </html>
  );
}
