'use client'
import React from 'react'
import bgImage from "../../image/vectors/wave .png"
import Image from 'next/image';


const CompanyInfo = () => {
  return (
    <div className=''>
      <div className='relative h-[25vh]  sm:h-[20vh]'>
         <Image
        fill={true} style={{ objectFit: "fill"}}
        alt="hero"
        src={bgImage}
      /><div className="grid absolute inset-0   gap-4 grid-cols-2 lg:grid-cols-4   text-white  px-4 py-6 md:justify-between justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <p className=" lg:font-extrabold font-medium text-2xl">
            5+
          </p>
          <p className='text-center'>
            Years Business
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <p className=" lg:font-extrabold font-medium text-2xl">
            5k+
          </p>
          <p className='text-center'>
            Project Complete
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <p className=" lg:font-extrabold font-medium text-2xl">
            5k+
          </p>
          <p className='text-center'>
            Happy Client
          </p>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <p className=" lg:font-extrabold font-medium text-2xl ">
            24/7
          </p>
          <p className='text-center'>
            Always Support
          </p>
        </div>
      </div>
      </div>
      
    </div>

  )
}

export default CompanyInfo