import GroupTab from "@/components/Group-charterTab/GroupTab";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-[#F5F5F5] pt-[41px] pb-[31px] ">
        <div className="container mx-auto px-5 lg:px-0">
          <h1 className="text-2xl font-bold text-[#242424] leading-9">
            Florida / 10th September 2025 / 4 people
          </h1>
          <h1 className="text-2xl font-normal text-[#474747] leading-7 mt-2">
            4 Charters available
          </h1>
        </div>
      </div>
      <div className="container mx-auto bg-[#D9D9D9] mt-8">
        <h1 className=" text-center text-[40px] font-normal leading-10 text-[#242424] py-20 ">
          Group charter explanation goes here
        </h1>
      </div>

      <div>
        <GroupTab />
      </div>
    </div>
  );
}
