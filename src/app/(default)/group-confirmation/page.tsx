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
            You’re All Set for Your Group Fishing Adventure!
          </h1>
          <h1 className="text-2xl text-[#474747] font-normal font-satoshi mt-2">
            Thank you for joining this group trip! We’ve sent the trip details
            to your email at user’s email address. We’ll notify you as soon as
            the trip is fully booked and confirmed by the captain.
          </h1>
        </div>
      </div>

      <div className=" flex gap-16 flex-col-reverse justify-center lg:flex-col xl:flex-row xl:justify-end ml-auto items-center  ">
        <div className="container flex flex-col items-center lg:items-center xl:items-end justify-start lg:justify-end px-5 lg:px-2 xl:mx-7 ">
          <div className="  mr-0 lg:mr-32 ">
            <div className="p-3 border-2 my-10 border-[#FFE432] bg-[#FDFFD8]">
              Once the group is full, you’ll receive a final confirmation that
              this trip is going ahead.
            </div>
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
              <p className="text-base font-normal text-[#878787] mt-6">
                Invite your friends to join this trip! Share this{" "}
                <span className="text-[#0037FF]"> link</span> to fill the
                remaining spots.
              </p>
            </div>

            <div className="my-10">
              <h1 className="text-3xl text-[#242424] font-bold leading-normal ">
                What next?
              </h1>
              <p className="text-base font-normal text-[#878787] ">
                We have taken your deposit, we’ll let you know once the trip is
                going ahead, you’ll <br /> then pay the remainder amount on the
                day. <br /> <br /> If the group booking isn’t going ahead, we
                will refund your deposit back to your <br /> payment method.
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
