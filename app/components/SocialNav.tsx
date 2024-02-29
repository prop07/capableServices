import React from 'react';
import Link from "next/link";

//icons
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const SocialNav = () => {
return (
    <span className=' md:flex -z-40  w-full  mt-24 fixed hidden flex-col items-end text-white '>
        <Link href="https://api.whatsapp.com/send?phone=9867772654" target="_blank" passHref>
        <div className='bg-whatsappGreen flex justify-center cursor-pointer items-center h-16 w-16 hover:scale-110 duration-300 ease-in-out '>
        <FaWhatsapp  size={25}/>
        </div>  
        </Link>
        <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
        <div className=' bg-facebookBlue flex justify-center cursor-pointer items-center h-16 w-16 hover:scale-110 duration-300 ease-in-out '>
        <AiOutlineFacebook size={25}/>
        </div>
        </Link>
        <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
        <div className=' bg-instagramPurple flex justify-center cursor-pointer items-center h-16 w-16 hover:scale-110 duration-300 ease-in-out'>
        <FaInstagram size={25}/>
        </div>
        </Link>
    </span>
)
}

export default SocialNav

