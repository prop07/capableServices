'use client'
import React from 'react'
import CountUp from 'react-countup';

const CompanyInfo = () => {
  return (
    <div className="grid   gap-4 grid-cols-2 lg:grid-cols-5  bg-primary  text-white  px-4 py-6 md:justify-between justify-center items-center">
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
      <div className="flex flex-col justify-center items-center  ">

        <p className=" lg:font-extrabold font-medium  text-2xl">
          <CountUp end={100} duration={5} />%
        </p>
        <p className='text-center'>
          Work Success
        </p>
      </div>
    </div>
  )
}

export default CompanyInfo