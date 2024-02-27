'use client'
import {useContext} from 'react';
import {AiFillInstagram , AiFillTwitterSquare}from "react-icons/ai";
import {FaFacebookSquare  } from "react-icons/fa";
import Link from "next/link"

//context
import { ServiceContext } from "../../context/ServiceProvider";


const Footer = () => {
  const serviceDetails = useContext(ServiceContext);

  const quickLinks = [
    "Quick Links",
    "about", 
    "services", 
    "work", 
    "contact"
  ];

  const location = [
    "New Jersey",
  ];

  return (
    <footer className=" divide-y ">
	<div className="md:w-9/12 flex  flex-col justify-between py-8 p-2 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
				<div className="flex items-center justify-center w-48 h-16 ">
			<Link  href="/" className="flex justify-center space-x-3 lg:justify-start">
        Logo
			</Link>
				</div>
				
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
      <ul>

        {quickLinks.map((item, index) => (
          <li className="mb-4" key={item} > <Link href={`/${item}`} > <span  className={`text-sm truncate  capitalize  ${index === 0?"font-bold": "hover:text-primary cursor-pointer "}`} key={index}>{item}</span></Link></li>
        ))}
        </ul>
			</div>
			<div className="space-y-3">
      <ul>
      <li className="mb-4"   ><span  className={`text-sm truncate capitalize  font-bold `} >Our services</span></li>

          { Object.keys(serviceDetails).map((key) => (
            <li className="mb-4" key={key}  > <Link href={`/services/${serviceDetails[key].serviceTitle.replace(/\s/g, "-").replace("/", ".")}`} ><span  className={`text-sm truncate capitalize  hover:text-primary cursor-pointer `} >{serviceDetails[key].serviceTitle}</span> </Link></li>
            
          ))}
        </ul>
			</div>
			<div className="space-y-3">
    <p className=" font-bold"> Location We Work</p>
    <div className="space-y-3">
      <ul>
          {location.map((item, index) => (
            <li className="mb-4" key={item}  ><span  className={`text-sm truncate capitalize   `} key={index}>{item}</span></li>
            
          ))}
        </ul>
			</div>
			</div>
			<div >
				<div className="uppercase  text-lg  ">Get in Touch</div>
				<div className="flex justify-start space-x-3">
					<AiFillInstagram title="instagram" className="cursor-pointer bg-gradient-to-r mt-2  hover:mt-1 duration-300 ease-in-out" size={30}/>
          <AiFillTwitterSquare title="twitter" className="cursor-pointer   mt-2  hover:mt-1 duration-300 ease-in-out" size={30}/>
          <FaFacebookSquare title="facebook" className="cursor-pointer  mt-2  hover:mt-1 duration-300 ease-in-out" size={30}/>
				</div>
			</div>
		</div>
	</div>
	<div className="py-2 bg-secondary text-white text-sm text-center ">© 2010 HVAC Company Co. All rights reserved.</div>
</footer>
  );
};

export default Footer;