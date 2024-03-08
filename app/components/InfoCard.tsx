import React from 'react'
//icon
import { TiTick } from "react-icons/ti";

const InfoCard = () => {
  return (
    <div className="flex  md:gap-0 space-y-2 space-x-2 flex-col 2xl:flex-row bg-secondary text-white px-4 py-8 md:justify-around justify-center items-center">
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center mt-2 rounded-full">
        <TiTick size={25} />
      </div>
      <div className="lg:w-80 w-52">
        <p className=" lg:font-semibold font-medium text-lg mb-2">
          Become Self-sufficent
        </p>
        <p>
          The syntax allows us to dynamically apply the primary and
          secondary colors defined in the
        </p>
      </div>
    </div>
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center mt-2  rounded-full">
        <TiTick size={25} />
      </div>
      <div className="lg:w-80 w-52">
        <p className=" lg:font-semibold font-medium text-lg mb-2">
          Save on your energy bills
        </p>
        <p>
          The syntax allows us to dynamically apply the primary and
          secondary colors defined in the
        </p>
      </div>
    </div>
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center mt-2  rounded-full">
        <TiTick size={25} />
      </div>
      <div className="lg:w-80 w-52">
        <p className=" lg:font-semibold font-medium text-lg mb-2">
          Reduce your carbon emission
        </p>
        <p>
          The syntax allows us to dynamically apply the primary and
          secondary colors defined in the
        </p>
      </div>
    </div>
  </div>
  )
}

export default InfoCard