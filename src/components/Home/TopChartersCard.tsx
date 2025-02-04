import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

import doller from "@/assets/icon/doller.svg";
import clock from "@/assets/icon/clock.svg";
import men from "@/assets/icon/men.svg";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  description: string;
  location: string;
  price: string;
  duration: string;
  capacity: string;
  imageUrl: string;
  id: number;
}

const TopChartersCard: React.FC<CardProps> = ({
  title,
  description,
  location,
  price,
  duration,
  capacity,
  imageUrl,
  id,
}) => {
  const route = useRouter();
  const handleclick = (id: number) => {
    console.log("this is click of ", id);
    route.push(`/search-result/${id}`);
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
        <div className="flex flex-col md:flex-row gap-5 lg:gap-0 justify-between ">
          <h3 className="text-2xl text-[#242424] leading-6 font-bold align-text-bottom ">
            {title}
          </h3>
          <div className="flex gap-6 items-center">
            <span className="text-[#9E9E9E] text-base font-normal leading-7 flex items-center gap-1">
              <IoLocationOutline className="text-[#FF9500] h-6 w-6 font-bold" />
              {location}
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
              src={doller}
              alt={title}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            {price}
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
            {capacity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChartersCard;
