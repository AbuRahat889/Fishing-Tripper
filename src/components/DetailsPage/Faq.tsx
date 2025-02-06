"use client";

import React from "react";
import { Collapse, Space } from "antd";// Import custom icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq: React.FC = () => {
  // Custom expand/collapse icon
  const expandIcon = ({ isActive }: { isActive?: boolean }) =>
    isActive ? (
      <IoIosArrowUp className="text-blue-500 text-2xl" />
    ) : (
      <IoIosArrowDown className="text-blue-500 text-lg" />
    );

  return (
    <Space direction="vertical" className="w-full mt-4">
      <Collapse
        collapsible="icon"
        expandIcon={expandIcon}
        expandIconPosition="end"
        className="border border-[#DADADA] w-full" // Custom border color
        items={[
          {
            key: "1",
            label: (
              <span className="text-base text-[#6C757D] font-bold">
                What’s included in the price?
              </span>
            ),
            children: <p className="text-base text-[#6C757D]">{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        expandIcon={expandIcon}
        expandIconPosition="end"
        className="border border-[#DADADA] w-full" // Custom border color
        items={[
          {
            key: "1",
            label: (
              <span className="text-base text-[#6C757D] font-bold">
                Targeted Species
              </span>
            ),
            children: <p className="text-base text-[#6C757D]">{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        expandIcon={expandIcon}
        expandIconPosition="end"
        className="border border-[#DADADA] w-full" // Custom border color
        items={[
          {
            key: "1",
            label: (
              <span className="text-base text-[#6C757D] font-bold">
               Boat Info
              </span>
            ),
            children: <p className="text-base text-[#6C757D]">{text}</p>,
          },
        ]}
      />
      <Collapse
        collapsible="icon"
        expandIcon={expandIcon}
        expandIconPosition="end"
        className="border border-[#DADADA] w-full" // Custom border color
        items={[
          {
            key: "1",
            label: (
              <span className="text-base text-[#6C757D] font-bold">
                Trips and Prices
              </span>
            ),
            children: <p className="text-base text-[#6C757D]">{text}</p>,
          },
        ]}
      />
    </Space>
  );
};

export default Faq;


