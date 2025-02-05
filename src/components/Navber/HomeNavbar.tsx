"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Button from "../ReUsible/Button";

import logo from "@/assets/logo.svg";
import logo2 from "@/assets/logo2.svg";
import board from "@/assets/boart.svg";

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }

      setScrolled(currentScrollY > 50); // Apply background and shadow effect
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    // <div className="container mx-auto fixed top-0 left-0 right-0 z-[999] mt-8">
    <div
      className={`fixed  top-0 left-0 right-0 z-[999] transition-all duration-500 ease-in-out transform ${
        scrolled ? "bg-white py-3 shadow-md text-black" : "bg-transparent py-5"
      } ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-2 lg:gap-0 items-center justify-between font-satoshi ">
        <div>
          {scrolled ? (
            <Image
              className="flex-1 w-36 h-6 "
              src={logo2}
              alt=""
              height={100}
              width={100}
            />
          ) : (
            <Image
              className="flex-1 w-36 h-6 "
              src={logo}
              alt=""
              height={100}
              width={100}
            />
          )}
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href={"/"}
            className={`text-base font-normal leading-normal  ${
              scrolled ? "text-black" : "text-white"
            } `}
          >
            Sign up
          </Link>
          <Link
            href={"/"}
            className={`text-base font-normal leading-normal  ${
              scrolled ? "text-black" : "text-white"
            } `}
          >
            Login
          </Link>

          <Button
            variant="primary"
            className="flex gap-1 font-satoshi text-base font-bold"
          >
            <Image
              className="flex-1 h-6 w-6 "
              src={board}
              alt=""
              height={100}
              width={100}
            />
            List your boat
          </Button>
        </div>
      </div>
    </div>
  );
}
