"use client";

import Image from "next/image";
import React from "react";
import doller from "@/assets/icon/doller.svg";
import clock from "@/assets/icon/clock.svg";
import men from "@/assets/icon/men.svg";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
  id: number;
  maxPeople: string;
  privateGroup: string;
  deposit: string;
}

const GroupPricingCard: React.FC<CardProps> = ({
  title,
  description,
  price,
  imageUrl,
  id,
  privateGroup,
  duration,
  maxPeople,
  deposit,
}) => {
  const route = useRouter();
  const handleclick = (id: number) => {
    console.log("this is click of ", id);
    route.push(`/payment?type=group`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-4 gap-4 border mt-5">
      <Image
        src={imageUrl}
        alt={title}
        height={100}
        width={100}
        className="w-80 h-60  rounded-lg"
      />

      <div className="flex-1">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between ">
          <h3 className="text-2xl text-[#242424] leading-6 font-bold align-text-bottom ">
            {title}
          </h3>
          <div className="flex gap-6 items-center">
            <span className="text-[#878787] text-base font-normal leading-7 flex items-center gap-1">
              Price :
              <span className="text-base font-bold text-[#242424]">
                {price}
              </span>
            </span>

            <button
              onClick={() => handleclick(id)}
              className="bg-orange-400 text-white px-4 py-2 rounded-lg text-base font-satoshi"
            >
              Reserve now
            </button>
          </div>
        </div>

        <p className="text-base text-[#878787] my-4">{description}</p>
        <p className="font-bold text-sm text-[#171717] ">Key features:</p>

        <div className="flex flex-wrap  md:flex-row w-full items-center gap-4 mt-4">
          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424]">
            <Image
              src={clock}
              alt={title}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            {privateGroup}
          </div>

          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={clock}
              alt={title}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            {duration}
          </div>

          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={men}
              alt={title}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            {maxPeople}
          </div>

          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={doller}
              alt={title}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            {deposit}
          </div>

          <div className="mt-4">
            <h1 className="text-base text-[#171717] font-bold leading-6">
              Fishing species:{" "}
              <span className="text-[#878787] font-normal">
                {" "}
                Species #1, Species #2, Species #3, Species #4,
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPricingCard;
