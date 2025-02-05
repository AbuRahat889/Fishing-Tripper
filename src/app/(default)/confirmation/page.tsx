import React from "react";
import image1 from "@/assets/Carousel.png";
import Image from "next/image";
import Button from "@/components/ReUsible/Button";

export default function page() {
  return (
    <div>
      <div className="bg-[#F5F5F5] ">
        <div className="container mx-auto pt-10 pb-6 px-5 lg:px-2">
          <h1 className="text-2xl text-[#242424] font-bold leading-9">
            Your Fishing Trip is Confirmed!
          </h1>
          <h1 className="text-2xl text-[#474747] font-normal font-satoshi mt-2">
            Thanks for booking with us! We’ve sent the full details to your
            email at email@example.com. If you don’t see it, check your spam
            folder or contact us.
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-14  ml-auto items-center justify-between">
        <div className="container flex flex-col items-start justify-start lg:justify-center lg:items-center px-5 ">
          <div>
            <h1 className="text-3xl text-[#242424] font-bold leading-normal text-left ">
              Key booking details
            </h1>

            <div className="mt-6">
              <p className="text-base font-normal text-[#242424] ">
                Trip Name :{" "}
                <span className="text-[#878787]">
                  {" "}
                  Trolling and Dolphin Trip.
                </span>
              </p>
              <p className="text-base font-normal text-[#242424] ">
                Date & Time :{" "}
                <span className="text-[#878787]">
                  {" "}
                  12th September 2025, 4 PM.
                </span>
              </p>
              <p className="text-base font-normal text-[#242424] ">
                Meeting Point :
                <span className="text-[#878787]"> Marina Bay, Florida.</span>
              </p>
              <p className="text-base font-normal text-[#242424] ">
                Participants :<span className="text-[#878787]"> 4 people.</span>
              </p>
              <p className="text-base font-normal text-[#242424] ">
                Booking Reference Number:
                <span className="text-[#878787]"> #12345.</span>
              </p>
            </div>

            <div className="my-10">
              <h1 className="text-3xl text-[#242424] font-bold leading-normal ">
                What next?
              </h1>
              <p className="text-base font-normal text-[#878787] ">
                Arrive 15 minutes early at Marina Bay, Florida. <br /> Bring
                sunscreen, snacks, and any fishing gear you prefer.
              </p>
            </div>

            <div className="my-10">
              <h1 className="text-3xl text-[#242424] font-bold leading-normal ">
                Any questions?
              </h1>
              <p className="text-base font-normal text-[#878787] ">
                Contact us at{" "}
                <span className="text-[#0037FF]">support@example.com</span> or{" "}
                <span className="text-[#0037FF]">+1 (800) 123-4567.</span>
              </p>
            </div>
            <Button>Explore more trips</Button>
          </div>
        </div>

        <div className="">
          <Image
            src={image1}
            alt="image"
            height={200}
            width={200}
            className="w-full h-auto max-w-[700px] max-h-[500px] sm:w-[300px] sm:h-[200px] md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
