import React from 'react'
//icon
import { TiTick } from "react-icons/ti";

const InfoCard = () => {
  return (
    <div className="flex md:gap-0 gap-4 flex-col lg:flex-row bg-secondary text-white px-4 py-8 md:justify-around justify-center items-center">
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center rounded-full">
        <TiTick size={25} />
      </div>
      <div className="w-48">
        <p className=" lg:font-semibold font-medium text-lg mb-4">
          Become Self-sufficent
        </p>
        <p>
          The syntax allows us to dynamically apply the primary and
          secondary colors defined in the
        </p>
      </div>
    </div>
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center rounded-full">
        <TiTick size={25} />
      </div>
      <div className="w-48">
        <p className=" lg:font-semibold font-medium text-lg mb-4">
          Save on your energy bills
        </p>
        <p>
          The syntax allows us to dynamically apply the primary and
          secondary colors defined in the
        </p>
      </div>
    </div>
    <div className="flex gap-3 ">
      <div className=" border-2 border-white h-12 w-12 flex justify-center items-center rounded-full">
        <TiTick size={25} />
      </div>
      <div className="w-48">
        <p className=" lg:font-semibold font-medium text-lg mb-4">
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