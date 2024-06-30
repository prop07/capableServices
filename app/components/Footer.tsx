"use client";
import { useContext } from "react";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../image/logo.png";


//context
import { ServiceContext } from "../../context/ServiceProvider";

type Services = {
  [id: string]: {
    serviceDescription: string;
    serviceTitle: string;
  };
};

const Footer = () => {
  const serviceDetails = useContext<Services>(ServiceContext);

  const quickLinks = ["services", "contact", "about",];

  const location = [
    "New York",
    "New Jersey"];

  return (
    <footer className=" ">
      <div className=" flex bg-primary text-white  flex-col justify-around py-8 p-2 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex items-center justify-center w-auto sm:items-start ">
            <Link href={"/"}>
              <p className="relative h-24 w-44 bg-white rounded-lg ">
                <Image fill={true} style={{ objectFit: "contain" }} className="px-3" src={logo} alt="logo" />
                {/* Logo */}
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-center sm:text-start">
          <div className="space-y-3">
            <ul>
              <li className="mb-4 " key={"quick link"}>
                <span className={`text-sm truncate  capitalize font-bold `}>
                  Quick Link
                </span>
              </li>
              {quickLinks.map((item, index) => (
                <li className="mb-4" key={item}>
                  <Link href={`/${item}`}>
                    <span
                      className={`text-sm truncate  capitalize   cursor-pointer transition-al  `}
                      key={index}
                    >
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <ul>
              <li className="mb-4">
                <span className={`text-sm truncate  capitalize  font-bold `}>
                  Our services
                </span>
              </li>
              {Object.keys(serviceDetails).map((key) => (
                <li className="mb-4" key={key}>
                  <Link
                    href={`/services/${serviceDetails[key].serviceTitle
                      .replace(/\s/g, "-")
                      .replace("/", ".")}`}
                  >
                    <span
                      className={`text-sm truncate capitalize   cursor-pointer transition-all `}
                    >
                      {serviceDetails[key].serviceTitle}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className=" font-bold"> Location We Work</p>
            <div className="space-y-3">
              <ul>
                {location.map((item, index) => (
                  <li className="mb-4" key={item}>
                    <span
                      className={`text-sm truncate capitalize`}
                      key={index}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="uppercase  text-lg  ">Get in Touch</div>
            <div className="flex sm:justify-start justify-center space-x-3">
              <Link href="https://api.whatsapp.com/send?phone=+888 985321475212" target="_blank" passHref>
                <AiFillInstagram
                  title="instagram"
                  className="cursor-pointer bg-gradient-to-r mt-2  hover:mt-1 duration-300 ease-in-out"
                  size={30}
                />
              </Link>
              <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
                <AiFillTwitterSquare
                  title="twitter"
                  className="cursor-pointer   mt-2  hover:mt-1 duration-300 ease-in-out"
                  size={30}
                />
              </Link>
              <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
                <FaFacebookSquare
                  title="facebook"
                  className="cursor-pointer  mt-2  hover:mt-1 duration-300 ease-in-out"
                  size={30}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 border-t border-gray-100 bg-primary text-white text-xs text-center ">
        © 2010 HVAC Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
