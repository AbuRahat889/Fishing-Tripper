import PaymentCard from "@/components/Payment/PaymentCard";
import PaymentDetails from "@/components/Payment/PaymentDetails";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5 items-center mx-2">
        <PaymentDetails />
        <div>
          <PaymentCard />
        </div>
      </div>
    </div>
  );
}
