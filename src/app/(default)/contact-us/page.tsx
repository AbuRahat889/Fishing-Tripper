

"use client";
import Button from "@/components/ReUsible/Button";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="px-5 lg:px-0">
      <div className="bg-[#F5F5F5]">
        <h1 className="container mx-auto text-2xl text-[#242424] font-bold leading-9 py-10 px-5 lg:px-0">
          Contact us
        </h1>
      </div>

      <div className="container mx-auto mt-24 ">
        <h1 className="text-[40px] text-[#242424] font-bold">Get In Touch</h1>
        <h1 className="text-xl font-medium text-[#152536] my-7">
          Leave us a message
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* First Name */}
          <fieldset className={`border-2 border-[#0037FF] rounded-md px-3   `}>
            <legend className=" mx-5 px-5 text-base text-[#171717] font-bold">
              {" "}
              Name*
            </legend>

            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your first name"
              className="w-full mt-2  px-4 py-2 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {String(errors.name.message)}
              </p>
            )}
          </fieldset>

          {/* Email*/}
          <fieldset
            className={`border-2 border-[#0037FF] rounded-md px-3  relative transition-all `}
          >
            <legend className="block mx-5 px-5 text-base text-[#171717] font-bold">
              {" "}
              Email*
            </legend>

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full mt-2  px-4 py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {String(errors.email.message)}
              </p>
            )}
          </fieldset>

          {/* message*/}
          <fieldset
            className={`border-2 border-[#0037FF] rounded-md px-3  relative transition-all `}
          >
            <legend className="block mx-5 px-5 text-base text-[#171717] font-bold">
              {" "}
              Message*
            </legend>

            <textarea
              {...register("message", { required: "Your Message required" })}
              rows={5}
              placeholder="Your Message"
              className="w-full mt-2  px-4 py-2 outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">
                {String(errors.message.message)}
              </p>
            )}
          </fieldset>

          <Button className="mt-10" variant="secondary" type="submit">
            Book now
          </Button>
        </form>

        <div>
          <h1 className="text-base font-normal text-[#152536] leading-6">
            22-25 Portman Close, <br /> London, W1H 6BS, United Kingdom
          </h1>
          <h1 className="text-base font-normal text-[#152536] leading-6 my-10">
            +44 20 XXXXXXX
          </h1>
          <h1 className="text-base font-normal text-[#1565D8] leading-6 my-10">
            Fishingtripper@gmail.com
          </h1>
        </div>
      </div>
    </div>
  );
}
