import React from 'react'
//icon
import { TiTick } from "react-icons/ti";

const InfoCard = () => {
  return (
    <div className=" bg-black   mx-auto  flex justify-center">
      <div className="   border border-gray-100 lg:border-none  shadow-xl   flex justify-center flex-1">
        <div className="flex-1 text-center hidden lg:flex">
          <div className=" w-full  bg-center bg-no-repeat  " style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/portrait-beautiful-asian-woman-yellow-clothshipsters-girl-wear-yellow-hat-take-picturethailand-people_44277-5348.jpg?w=1380')" }}>
          </div>
        </div>
        <div className=" lg:block hidden  p-6 sm:p-12  ">
          <div className="flex  md:gap-0 space-y-2 space-x-2 flex-col    text-white px-4 py-8 md:justify-around justify-center items-center" >
            <div className="flex gap-3  ">
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
        </div>
        <div className=" block lg:hidden w-full   " style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/portrait-beautiful-asian-woman-yellow-clothshipsters-girl-wear-yellow-hat-take-picturethailand-people_44277-5348.jpg?w=1380')" }}>
          <div className="flex bg-black  opacity-75   md:gap-0 space-y-2 space-x-2 flex-col    text-white px-4 py-8 md:justify-around justify-center items-center" >
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
    </div>
  )
}

export default InfoCard

