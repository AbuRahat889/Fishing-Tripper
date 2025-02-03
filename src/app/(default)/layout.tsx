import Footer from "@/components/Footer/Footer";
import HomeNavbar from "@/components/Navber/HomeNavbar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeNavbar />
      {children}
      <Footer/>
    </>
  );
}
