import DetailsCarousel from "@/components/DetailsPage/DetailsCarousel";
import { image as images } from "@/constant/TopChartersInfo";
import React from "react";

import image from "@/assets/capt.png";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import doller from "@/assets/icon/doller.svg";
import clock from "@/assets/icon/clock.svg";
import men from "@/assets/icon/men.svg";
import Faq from "@/components/DetailsPage/Faq";

export default function page() {
  return (
    <div className="container mx-auto  flex items-center justify-between gap-5 mt-10">
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

        <div>
          <h1 className="text-base font-bold text-[#171717] mt-4">
            Key features:
          </h1>
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

        <div >
          <h1 className="text-base font-bold text-[#171717] mt-4">
            See the details
          </h1>

          <Faq/>
        </div>
      </div>
    </div>
  );
}
