'use client'
import React from 'react'
import CountUp from 'react-countup';

const CompanyInfo = () => {
  return (
    <div className="flex  md:gap-0 gap-4 flex-col sm:flex-row bg-green-600 shadow-8Shadow text-white shadow-black  px-4 py-10 md:justify-around justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
            <p className=" lg:font-extrabold font-medium text-2xl">
             10+
            </p>
            <p>
              Years Business
            </p>
         
        </div>
        <div className="flex flex-col justify-center items-center  ">
         
            <p className=" lg:font-extrabold font-medium text-2xl">
              14k+
            </p>
            <p>
              Project Complete
            </p>
          
        </div>
        <div className="flex flex-col justify-center items-center  ">
       
            <p className=" lg:font-extrabold font-medium text-2xl ">
             24/8
            </p>
            <p>
              Always Support
            </p>
        
        </div>
        <div className="flex flex-col justify-center items-center  ">
          
            <p className=" lg:font-extrabold font-medium  text-2xl">
            <CountUp end={100} duration={4}/>%
            </p>
            <p>
              Work Success
            </p>
        
        </div>
      </div>
  )
}

export default CompanyInfo