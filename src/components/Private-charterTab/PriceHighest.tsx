import React from "react";
import TopChartersCard from "../Home/TopChartersCard";
import { cardData } from "@/constant/TopChartersInfo";

export default function PriceHighest() {
  return (
    <div>
      <div className="">
        {cardData?.map((card) => (
          <TopChartersCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
