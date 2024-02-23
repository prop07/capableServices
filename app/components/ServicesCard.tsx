import React from 'react'
import { CiTempHigh } from "react-icons/ci";
import { PiThermometerColdLight } from "react-icons/pi";
import { MdSettingsSuggest } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";

const ServicesCard = () => {
  return (
    <div className="py-8">
    <div className="flex flex-col justify-center items-center">
      <p className="lg:text-3xl text-xl  md:font-extrabold font-bold mb-2 ">
        Our Hvac Service
      </p>
      <p className="text-gray-500">
        Choose best hvac service and latest technology
      </p>
    </div>
    <div className="  md:w-8/12 p-1  md:p-0 flex  justify-between m-auto my-4">
      <div className=" flex items-center justify-center flex-col">
       
          <div className=" flex items-center justify-center md:h-20 md:w-20 h-14 w-14 bg-gray-100   rounded-full">
            <CiTempHigh size={35} className="text-red-500  " />
          
        </div>
        <p className="mt-2 md:font-semibold md:text-base text-xs">Heating</p>
        <p className="sm:text-sm text-xs text-gray-500 text-center">(+977)9808035913</p>
      </div>
      <div className=" flex items-center justify-center flex-col">
       
          <div className=" flex items-center justify-center md:h-20 md:w-20 h-14 w-14 bg-gray-100   rounded-full">
            <PiThermometerColdLight size={30} className="text-blue-500  " />
          
        </div>
        <p className="mt-2 md:font-semibold md:text-base text-xs">Cooling</p>
        <p className="sm:text-sm text-xs text-gray-500 text-center">Safe and Quick</p>
      </div>
      <div className=" flex items-center justify-center flex-col">
       
          <div className=" flex items-center justify-center md:h-20 md:w-20 h-14 w-14 bg-gray-100   rounded-full">
            <GiComputerFan size={30} className="text-purple-500  " />
          
        </div>
        <p className="mt-2 md:font-semibold md:text-base text-xs">Ventilation</p>
        <p className="sm:text-sm text-xs text-gray-500 text-center">Online/On Delivery</p>
      </div>
      <div className=" flex items-center justify-center flex-col">
       
          <div className=" flex items-center justify-center md:h-20 md:w-20 h-14 w-14 bg-gray-100   rounded-full">
            <MdSettingsSuggest size={30} className="text-green-500  " />
         
        </div>
        <p className="mt-2 md:font-semibold md:text-base text-xs">Maintenance</p>
        <p className="sm:text-sm text-xs text-gray-500 text-center">Online/On Delivery</p>
      </div>
    </div>
  </div>
  )
}

export default ServicesCard