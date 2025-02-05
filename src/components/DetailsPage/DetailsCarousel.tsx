"use client";

import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface productType {
  images: string[];
}

const DetailsCarousel = ({ product }: { product: productType }) => {
  return (
    <div className="relative product-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        speed={900}
        grabCursor={true}
        pagination={{
          el: ".product-pagination",
          clickable: true,
          type: "bullets", // Add this line to render bullets
        }}
        navigation={{
          nextEl: ".product-prev",
          prevEl: ".product-next",
        }}
        modules={[Pagination, Navigation]}
      >
        {product?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                src={image}
                alt={"Product name is not set."}
                width={300}
                height={300}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" ">
        <div className="flex items-center gap-2">
          <button className="absolute top-[50%] left-3  translate-x-[-50%] z-[2]">
            <IoIosArrowBack className="text-white text-3xl product-next" />
          </button>
          <div className="absolute bottom-5 flex items-center justify-center z-[2] product-pagination"></div>{" "}
          <button className="absolute top-[50%] right-3  translate-x-[-50%] z-[2]">
            <IoIosArrowForward className="text-white text-2xl product-prev" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCarousel;
