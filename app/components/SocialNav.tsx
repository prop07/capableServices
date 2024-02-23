import React from 'react';
import Link from "next/link";

//icons
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const SocialNav = () => {
return (
    <div className=' z-10 w-full  mt-24 fixed flex flex-col items-end text-white '>
        <Link href="https://api.whatsapp.com/send?phone=9867772654" target="_blank" passHref>
        <div className='bg-whatsappGreen flex justify-center items-center h-16 w-16 '>
        <FaWhatsapp size={25}/>
        </div>  
        </Link>
        <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
        <div className=' bg-facebookBlue flex justify-center items-center h-16 w-16'>
        <AiOutlineFacebook size={25}/>
        </div>
        </Link>
        <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
        <div className=' bg-instagramPurple flex justify-center items-center h-16 w-16'>
        <FaInstagram size={25}/>
        </div>
        </Link>
    </div>
)
}

export default SocialNav

