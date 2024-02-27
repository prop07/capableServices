"use client";
import React, { useState, useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";


//context
import { ServiceContext } from "../../context/ServiceProvider";
const navLink = ["about", "work", "contact"];




const Navbar = () => {
  const serviceDetails= useContext(ServiceContext);
  const [humBurgerMenu, setHumBurgerMenu] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="fixed w-full  justify-center  z-20">
      <div className=" md:hidden flex justify-center items-center  p-2 text-white  bg-primary ">
        <span className=" flex text-sm items-center justify-center gap-1">
          Call Now: <FaPhoneAlt />
          in order to save all your progress!
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
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" relative" key={'services'}>
              <Link href={`/services`} >
                <p className="group mb-2 flex gap-1 justify-center items-center cursor-pointer font-bold  capitalize  hover:text-primary">
              <span>services</span> 
                <IoIosArrowDown className=" group-hover:rotate-90 duration-500 ease-in-out" size={15}/>
                </p>
              </Link>
              { isDropdownVisible && 
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" absolute bg-white  w-60  shadow-buttonShadow shadow-black">
                <div  className="flex flex-col  ">
              {
                Object.keys(serviceDetails).map((key)=>(
                    <Link key={key} href={`/services/${serviceDetails[key].serviceTitle.replace(/\s/g, "-").replace("/", ".")}`} >
                  <div className=" cursor-pointer">
                      <p className="p-2  hover:bg-gray-200  font-medium text-base capitalize">
                        {serviceDetails[key].serviceTitle}
                      </p>
                  <hr className=" text-gray-400  mx-auto " />
                  </div>
                    </Link>
                    
                    
                ))
              }
              </div>
              </div>
              }
            
            </div>
          {navLink.map((item) => (
            <div key={item}>
              <Link  href={`/${item}`}>
                <p className="mb-2  cursor-pointer font-bold  capitalize  hover:text-primary">
                  {item}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden flex relative w-full justify-end items-center ">
          <IoMdMenu
            onClick={() => setHumBurgerMenu(!humBurgerMenu)}
            className={` cursor-pointer ${humBurgerMenu ? "hidden":"block"}`}
            size={30}
          />
          <IoMdClose
            onClick={() => setHumBurgerMenu(!humBurgerMenu)}
            className={` cursor-pointer ${humBurgerMenu ? "block":"hidden"}`}
            size={30}
          />
          <div className={`  bg-white  px-4 shadow-buttonShadow shadow-black    absolute top-20   ${humBurgerMenu ? "block":"hidden"}  `}>
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
          <span className="flex items-center cursor-pointer  bg-secondary  py-1  px-2 text-white text-medium  text-center ">
            <FaPhoneAlt className="mr-2" /> Call now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
