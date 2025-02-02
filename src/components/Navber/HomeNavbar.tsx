import Image from "next/image";
import React from "react";

import Link from "next/link";
import Button from "../ReUsible/Button";

import logo from "@/assets/logo.svg";
import board from "@/assets/boart.svg";

export default function HomeNavbar() {
  return (
    <div className="container mx-auto fixed top-0 left-0 right-0 z-[999] mt-8">
      <div className=" flex items-center justify-between font-satoshi ">
        <div>
          <Image
            className="flex-1 w-36 h-6 "
            src={logo}
            alt=""
            height={100}
            width={100}
          />
        </div>

        <div className="flex gap-3 items-center">
          <Link
            href={"/"}
            className="text-[12px] font-normal leading-normal text-white "
          >
            Sign up
          </Link>
          <Link
            href={"/"}
            className="text-[12px] font-normal leading-normal text-white"
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
