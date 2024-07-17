import React from 'react';
import Link from "next/link";

//icons
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const SocialNav = () => {
return (
    <div className=' md:flex z-50   w-full  mt-24 fixed hidden flex-col items-end text-white '>
        <div className="absolute">
          <Link href="https://api.whatsapp.com/send?phone=+888 985321475212" target="_blank" passHref>
        <div className='bg-whatsappGreen hover:bg-green-600 flex justify-center cursor-pointer items-center h-24 w-12  rounded-tl-md duration-300 ease-in-out '>
        <FaWhatsapp  size={25}/>
        </div>  
        </Link>
        <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
        <div className=' bg-facebookBlue hover:bg-blue-600 flex justify-center cursor-pointer items-center h-24 w-12 duration-300 ease-in-out  '>
        <AiOutlineFacebook size={25}/>
        </div>
        </Link>
        <Link href="mailto:capableservicehvac@gmail.com" target="_blank" passHref>
        <div className=' bg-cyan-500 hover:bg-cyan-600 flex justify-center cursor-pointer items-center h-24  w-12  rounded-bl-md duration-300 ease-in-out '>
        <FiMail size={25}/>
        </div>
        </Link>   
        </div>
    </div>
)
}

export default SocialNav

