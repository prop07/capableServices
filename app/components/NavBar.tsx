"use client";
import React, { useState, useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown, FaAngleDown } from "react-icons/fa";
import Link from "next/link";


//context
import { ServiceContext } from "../../context/ServiceProvider";
const navLink = ["why us?", "blog", "contact", "about",];

type Services = {
  [id: string]: {
    serviceDescription: string;
    serviceTitle: string;
    subCatagory: object
  };
};

const Navbar = () => {
  const serviceDetails = useContext<Services>(ServiceContext);
  const [humBurgerMenu, setHumBurgerMenu] = useState(false);

  console.log("serviceDetails", serviceDetails)

  return (
    <div className="fixed w-full  justify-center shadow-md shadow-gray-200 z-20">
      <div className=" md:hidden flex justify-center items-center  p-2 text-white  bg-primary ">
        <span className=" flex text-sm items-center justify-center gap-1">
          Call Now: <FaPhoneAlt />
          +888 985321475212
        </span>
      </div>
      <div className="flex  w-full bg-white font-bold   md:px-16 px-4 h-16">
        <div className="flex justify-start items-center w-3/12">
          <Link href={"/"}>Logo</Link>
        </div>
        <div className="md:flex hidden md:gap-8 sm:gap-4 gap-2 md:w-6/12 w-full justify-center items-center">
          <div key={'home'}>
            <Link href={`/`} >
              <p className="mb-2  cursor-pointer font-bold  capitalize  hover:text-primary">
                home
              </p>
            </Link>
          </div>
          <div className="group relative inline-block text-left">
            {/* First Dropdown */}
            <div >
              <p
                className=" mb-2 flex  justify-center items-center cursor-pointer font-bold  capitalize  hover:text-primary"
                id="dropdown-menu"
                aria-haspopup="true"
              >
                Services
                <FaCaretDown className="ml-1" size={15} />
              </p>
              {/* First Dropdown Content */}
              <div className="hidden group-hover:block hover:block absolute top-5 right-46 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
            {Object.keys(serviceDetails).length !== 0 ? <div className="py-1" role="none">
                  {/* Second Dropdown */}
                  {Object.keys(serviceDetails).map((key) => (
                    <div key={key} className="group/items relative">
                      <Link href={`/services/${serviceDetails[key].serviceTitle.replace(/\s/g, "-").replace("/", ".")}`}>
                        <div className=" flex items-center cursor-pointer p-2 hover:bg-gray-100 text-sm  text-gray-800 capitalize ">
                          {serviceDetails[key].serviceTitle}
                          <FaAngleDown className="ml-1 group-hover/items:rotate-90   duration-200 ease-in-out" size={15} />
                        </div>
                      </Link>
                      {/* Second Dropdown Content */}
                      <div className="absolute group-hover/items:block  hidden inset-x-0 top-0  left-60  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="second-dropdown-menu">
                        <div className="py-1" role="none">
                          {Object.keys(serviceDetails[key].subCatagory).map((key,value) => ( 
                            <a key={key} href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100" role="menuitem">{key}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div> : <div className="text-center p-4">
    <div role="status">
        <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div> }   
              </div>
            </div>
          </div>
          {navLink.map((item) => (
            <div key={item}>
              <Link href={`/${item.replace(/\s/g, "-").replace("/", ".")}`}>
                <p className="mb-2 text-nowrap  cursor-pointer font-bold  capitalize  hover:text-primary">
                  {item}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden flex relative w-full justify-end items-center ">
          <IoMdMenu
            onClick={() => setHumBurgerMenu(!humBurgerMenu)}
            className={` cursor-pointer ${humBurgerMenu ? "hidden" : "block"}`}
            size={30}
          />
          <IoMdClose
            onClick={() => setHumBurgerMenu(!humBurgerMenu)}
            className={` cursor-pointer ${humBurgerMenu ? "block" : "hidden"}`}
            size={30}
          />
          <div className={`  bg-white  px-4 shadow-buttonShadow shadow-gray-300    absolute top-20   ${humBurgerMenu ? "block" : "hidden"}  `}>
            <div key={'mbHome'} className="flex flex-col justify-center items-center">
              <div >
                <Link href={`/`} onClick={() => setHumBurgerMenu(!humBurgerMenu)}>
                  <p className="mb-2 p-1  cursor-pointer   font-medium  text-base capitalize">
                    Home
                  </p>
                </Link>
              </div>
              <hr className=" text-gray-400 w-3/4 mx-auto " />
            </div>
            <div key={'mbServices'} className="flex flex-col justify-center items-center">
              <div >
                <Link href={`/services`} onClick={() => setHumBurgerMenu(!humBurgerMenu)}>
                  <p className="mb-2 p-1  cursor-pointer   font-medium  text-base capitalize">
                    Services
                  </p>
                </Link>
              </div>
              <hr className=" text-gray-400 w-3/4 mx-auto " />
            </div>
            {humBurgerMenu
              ? navLink.map((item) => (
                <div key={item} className="flex flex-col justify-center items-center">
                  <div >
                    <Link href={`/${item}`} onClick={() => setHumBurgerMenu(!humBurgerMenu)}>
                      <p className="mb-2 p-1  cursor-pointer   font-medium  text-base capitalize">
                        {item}
                      </p>
                    </Link>
                  </div>
                  <hr className=" text-gray-400 w-3/4 mx-auto " />
                </div>

              ))
              : null}
          </div>
        </div>
        <div className=" justify-end items-center  md:w-3/12 w-full md:flex hidden">
          <span className="flex items-center rounded-md cursor-pointer  bg-primary  py-2  px-3 text-white text-medium  text-center ">
            <FaPhoneAlt className="mr-2" /> Call now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

