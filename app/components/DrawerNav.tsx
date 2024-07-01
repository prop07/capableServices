"use client"
import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useSwipeable } from 'react-swipeable';
import { ServiceContext } from "../../context/ServiceProvider";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

type Services = {
    [id: string]: {
        serviceDescription: string;
        serviceTitle: string;
        subCatagory: object
    };
};


const DrawerNav = () => {
    const serviceDetails = useContext<Services>(ServiceContext);
    const [isServiceDetails, setServiceDetails] = useState(false);

    // const handleCategoryClick = (categoryId) => {
    //     setActiveCategory(categoryId === activeCategory ? null : categoryId);
    // };
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const handlers = {
        right: useSwipeable({
            onSwipedRight: (eventData) => {
                setState({ ...state, right: false });
            },
        }),
        // Add other swipe handlers if needed for other anchors
    };

    const list = (anchor) => (
        <Box
            {...handlers[anchor]}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 240 }}
            role="presentation"
            className=" flex w-full h-full relative  bg-primary justify-center"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='absolute bg-white h-20 w-1 ml-2  rounded-full justify-center top-[43vh] left-0'></div>
            <List>
                <div className="grid w-full space-y-10 mt-4">
                    <span className=" font-bold  w-full text-white text-center   px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><Link href={"/"}><p>Home</p></Link></span>
                    <span className=" font-bold flex items-center justify-center text-white cursor-pointer  px-2" onClick={()=>setServiceDetails(!isServiceDetails)}>Services <MdOutlineKeyboardArrowLeft className={ ` transition-all ${isServiceDetails === true ? "-rotate-90":""}`} size={19} /></span>
                  {
                    isServiceDetails && 
                    <div className="space-y-6 ">
                        {Object.entries(serviceDetails).map(([categoryId, category]) => (
                            <div key={categoryId} className=" justify-center text-center text-sm ">
                               
                                        <span className='text-white' onClick={toggleDrawer(anchor, false)} > <Link href={`/services/${category.serviceTitle
                                    .replace(/\s/g, "-")
                                    .replace("/", ".")}`}>{category.serviceTitle}</Link></span>
                            </div>
                        ))}
                    </div>
                  }  
                    <div className=" font-bold text-white text-center  cursor-pointer px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><span><Link href={"/contact"}>Contact</Link></span></div>
                    <div className=" font-bold  text-white text-center cursor-pointer  px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><span><Link href={"/about"}>About</Link></span></div>
                    <div className=" font-bold  cursor-pointer text-white text-center  px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><span><Link href={"/blog"}>Blog</Link></span></div>
                </div>
                
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className='rounded-md' onClick={toggleDrawer(anchor, true)}>
                        <IoMdMenu className='text-white' size={30} />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        
                    >
                        <SocialNav/>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default DrawerNav;


const SocialNav = () => {
    return (
        <div className='  w-full   items-end text-white '>
            <div className=" flex">
            <Link href="https://api.whatsapp.com/send?phone=+888 985321475212" target="_blank" passHref>
            <div className='bg-whatsappGreen hover:bg-green-600 flex justify-center cursor-pointer items-center h-12 w-20  duration-300 ease-in-out '>
            <FaWhatsapp  size={25}/>
            </div>  
            </Link>
            <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
            <div className=' bg-facebookBlue hover:bg-blue-600 flex justify-center cursor-pointer items-center h-12 w-20 duration-300 ease-in-out  '>
            <AiOutlineFacebook size={25}/>
            </div>
            </Link>
            <Link href="https://www.facebook.com/CapableService" target="_blank" passHref>
            <div className=' bg-cyan-500 hover:bg-cyan-600 flex justify-center cursor-pointer items-center h-12  w-20   duration-300 ease-in-out '>
            <FiMail size={25}/>
            </div>
            </Link>   
            </div>
        </div>
    )
    }