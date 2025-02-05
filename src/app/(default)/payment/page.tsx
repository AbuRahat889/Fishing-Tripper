"use client";

import PaymentCard from "@/components/Payment/PaymentCard";
import PaymentDetails from "@/components/Payment/PaymentDetails";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // Get the 'type' query param

  console.log(type, "this is payment type");
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
