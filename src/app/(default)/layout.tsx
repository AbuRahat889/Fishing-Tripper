import Footer from "@/components/Footer/Footer";
// import HomeNavbar from "@/components/Navber/HomeNavbar";
import Navbar from "@/components/Navber/Navbar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <HomeNavbar /> */}
      
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}
