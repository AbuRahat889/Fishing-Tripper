"use client";

import Image from "next/image";

import Link from "next/link";
import Button from "../ReUsible/Button";

import logo from "@/assets/logo2.svg";
import board from "@/assets/boart.svg";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Navbar() {
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
    <div
      className={`sticky  top-0 left-0 right-0 z-[999] transition-all duration-500 ease-in-out transform ${
        scrolled ? "bg-white py-3 shadow-md text-black" : "bg-transparent py-5"
      } ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto ">
        <div className=" flex flex-col lg:flex-row gap-2 lg:gap-0 items-center justify-between font-satoshi ">
          <Link href={"/"}>
            <Image
              className="flex-1 w-36 h-6 "
              src={logo}
              alt=""
              height={100}
              width={100}
            />
          </Link>

          <div className="bg-white rounded-xl lg:rounded-full pl-5 lg:pl-[57px] py-3 pr-3 shadow-xl flex flex-col lg:flex-row justify-between items-center">
            <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-1 max-w-sm ">
              <div>
                <input
                  type="text"
                  placeholder="where"
                  className="mt-1 w-full text-[#474747]"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="mt-1 w-full text-[#474747]"
                  placeholder="when"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="who"
                  className="mt-1 w-full  focus:ring "
                />
              </div>
            </div>

            <div className="bg-[#0037ff]  text-white rounded-xl lg:rounded-full h-8 w-8 flex justify-center items-center">
              <IoIosSearch className="text-2xl" />
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Link
              href={"/waitlist"}
              className="text-[15px] font-semibold  text-[#242424] hover:text-[#FF9500] "
            >
              Sign up
            </Link>
            
            <Link
              href={"/login"}
              className="text-[15px] font-semibold  text-[#242424] hover:text-[#FF9500]"
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
    </div>
  );
}
