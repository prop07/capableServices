"use client";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//context
import { ServiceContext } from "../../context/ServiceProvider";

type Services = {
    [id: string]: {
      serviceDescription: string;
      serviceTitle: string;
    };
  };

const Services = () => {
    const serviceDetails = useContext<Services>(ServiceContext);

    // if ( Object.keys(serviceDetails).length === 0) {
    //   return (
    //     <div className=" h-screen w-screen  backdrop-blur-sm bg-white/30 "> <div className="flex h-full items-center justify-center space-x-2">
    //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
    //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
    //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
    //     </div></div>
    //   )
    // }

    return (
        <div className=" md:w-9/12  mx-auto justify-center z-10">
            <div
                className="relative  flex flex-col items-center justify-center text-center text-white "
                style={{ height: "50vh" }}
            >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image
                        height={1000}
                        width={1000}
                        className="min-w-full min-h-full absolute object-cover"
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="service"
                    />
                </div>
                <div className="video-content space-y-2 z-10">
                    <span className=" bg-white text-primary rounded-md  p-2 md:text-4xl text-xl text-center font-extrabold ">
                        Our services
                    </span>
                </div>
            </div>
            <div className="pt-8 mt-4">
                <span className="bg-primary md:text-2xl sm:text-xl text-base sm:font-bold font-normal p-2 uppercase text-white">
                    Core Capabilities
                </span>
                <p className="mt-8 p-2 lg:p-0 lg:w-10/12">
                    Capable Service stands as a beacon of reliability and excellence in
                    the HVAC industry, serving as a trusted partner for residents Service
                    stands as a beacon of reliability and excellence in the HVAC industry,
                    serving as a trusted partner for reside across New Jersey. With a
                    mantra centered on
                </p>
            </div>
            {/* cards  */}
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* <!-- CARD --> */}
                    {Object.keys(serviceDetails).map((key) => (
                        <div
                            key={key}
                            className=" overflow-hidden flex flex-col  cursor-pointer"
                        >
                            <Link
                                href={`/services/${serviceDetails[key].serviceTitle
                                    .replace(/\s/g, "-")
                                    .replace("/", ".")}`}
                            >
                                <div>
                                    <Image
                                        height={300}
                                        width={300}
                                        className="w-full hover:scale-105 ease-in-out duration-300"
                                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Sunset in the mountains"
                                    />
                                </div>
                                <div className="bg-primary text-white font-extrabold text-xl p-2 ">
                                    {serviceDetails[key].serviceTitle}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
