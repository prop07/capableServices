import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
const navLink = ["about", "services", "work",  "contact"];


const Navbar = () => {
  return (

  
  <div className="fixed   w-full   z-20"> 
   <div className=" md:hidden flex justify-center items-center  p-2 text-white  bg-primary ">
            <span className=" flex items-center justify-center gap-1">
           Call Now:   <FaPhoneAlt />
              in order to save all your progress!
            </span>
          </div>
    <div className="flex  w-full bg-white font-bold   md:px-16 px-4 h-16">
      
      <div className="flex justify-start items-center w-3/12">
        <Link  href={"/"}>
          Logo
        </Link>
      </div>
      <div className="flex md:gap-8 sm:gap-4 gap-2 md:w-6/12 w-full justify-center items-center">
        {navLink.map((item) => (
          <div key={item}>
            <Link  href={`/${item}`}>
              <p
                className="mb-2  cursor-pointer font-bold  capitalize  hover:text-primary" 
              >
                {item}
              </p>
            </Link>
          </div>
        ))}
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
