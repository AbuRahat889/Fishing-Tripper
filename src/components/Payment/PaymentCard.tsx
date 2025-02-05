"use client";
import Image from "next/image";
import {
  FaCreditCard,
  FaMapMarkerAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";

import image from "@/assets/payment/payment.png";
import { FaHandHoldingDollar } from "react-icons/fa6";
// import { CiMoneyBill } from "react-icons/ci";

export default function PaymentCard() {
  return (
    <div className=" bg-[#F7F7F7] shadow-md w-full  lg:w-[345px]  ">
      {/* Image Section */}
      <Image
        src={image} // Replace with actual image URL
        alt="Boat trip"
        height={200}
        width={200}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Title & Location */}
        <h2 className="text-xl font-normal text-[#242424]">Title goes here</h2>
        <div className="flex items-center text-gray-500  mt-4 mb-6">
          <FaMapMarkerAlt className="text-yellow-500 mr-2" />
          <span className="text-base font-normal text-[#242424]">Florida</span>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Plan Details */}
        <h3 className="text-base font-bold text-[#171717] my-5">
          Plan details:
        </h3>
        <div className="text-sm text-gray-600 my-6 mt-2">
          <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Trip date:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              10/04/2025
            </span>
          </p>
          <p>
            <span className="text-base font-bold text-[#171717] my-2 mr-2">
              Group size:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              4 people
            </span>
          </p>
          <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Booking type:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              Private booking
            </span>
          </p>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Payment Details */}
        <h3 className="text-base font-bold text-[#171717] my-5">
          Payment terms:
        </h3>
        <div className="text-base text-gray-600 space-y-1 mt-2">
          <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Price:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              $800{" "}
            </span>
          </p>
          <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Deposit to pay today:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              $80
            </span>
          </p>
          {/* this is only for privite charter  */}
          <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Pay on the day:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              $800
            </span>
          </p>
          {/* this is only for group charter  */}
          {/* <p>
            <span className="text-base font-bold text-[#171717] mr-2">
              Payment taken if boat fills:
            </span>{" "}
            <span className="text-base font-normal text-[#242424] leading-7">
              $800
            </span>
          </p> */}
        </div>

        {/* Terms & Conditions Link */}
        <a
          href="#"
          className="text-[#0037FF] text-base font-normal leading-7 underline"
        >
          Payment terms and conditions
        </a>
      </div>

      <div className="p-4 rounded-md text-gray-700 space-y-4">
        {/* Deposit Information */}
        <div className="flex items-start gap-2">
          <FaCreditCard className="text-gray-500 h-8 w-8 mt-1" />
          <p>
            <span className="font-semibold">10% deposit</span> charged upfront
            by{" "}
            <span className="font-semibold text-gray-400">FishingBooker</span>{" "}
            to guarantee your reservation.
          </p>
        </div>

        {/* Payment Balance */}
        <div className="flex items-start gap-2">
          <FaHandHoldingDollar className="text-gray-500 h-8 w-8 mt-1" />
          <p>
            You&apos;ll pay the remaining balance on your trip{" "}
            <span className="font-bold">directly to the captain.</span>
          </p>
        </div>

        {/* USD Transactions Notice */}
        <p className="text-sm text-gray-600 ml-7">
          All our transactions are processed in{" "}
          <span className="font-semibold">USD.</span> Please note that the
          amounts displayed in other currencies are approximate and may vary
          based on exchange rates.
        </p>

        {/* Payment Methods */}
        <div className="flex items-start gap-2">
          {/* <FaRegMoneyBillAlt /> */}
          <FaRegMoneyBillAlt className="text-gray-500 h-6 w-6 mt-1" />

          <p className="text-wrap w-full">
            You can pay the captain with the following payment methods:{" "}
            <span className="font-bold">Visa.</span> When paying the remaining
            balance with a credit card, there is a{" "}
            <span className="font-semibold">0% fee.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
