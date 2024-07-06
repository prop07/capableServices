"use client";
import React, { useState, useContext, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DrawerNav from "../DrawerNav";




//context
import { ServiceContext } from "@/context/ServiceProvider";
const navLink = ["contact", "about", "blog"];

type Services = {
    [id: string]: {
        serviceDescription: string;
        serviceTitle: string;
        subCatagory: object
    };
};

const NavLinks = () => {
    const pathname = usePathname();
    const serviceDetails = useContext<Services>(ServiceContext);



    return (
            <div className="flex lg:gap-10 gap-6  w-full justify-end items-center">
                <div key={'home'}>
                    <Link href={`/`} >
                        <p className={`mb-0.5  cursor-pointer text-sm capitalize text-read font-semibold `}>
                            home
                        </p>
                        <div className={`h-0.5 rounded-full ${pathname === "/" ? "bg-primary" : "bg-transparent"}`}></div>
                    </Link>
                </div>
                <div className="group relative inline-block text-left">
                    <div >
                        <div className={` cursor-pointer flex justify-center items-center text-sm  capitalize  `}
                        >
                            <div
                                className={`mb-0.5 font-semibold text-read   `}
                                id="dropdown-menu"
                                aria-haspopup="true"
                            >
                                Services
                                <div className={`h-0.5 rounded-full ${pathname.includes("/services") ? "bg-primary" : "bg-transparent"}`}></div>
                            </div>
                            <IoMdArrowDropleft size={20} className=" text-read" />
                        </div>
                        {/* First Dropdown Content */}
                        <div className="hidden group-hover:block hover:block absolute top-4 right-46 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
                            {Object.keys(serviceDetails).length !== 0 ? <div className="py-1" role="none">
                                {/* Second Dropdown */}
                                {Object.keys(serviceDetails).map((key1) => (
                                    <div key={key1} className="group/items relative">
                                        <Link
                                            href={`/services/${serviceDetails[key1].serviceTitle
                                                .replace(/\s/g, "-")
                                                .replace("/", ".")}`}
                                        >
                                            <div className=" flex items-center cursor-pointer p-2 group-hover/items:bg-primary group-hover/items:text-white  hover:bg-primary hover:text-white text-xs  text-read font-semibold transition-all  ">
                                                {serviceDetails[key1].serviceTitle}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div> : <div className="text-center p-4">
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                {navLink.map((item) => (
                    <div key={item}>
                        <Link href={`/${item.replace(/\s/g, "-").replace("/", ".")}`}>
                            <p className={`mb-0.5  cursor-pointer text-sm  capitalize text-read font-semibold  `}>
                                {item}
                            </p>
                            <div className={`h-0.5 rounded-full ${pathname.includes(item) ? "bg-primary" : "bg-transparent"}`}></div>
                        </Link>
                    </div>
                ))}
                <div className=" justify-end items-center  w-3/12  md:flex hidden">
                    <span className="flex items-center rounded-full cursor-pointer  bg-primary  py-2  px-3 text-white text-medium  text-center ">
                        <Link className="flex items-center" href={"tel:+888 985321475212"}><FaPhoneAlt className="mr-2" /> Call now</Link>
                    </span>
                </div>
            </div>
    );
};

export default NavLinks;

