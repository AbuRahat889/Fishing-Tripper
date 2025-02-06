import Button from "@/components/ReUsible/Button";
import Image from "next/image";
import React from "react";
import logo2 from "@/assets/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaApple, FaFacebookF } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-full min-h-screen   relative bg-blue-600">
      <div className="container mx-auto py-28 flex flex-col justify-center items-center text-white">
        <Image
          src={logo2}
          alt="logo"
          height={100}
          width={100}
          className=" h-28 w-52"
        />

        <div className="text-center  mx-auto">
          <div>
            <h2 className="text-4xl font-bold leading-[52px] mb-2 w-[450px]">
              Log in to your account
            </h2>
            <p className="text-lg font-normal font-satoshi mb-6">
              Already have an account?
              <a href="/signup" className="text-[#FF9500] cursor-pointer">
                {" "}
                Sign up
              </a>
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <div>
              <label
                htmlFor="email"
                className="text-base text-start font-bold text-[#171717] block mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full border text-[#9E9E9E]  border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="text-base text-start font-bold text-[#171717] block mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Set your password"
                className="w-full border text-[#9E9E9E] border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex justify-between items-center py-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-gray-400 rounded-sm focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-[#171717] text-base font-normal leading-7">
                  Remember me
                </span>
              </label>
              <h1 className="text-base text-[#3D53F5] font-bold leading-7">
                Forgot your Password?
              </h1>
            </div>

            <Button variant="secondary" className="w-full  font-bold">
              Log in
            </Button>

            <h1 className="text-base font-normal text-[#616161] pt-8 pb-4">
              Or continue with
            </h1>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="ghost">
                <BsTwitter />
              </Button>
              <Button variant="ghost">
                <FaFacebookF />
              </Button>
              <Button variant="ghost">
                <FaApple />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
