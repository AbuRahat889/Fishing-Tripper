"use client";

import React, { useState } from "react";
import logo from "@/assets/boart.svg";
import Image from "next/image";
import TopChartersCard from "./TopChartersCard";
import { cardData } from "@/constant/TopChartersInfo";

export default function TopCharters() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="mt-16 container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-[#242424]">
          Top charters this month
        </h1>

        <div className="flex items-center justify-center gap-5">
          <h1 className="text-base text-[#242424] font-bold">Private trip</h1>

          <div
            onClick={handleToggle}
            className={`flex items-center w-28 h-14 rounded-3xl cursor-pointer transition-all bg-[#DAE2FF] 
              
            `}
          >
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-2xl transition-all ${
                isToggled
                  ? "translate-x-16 bg-[#0037FF]"
                  : "translate-x-2 bg-[#0037FF]"
              }`}
            >
              <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                className="h-9 w-9 p-1"
              />
            </div>
          </div>

          <h1 className="text-[#AEAEB2] text-base font-medium ">
            Group Charter
          </h1>
        </div>
      </div>

      <div className="">
        {cardData?.map((card) => (
          <TopChartersCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
