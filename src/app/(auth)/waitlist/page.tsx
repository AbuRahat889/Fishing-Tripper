"use client";

import Image from "next/image";
import Button from "@/components/ReUsible/Button";

import image from "@/assets/signup.png";
import logo2 from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const route = useRouter();
  const handleWaitlist = () => {
    route.push("/signup");
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Section */}
      <div className=" w-full md:w-1/2 relative bg-blue-600 pb-5 flex flex-col justify-center items-start text-white px-10">
        <div className=" max-w-3xl mr-auto px-0 md:px-10 lg:px-28">
          <Image
            src={logo2}
            alt="logo"
            height={100}
            width={100}
            className=" h-28 w-52"
          />
        </div>
        {/* <h1 className="text-3xl font-bold mb-4">
          Fishing <span className="text-white">Tripper</span>
        </h1> */}

        <div className="text-start max-w-3xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold leading-[52px] mb-2">
              Sign up today to join our waitlist!
            </h2>
            <p className="text-lg font-normal mb-6">
              Launching soon... Hire out private fishing charters or sign up to
              group day bookings!
            </p>
          </div>

          {/* Signup Form */}
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg mt-10">
            <label
              htmlFor="email"
              className="text-base font-bold text-[#171717] block mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Button
              onClick={handleWaitlist}
              variant="secondary"
              className="w-full mt-6 font-bold"
            >
              Join the waitlist
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative max-h-screen">
        <Image
          src={image} // Ensure 'image' is a valid path or URL
          alt="Fishing Trip"
          width={800} // Adjust width based on your image dimensions
          height={600} // Adjust height accordingly
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
