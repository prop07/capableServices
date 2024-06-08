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
    // const [activeCategory, setActiveCategory] = useState(null);

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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 220 }}
            role="presentation"
            className=" flex w-full relative  ml-2"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='absolute bg-gray-400 h-20 w-1  rounded-full justify-center top-[50vh] left-0'></div>
            <List>
                <div className="grid w-full">
                    <span className=" font-bold mb-2 w-full hover:bg-gray-200 px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><Link href={"/"}><p>Home</p></Link></span>
                    <span className=" font-bold flex items-center  px-2" >Services <MdOutlineKeyboardArrowLeft size={19} /></span>
                    <div className="">
                        {Object.entries(serviceDetails).map(([categoryId, category]) => (
                            <div key={categoryId} className=" justify-center border-b hover:bg-gray-200 border-gray-300">
                                <Link href={`/services/${category.serviceTitle
                                    .replace(/\s/g, "-")
                                    .replace("/", ".")}`}> <button
                                        className=" text-left text-sm font-semibold  py-2  px-2   flex gap-2 justify-between items-center"
                                        // onClick={() => handleCategoryClick(categoryId)}
                                        onClick={toggleDrawer(anchor, false)}
                                    >
                                        <p>{category.serviceTitle}</p>
                                        {/* <p>{activeCategory === categoryId ? <FaMinus size={15}/> : <FaPlus size={15}/>}</p> */}
                                    </button></Link>
                                {/* {activeCategory === categoryId && (
                                    <div className="mt-4 ml-2 ">
                                        {Object.entries(category.subCatagory).map(([subCategoryId, subCategory]) => (
                                            <div key={subCategoryId} className=" border-b border-gray-200 ">
                                                <h2 className="text-sm text-gray-800 hover:bg-gray-100 ">{subCategoryId}</h2>
                                            </div>
                                        ))}
                                    </div>
                                )} */}
                            </div>
                        ))}
                    </div>
                    <div className=" font-bold mb-2 mt-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><Link href={"/contact"}><p>Contact</p></Link></div>
                    <div className=" font-bold mb-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><Link href={"/about"}><p>About</p></Link></div>
                    <div className=" font-bold mb-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md" onClick={toggleDrawer(anchor, false)}><Link href={"/blog"}><p>Blog</p></Link></div>
                </div>
                
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button className='rounded-md' onClick={toggleDrawer(anchor, true)}>
                        <IoMdMenu size={30} />
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
            <Link href="https://api.whatsapp.com/send?phone=9867772654" target="_blank" passHref>
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