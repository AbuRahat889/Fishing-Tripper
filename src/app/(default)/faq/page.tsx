import { Divider } from "antd";
import React from "react";
import image1 from "@/assets/Faq/faq1.png";
import image2 from "@/assets/Faq/faq2.png";
import Image from "next/image";
import Faq from "@/components/DetailsPage/Faq";

export default function Page() {
  return (
    <div>
      <div className="bg-[#F5F5F5] py-9 px-5 lg:px-0">
        <div className="container mx-auto px-5 lg:px-0">
          <h1 className="text-2xl text-[#242424] font-bold leading-9">
            Frequently asked questions
          </h1>
          <h1 className="text-2xl text-[#474747] font-normal leading-7">
            If the error persists, contact us below.
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-24 mt-14">
        <h1 className="text-[40px] text-[#152536] font-bold text-center md:text-start">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-[#6C757D] font-normal mt-2 text-center md:text-start">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <div className="my-6">
          <Divider style={{ borderColor: "#000", margin: "0px" }}></Divider>
          <Divider
            style={{ borderColor: "#000", margin: "3px 0 0 0" }}
          ></Divider>
        </div>

        <div className="relative w-full rounded-xl flex flex-col lg:flex-row gap-10 py-10">
          <div className="relative w-full h-64">
            <Image
              src={image1} // Replace with your image path in the public folder
              alt="Customer FAQ"
              height={200}
              width={200}
              // layout="fill"
              // objectFit="cover"
              className="brightness-80 w-full h-full object-cover"
            />
            <div className="absolute top-6 flex flex-col justify-center items-start px-6">
              <h1 className="text-white text-3xl font-bold leading-6">
                Customer FAQ
              </h1>
              <p className="text-white text-base font-normal leading-4 mt-3">
                Frequently asked questions from customers
              </p>
            </div>
          </div>

          <div className="relative w-full h-64">
            <Image
              src={image2} // Replace with your image path in the public folder
              alt="Customer FAQ"
              height={200}
              width={200}
              // layout="fill"
              // objectFit="cover"
              className="brightness-75 w-full h-full object-cover"
            />
            <div className="absolute top-6 flex flex-col justify-center items-start px-6">
              <h1 className="text-white text-3xl font-bold leading-6">
                Customer FAQ
              </h1>
              <p className="text-white text-base font-normal leading-4 mt-3">
                Frequently asked questions from customers
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-xl font-bold">Private hire</h1>
            <Faq />
          </div>
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-xl font-bold">Group booking</h1>
            <Faq />
          </div>
        </div>
      </div>
    </div>
  );
}
