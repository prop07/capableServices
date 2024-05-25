"use client"
import React, { useContext } from 'react'
import { ServiceContext } from "../../context/ServiceProvider";
import Image from "next/image";
import Link from "next/link";

type Services = {
  [id: string]: {
    image: string;
    serviceDescription: string;
    serviceTitle: string;
    subCatagory: object
  };
};


const ServicesCard = () => {
  const serviceDetails = useContext<Services>(ServiceContext);

  return (
    <div className='py-4 '>
      <div className="flex mx-auto justify-center items-center mb-2  sm:w-1/2">
        <div>
          <p className="lg:text-2xl text-xl text-gray-700 text-center  md:font-bold font-bold mb-0.5 uppercase ">
            Hvac Repair Nyc - Air Conditioner Installation In Brooklyn Ny
          </p>
        <div className="h-1 m-auto w-2/12 bg-primary  rounded-full "></div>
        </div>
      </div>
      <div className='grid mx-auto xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2 px-3 sm:px-0   '>
        {/* card  */}
        {Object.keys(serviceDetails).map((key) => (
          <Link key={key} href={`/services/${serviceDetails[key].serviceTitle.replace(/\s/g, "-").replace("/", ".")}`}>
            <div
              className="group relative cursor-pointer overflow-hidden mx-auto   p-4  border border-gray-50 hover:border-sky-500   shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm rounded-lg ">
              <span className="absolute  top-10 left-5 z-0 h-10 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[30]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className='flex items-center  '>
                  <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <Image height={40} width={40} src={serviceDetails[key].image} alt={serviceDetails[key].serviceTitle} />
                  </div>
                  <p className='ml-2 text-lg   font-bold text-gray-700  group-hover:text-white/90'>{serviceDetails[key].serviceTitle}</p>
                </div>
                <div
                  className="space-y-6  pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{serviceDetails[key].serviceDescription}</p>
                </div>
                <div className="pt-5 text-base  font-semibold leading-7">
                  <div>
                    <p className="text-sky-500 transition-all duration-300 group-hover:text-white">View Detail
                      &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServicesCard

