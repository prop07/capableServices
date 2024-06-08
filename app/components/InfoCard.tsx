import React from 'react'
//icon
import { TiTick } from "react-icons/ti";
import Image from 'next/image';

const InfoCard = () => {
  return (
    <div className="    mx-auto  flex justify-center rounded-md shadow-md">
      <div className="    shadow-xl   flex justify-center flex-1">
        <div className="flex-1 relative text-center hidden lg:flex">
          <Image fill={true} style={{ borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px" ,objectFit: "cover"}} src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/otherImage%2FunderAc.jpg?alt=media&token=450b4d3a-421b-44ff-a234-705224243e19"} alt="family image"/>
          </div>
        </div>
        <div className=" lg:block hidden bg-black rounded-tr-md rounded-br-md   p-6 sm:p-12  ">
          <div className="flex  md:gap-0 space-y-2 space-x-2 flex-col    text-white px-4 py-8 md:justify-around justify-center items-center" >
            <div className="flex gap-5  ">
              <div className=" border-2 border-white h-12 w-12 flex justify-center items-center mt-2 rounded-full">
                <TiTick size={25} />
              </div>
              <div className="lg:w-80 w-52">
                <p className=" lg:font-semibold font-medium text-lg mb-2">
                  Become Self-sufficent
                </p>
                <p>
                Achieve self-sufficiency with top-notch HVAC solutions. Ensure year-round comfort and efficiency in your space.
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
                Cut energy costs with efficient HVAC solutions. Enjoy lower bills and a comfortable, self-sufficient home.
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
                Slash your carbon footprint with eco-friendly HVAC systems. Go green while staying cool and comfy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" block lg:hidden w-full " style={{  objectFit:"cover", backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/otherImage%2FACImage.jpg?alt=media&token=9af70431-467d-4e20-9f02-5f0c05fcf3b2')" }}>
          <div className="flex bg-black  opacity-[0.6]   md:gap-0 space-y-2 space-x-2 flex-col    text-white px-4 py-8 md:justify-around justify-center items-center" >
            <div className="flex gap-3  ">
              <div className=" border-2 border-white  h-12 w-12 flex justify-center items-center mt-2 rounded-full">
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
        </div>
      </div>
  )
}

export default InfoCard

