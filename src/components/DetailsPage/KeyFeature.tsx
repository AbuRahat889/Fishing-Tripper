import Image from "next/image";
import React from "react";

import doller from "@/assets/icon/doller.svg";
import clock from "@/assets/icon/clock.svg";
import men from "@/assets/icon/men.svg";

export default function KeyFeature() {
  return (
    <div>
      <h1 className="text-base font-bold text-[#171717] mt-4">Key features:</h1>
      <div>
        <div className="flex flex-wrap  md:flex-row w-full items-center gap-4 mt-4">
          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424]">
            <Image
              src={doller}
              alt={"doller"}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            £800 for full private boat booking
          </div>

          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={doller}
              alt={"clock"}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            £100 per person
          </div>

          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={clock}
              alt={"clock"}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            8 Hours
          </div>
          <div className="flex items-center gap-1 bg-[#EDF1FF] px-2 py-1 rounded-full border-2 border-[#b2c3ff] text-[#242424] ">
            <Image
              src={men}
              alt={"men"}
              height={100}
              width={100}
              className="w-5 h-5 object-cover rounded-lg"
            />
            Up to 8 people
          </div>
        </div>
      </div>
    </div>
  );
}
