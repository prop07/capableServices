import React from 'react'
import TextHeader from './UI/text/TextHeader'
import Link from 'next/link'

export default function HowItWorks({ category, ...props }) {
    console.log("category", category);
    return (
        <div className="">
            <div className="container mx-auto px-2 space-y-3 ">
                <div className="mx-auto max-w-3xl text-center space-y-3">
                    <TextHeader title="How It Works" />
                    <p className=" text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                        Discover the seamless process of scheduling an appointment, getting a quote, and enjoying a hassle-free
                        work done.
                    </p>
                </div>
                <div className="relative    ">
                    <div className="absolute inset-0  " />
                    {
                        category === "System-Installation" ?
                            <div className="relative z-10 grid grid-cols-1 gap-8  py-12 sm:grid-cols-3 sm:gap-0 rounded-lg bg-white border border-gray-100 shadow-lg ">
                                <div className="group flex flex-col items-center  space-y-4 sm:border-r sm:border-gray-200 ">
                                    <div className="relative flex h-16 w-16 items-center justify-center  rounded-full bg-gray-900  text-white transition-all duration-300 group-hover:scale-110  ">
                                        <CalendarIcon className="h-8 w-8 " />
                                    </div>
                                    <h3 className="text-lg font-semibold px-2">Step 1: Schedule Appointment</h3>
                                    <p className="text-gray-500 w-10/12 ">
                                        <Link href={"/contact"} ><span className="text-blue-500 cursor-pointer ">Schedule</span></Link> an in-home appointment for a Capable services expert to measure your space and assess and evaluate your HVAC needs.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center  space-y-4 sm:border-r sm:border-gray-200 ">
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 group-hover:scale-110  ">
                                        <DollarSignIcon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Step 2: Get Your Quote</h3>
                                    <p className="text-gray-500 w-10/12 ">
                                        When your assessment is complete. we’ll follow up with a quote for the new system. It’ll include product pricing and a labor breakdown, along with financing options to fit your budget. We’ll be there to answer any questions you may have.
                                    </p>
                                </div>
                                <div className="group flex flex-col items-center  space-y-4  ">
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 group-hover:scale-110  ">
                                        <TruckIcon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-lg font-semibold">Step 3: Installation Day</h3>
                                    <p className="text-gray-500 w-10/12 ">
                                        Once the installation is complete, Capable services professionals will clean up your old unit and then review manufacturer care and maintenance instructions with you. We ensure you’re 100% satisfied with the new unit and installation.
                                    </p>
                                </div>
                            </div>
                            :
                            <div className="flex justify-center w-full">
                               <div className="group  flex flex-col items-center  space-y-4 py-4 max-w-sm rounded-lg bg-white border border-gray-100 shadow-lg justify-center ">
                                <div className="relative flex h-16 w-16 items-center justify-center  rounded-full bg-gray-900  text-white transition-all duration-300 group-hover:scale-110  ">
                                    <CalendarIcon className="h-8 w-8 " />
                                </div>
                                <h3 className="text-lg font-semibold">Schedule Appointment</h3>
                                <p className="text-gray-500 w-10/12 ">
                                    <Link href={"/contact"} ><span className="text-blue-500 cursor-pointer ">Schedule</span></Link> an in-home appointment for a Capable services expert to measure your space and assess and evaluate your HVAC needs.
                                </p>
                            </div>  
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

function CalendarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}


function DollarSignIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function TruckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    )
}