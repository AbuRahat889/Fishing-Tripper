import React from "react";
import { cardData } from "@/constant/TopChartersInfo";
import GroupChartersCard from "./GroupChartersCard";

export default function GroupRecommended() {
  return (
    <div>
      <div className="">
        {cardData?.map((card) => (
          <GroupChartersCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
