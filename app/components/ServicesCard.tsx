"use client"
import React, { useContext } from 'react'
import { ServiceContext } from "../../context/ServiceProvider";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench, faGears, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';

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

  if (!serviceDetails || Object.keys(serviceDetails).length === 0) {
    return <Loading />;
  }

  return (
    <div className='py-4 '>
      <div className="flex mx-auto justify-center items-center mb-2  sm:w-1/2">
        <div>
          <p className='text-center font-semibold text-read'>Our Core Service</p>
          <p className="lg:text-2xl text-xl text-gray-700 text-center  md:font-bold font-bold mb-0.5 uppercase ">
            Complex Industrial and Mechanical HVAC Services
          </p>
        </div>
      </div>
      <div className='grid mx-auto xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2 px-3 sm:px-0   '>
        {/* card  */}
        {Object.keys(serviceDetails).map((key) => (
          <div key={key} ><Link href={`/services/${serviceDetails[key].serviceTitle.replace(/\s/g, "-").replace("/", ".")}`}>
            <div
              className="group relative cursor-pointer overflow-hidden mx-auto   p-4  border border-gray-50 hover:border-sky-500   shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl max-w-sm rounded-lg ">
              <span className="absolute  top-5 left-5 z-0 h-8 w-8 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[30]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <div className=' items-center  '>
                  <div className="grid h-12 w-12 p-2 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    {serviceDetails[key].serviceTitle.includes("Repair") ? (
                      <FontAwesomeIcon icon={faScrewdriverWrench} className='text-white' size='lg' />
                    ) :
                      (
                        serviceDetails[key].serviceTitle.includes("Install") ? (
                          <FontAwesomeIcon icon={faGears} className='text-white' size='lg' />
                        ) :
                          (<FontAwesomeIcon icon={faHeartCircleCheck} className='text-white' size='lg' />)
                      )
                    }
                  </div>
                  <p className=' text-lg mt-2   font-bold text-gray-700  group-hover:text-white/90'>{serviceDetails[key].serviceTitle}</p>
                </div>
                <div
                  className="space-y-6  text-sm leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <p>{serviceDetails[key].serviceDescription}</p>
                </div>
                <div className="pt-5 text-base  font-semibold leading-7">
                  <div>
                    <p className="text-sky-500 text-end transition-all duration-300 group-hover:text-white">View Detail
                      &rarr;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </div>

        ))}
      </div>
      {/* <Loading/> */}
    </div>
  )
}

export default ServicesCard



const Loading = () => {
  return (
    <div className='py-4'>
      <div className='grid mx-auto xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2 px-3 sm:px-0   '>
        {[...Array(3).keys()].map((index) => (

          <div
            key={index}
            className="border border-gray-100 rounded-md px-3 py-2 mx-auto mb-3 max-w-sm cursor-wait  "
          >
            <div className="animate-pulse flex gap-2 ">
              <div>
                <div className="h-20 w-20 bg-gray-300  rounded-full"></div>
              </div>
              <div className="flex-1 space-y-3 py-1">
                <div className="h-2 bg-gray-300  w-[180px]  rounded"></div>
                <div className='h-2'></div>
                <div className="h-2 bg-gray-300 xl:w-[180px]  sm:w-[240px] w-[180px] rounded"></div>
                <div className="h-2 bg-gray-300 xl:w-[180px]  sm:w-[240px] w-[180px] rounded"></div>
                <div className="h-2 bg-gray-300 xl:w-[180px]  sm:w-[240px] w-[180px] rounded"></div>
                <div className="h-2 bg-gray-300 xl:w-[180px]  sm:w-[240px] w-[180px] rounded"></div>
                <div className="h-2  bg-gray-300 w-[50px] rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

