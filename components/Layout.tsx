import { Header } from "@/components/Header";
import React from "react";
import { Footer } from "@/components/Footer";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <main className="bg-white w-full rounded-3xl text-customBlue">
      <div className="w-[1440px] mx-auto my-0">
        <Header />
        {children}
        <Footer props="" />
      </div>
    </main>
  );
};
