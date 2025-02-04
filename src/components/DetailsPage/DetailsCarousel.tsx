"use client";

import Image from "next/image";
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

      <div className="absolute bottom-[20px] left-[50%] translate-x-[-50%] z-[2]">
        <div className="flex items-center gap-2">
          <button>
            <Image
              src="/previous-arrow.svg"
              alt="Left arrow"
              height={14}
              width={14}
              className="object-contain product-next"
            />
          </button>
          <div className="product-pagination"></div>{" "}
          <button>
            <Image
              src="/next-arrow.svg"
              alt="Right arrow"
              height={14}
              width={14}
              className="object-contain product-prev"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCarousel;
