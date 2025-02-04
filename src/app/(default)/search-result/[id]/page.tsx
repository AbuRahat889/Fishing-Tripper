import DetailsCarousel from "@/components/DetailsPage/DetailsCarousel";
import { image as images } from "@/constant/TopChartersInfo";
import React from "react";

import image from "@/assets/capt.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

import Faq from "@/components/DetailsPage/Faq";
import KeyFeature from "@/components/DetailsPage/KeyFeature";

export default function page() {
  return (
    <div className="container mx-auto  ">
      <div className="flex items-center justify-between gap-5 mt-10">
        <div className="max-w-lg">
          <DetailsCarousel product={{ images }} />
        </div>
        <div className="">
          <div>
            <h1 className="text-3xl text-[#242424] font-bold">
              Flamingo Everglades trip
            </h1>
            <p className="text-base text-[#878787] font-normal font-satoshi mt-3">
              Brief discription goes here over two lines, Brief discription goes
              here over two linesBrief discription goes here over two linesBrief
              discription goes here.Brief discription goes here over two lines,
              Brief discription goes here over two linesBrief discription goes
              here over two linesBrief discription goes here.Brief discription
              goes here over two lines, Brief discription goes here over two
              linesBrief discription goes here over two linesBrief discription
              goes here.
            </p>
          </div>

          <div className="border-y border-[#D9D9D9] mt-6">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center gap-4">
                <Image
                  src={image}
                  alt="capten"
                  height={100}
                  width={100}
                  className="h-16 w-16"
                />

                <h1 className="text-base font-bold text-[#242424]">
                  Captain Tom Jones{" "}
                  <span className=" font-normal text-[#878787]">Tom Jones</span>
                </h1>
              </div>
              <span className="text-[#9E9E9E] text-base font-normal leading-7 flex items-center gap-1">
                <IoLocationOutline className="text-[#FF9500] h-6 w-6 font-bold" />
                Florida
              </span>
            </div>
          </div>
          <div className="border-b border-[#D9D9D9] pb-4">
            <KeyFeature />
          </div>

          <div>
            <h1 className="text-base font-bold text-[#171717] mt-4">
              See the details
            </h1>

            <Faq />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-[40px] text-[#242424] font-bold leading-7">
          Select your trip
        </h1>
        <h1 className="text-2xl text-[#242424] font-bold py-6">
          Florida / 10th September 2025 / 4 people
        </h1>

        <div className="flex items-center gap-6">
          <div className="w-64">
            <label className="block text-[18px] font-normal text-[#171717]">
              Trip Date
            </label>
            <input
              type="date"
              className="mt-1 w-full text-[#474747] border border-[#E0E0E0] px-4 py-2"
              placeholder="Select date"
            />
          </div>

          <div className="w-64">
            <label className="block text-[18px] font-normal text-[#171717]">
              Private or shared?
            </label>
            <select
              defaultValue={"How many guests?"}
              className="mt-1 w-full text-[#474747] border border-[#E0E0E0] px-4 py-2"
            >
              <option>4 people</option>
              <option>6 people</option>
              <option>10 people</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
