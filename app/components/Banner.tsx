import React from "react";
import Link from "next/link";
import banner from "../../image/banner.png";
import Image from "next/image";

const Banner = () => {

    return (
        <div className="relative "  style={{ height: "60vh" }}>
        <Image
        height={1500}
        width={1500}
          src={banner.src}
          alt="banner"
          className="w-full  object-contain xl:block hidden "
          style={{ height: "60vh" }}
        />
        <Image
        height={500}
        width={500}
          src="https://img.freepik.com/free-vector/isometric-air-conditioning-concept-with-worker-men-installing-cooking-system-vector-illustration_1284-80987.jpg?w=996&t=st=1708084495~exp=1708085095~hmac=5846913ad445dd7650146a26937a25c22eb3cf08c3ee070425eeb9333ace4b21"
          alt="banner"
          className="w-full  xl:hidden block "
          style={{ height: "60vh" }}
        />
        <div className="absolute left-14  xl:top-32 md:top-14 top-28  left  ">
          <p className="mb-2 text-gray-600">Get Yours</p>
          <p className=" lg:text-6xl md:w-3/4 text-4xl font-extrabold">
          Welcome to Capable Service - Your Trusted <span className=" text-green-600 ">HVAC</span>  Partner in New Jersey.
          </p>
          <p className="mt-2 md:w-1/2 w-3/4  text-base  xl:text-gray-900 text-black sm:block hidden ">
        At Capable Service, we take pride in delivering top-notch HVAC solutions with a commitment to excellence. Our mantra is simple: Quality Services is Our Guarantee.
          </p>
          <div className="flex   gap-4 mt-12 ">
    <Link  href={"/contact"}>
      <span className=" cursor-pointer  bg-green-600 hover:bg-green-500  py-4 lg:px-8 px-4 text-white text-medium text-center  border-4 border-black hover:text-black font-extrabold shadow-buttonShadow shadow-black duration-300 ease-in-out  ">
      Get a quote
      </span>
      </Link>
      <Link  href={"/services"}>
      <span className=" cursor-pointer  bg-green-600 hover:bg-green-500  py-4 lg:px-8 px-4 text-white text-medium text-center  border-4 border-black hover:text-black font-extrabold shadow-buttonShadow shadow-black duration-300 ease-in-out   ">
        Our services
      </span>
      </Link>
    </div>
        </div>
        </div>
    );
};

export default Banner;


