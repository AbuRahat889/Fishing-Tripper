import React from "react";

import { cardData } from "@/constant/SearchDestinations";
import SearchDestinationsCard from "./SearchDestinationsCard";

export default function SearchDestinations() {
  return (
    <div className="container mx-auto">
      <h1 className="text-[#242424] text-2xl font-bold my-6">
        Search our destinations{" "}
      </h1>

      <div className="grid grid-cols-3 grid-rows-1 gap-6 justify-center items-center">
        {cardData.map((cardInfo, index) => (
          <SearchDestinationsCard key={index} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
}
