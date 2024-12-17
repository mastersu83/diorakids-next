import { Header } from "@/components/Header";
import React from "react";
import { Footer } from "@/components/Footer";
import { Grid } from "@radix-ui/themes";

interface ILayout {
  children: React.ReactNode;
}

export const MiLayout = async ({ children }: ILayout) => {
  return (
    <main className="bg-white w-full rounded-3xl text-customBlue min-h-full">
      <Grid
        rows="auto 1fr auto"
        align="center"
        justify="center"
        gapY="28px"
        className="w-[1440px] mx-auto my-0 content-between"
      >
        <Header />
        {children}
        <Footer />
      </Grid>
    </main>
  );
};
