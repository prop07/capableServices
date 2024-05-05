import React from "react";
import Link from "next/link";
import banner13 from "../../image/banner1-3.png";
import banner12 from "../../image/banner1-2.png";
import banner11 from "../../image/banner1-1.png";


import Image from "next/image";

const Banner = () => {
  return (
    <main className="relative bg-white  ">
      <div className="sm:h-16 h-8 w-full"></div>
      <div className="bg-white  flex  items-center ">
        <div className="absolute sm:w-2/3 lg:w-2/5 flex flex-col md:p-0 p-4 ">
          <h1 className=" uppercase 2xl:text-5xl text-4xl  font-black flex flex-col   text-gray-800">
            Capable Service your trusted{" "}
            <span className=" text-primary ">HVAC</span> partner in New Jersey & New York
          </h1>
          <p className="mt-2 md:w-11/12 w-4/6  text-base   text-gray-800  sm:block hidden ">
            At Capable Service, we take pride in delivering top-notch HVAC
            solutions with a commitment to excellence. Our mantra is simple:
            Quality Services is Our Guarantee.
          </p>
          <div className="flex gap-2 mt-8">
            <Link href={"/contact"}>
              <span className=" cursor-pointer  bg-primary py-4 lg:px-4 px-4 text-white md:text-base  text-sm text-center  font-extrabold rounded-md">
                Get a quote
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            height={1500}
            width={1500}
            src={banner13}
            alt="banner"
            className=" m-auto py-6 xl:block hidden  "
            style={{ height: "50vh" }}
          />
            <Image
            height={800}
            width={800}
            src={banner12}
            alt="banner"
            className="  m-auto py-6 xl:hidden block md:ml-16 ml-0 md:object-none object-contain   "
            style={{ height: "50vh" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
