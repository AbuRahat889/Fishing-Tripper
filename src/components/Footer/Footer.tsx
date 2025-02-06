import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import logo from "@/assets/logo2.svg";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-24">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-[131px] justify-between items-center border-t pt-[52px]">
          {/* Left Section */}
          <div className="px-5 lg:px-0">
            <Image
              src={logo}
              alt="logo"
              height={100}
              width={100}
              className="w-36 h-7"
            />
            {/* <h2 className="text-lg font-bold">Fishing Tripper</h2>   */}

            <p className="text-[#757575] text-sm font-normal mt-6">
              I&apos;m surprised you had the courage to take the <br />{" "}
              responsibility yourself. Leave that to me.
            </p>

            <div className="flex gap-8 items-center my-10">
              <FaTwitter
                className="text-[#171717] h-5 w-5 cursor-pointer hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                size={20}
              />
              <FaFacebookF
                className="text-[#171717] h-5 w-5 cursor-pointer hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                size={20}
              />
              <FaDiscord
                className="text-[#171717] h-5 w-5 cursor-pointer hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                size={20}
              />
              <FaInstagram
                className="text-[#171717] h-5 w-5 cursor-pointer hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                size={20}
              />
              <FaTelegramPlane
                className="text-[#171717] h-5 w-5 cursor-pointer hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                size={20}
              />
            </div>
            <p className="text-[#424242] text-sm font-normal mt-4 hover:text-[#FF9500] transition-colors duration-300 ease-in-out">
              Copyright ©2022. Cabana Inc.
            </p>
          </div>

          {/* Footer Links */}

          <div className="flex-1 flex flex-wrap gap-5 lg:flex-row lg:justify-between items-start lg:items-center px-5 lg:px-0">
            <div>
              <h3 className="text-base text-[#171717] font-bold">HEADING</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #5
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base text-[#171717] font-bold">HEADING</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #5
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base text-[#171717] font-bold">HEADING</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-[#757575] hover:text-[#FF9500] transition-colors duration-300 ease-in-out"
                  >
                    Footer Link #5
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
