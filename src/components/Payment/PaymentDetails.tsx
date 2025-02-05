
"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

import visa from "@/assets/payment/visa.svg";
import american from "@/assets/payment/american.svg";
import apple from "@/assets/payment/apple.svg";
import masteCard from "@/assets/payment/masteCard.svg";
import mestero from "@/assets/payment/mestero.svg";
import payPal from "@/assets/payment/payPal.svg";
import Button from "../ReUsible/Button";
import { useRouter } from "next/navigation";

export default function PaymentDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };
  const route = useRouter();
  const handleBook = () => {
    route.push("/private-confirmation");
    route.push("/group-confirmation");
  };

  return (
    <div className="">
      <h2 className="text-3xl text-[#242424] font-bold">Enter your details</h2>
      <p className="text-[#878787] font-normal font-satoshi mt-3">
        We just need a few details to get your Fishing Tripper day booked.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* First Name */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            First name*
          </label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            placeholder="Enter your first name"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">
              {String(errors.firstName.message)}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Last name*
          </label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Enter your last name"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">
              {String(errors.lastName.message)}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Email address*
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+\.\S+$/,
            })}
            placeholder="Enter your email address"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm">
              {String(errors.email.message)}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Mobile number*
          </label>
          <input
            type="tel"
            {...register("mobile", { required: "Mobile number is required" })}
            placeholder="Enter your mobile number"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">
              {errors.mobile?.message?.toString()}
            </p>
          )}
        </div>

        {/* Marketing Consent Checkbox */}
        <div className="col-span-2 flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            {...register("marketingConsent")}
            className="w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
          />
          <p className="text-[#9E9E9E] text-[18px] font-normal">
            By providing us with your email address, you confirm that we can use
            it to share your booking information with you and to send marketing
            collateral.
          </p>
        </div>

        {/* paymet information */}

        <h2 className="text-3xl text-[#242424] font-bold">
          Enter your details
        </h2>

        <div className="flex justify-end gap-2 mt-2">
          <Image src={american} alt="american" className="h-6" />
          <Image src={apple} alt="american" className="h-6" />
          <Image src={mestero} alt="american" className="h-6" />
          <Image src={masteCard} alt="american" className="h-6" />
          <Image src={payPal} alt="american" className="h-6" />
          <Image src={visa} alt="american" className="h-6" />
        </div>

        {/* Choose payment method */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Choose payment method
          </label>
          <input
            type="text"
            {...register("payment", { required: "Choose payment method" })}
            placeholder="Choose payment method"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.payment && (
            <p className="text-red-500 text-sm">
              {String(errors.payment.message)}
            </p>
          )}
        </div>

        {/* Expiry date */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Expiry date
          </label>
          <input
            type="text"
            {...register("expiryDate", { required: "Choose expiry Date" })}
            placeholder="MM/YY"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm">
              {String(errors.expiryDate.message)}
            </p>
          )}
        </div>

        {/* Card number */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Card number
          </label>
          <input
            type="card"
            {...register("CardNumber", {
              required: "Enter your 16 digit card number",
            })}
            placeholder="Enter your 16 digit card number"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.CardNumber && (
            <p className="text-red-500 text-sm">
              {String(errors.CardNumber.message)}
            </p>
          )}
        </div>

        {/* Security code */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Security code
          </label>
          <input
            type="text"
            {...register("securityCode", { required: "Security code" })}
            placeholder="Security code"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.securityCode && (
            <p className="text-red-500 text-sm">
              {String(errors.securityCode.message)}
            </p>
          )}
        </div>

        {/* Name on card */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Name on card
          </label>
          <input
            type="text"
            {...register("cardName", {
              required: "Enter your name as it appears on card",
            })}
            placeholder="Enter your name as it appears on card"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.cardName && (
            <p className="text-red-500 text-sm">
              {String(errors.cardName.message)}
            </p>
          )}
        </div>

        {/* Billing country */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            Billing country
          </label>
          <input
            type="text"
            {...register("country", {
              required: "E.g United States",
            })}
            placeholder="E.g United States"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">
              {String(errors.country.message)}
            </p>
          )}
        </div>

        {/* Enter your ZIP or Postal code */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-base text-[#171717] font-bold">
            ZIP/Postal code
          </label>
          <input
            type="text"
            {...register("zipCode", {
              required: "Enter your ZIP or Postal code",
            })}
            placeholder="Enter your ZIP or Postal code"
            className="w-full mt-2 border border-[#E0E0E0]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm">
              {String(errors.zipCode.message)}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <Button onClick={handleBook} type="submit">
            Book now
          </Button>
        </div>
      </form>
    </div>
  );
}
