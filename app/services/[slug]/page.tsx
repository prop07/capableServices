'use client'
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceContext } from "@/context/ServiceProvider";
import { BsArrowRight } from "react-icons/bs";
import Loading from "@/app/loading";
import banner from "../../../image/servicesBanner.jpeg"


type Services = {
    [id: string]: {
        image: string;
        serviceDescription: string;
        serviceTitle: string;
        subCatagory: object;
        details: string;
    };
};


const Page = ({ params }: { params: { slug: string } }) => {
    const serviceDetails = useContext<Services>(ServiceContext);




    const subcategory = Object.values(serviceDetails).find(service => service.serviceTitle === params.slug.replace(/\./g, "/").replace(/-/g, " "))?.subCatagory;
    const details = Object.values(serviceDetails).find(service => service.serviceTitle === params.slug.replace(/\./g, "/").replace(/-/g, " "))?.details;

    if (!subcategory || !details) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <section className="w-full relative overflow-hidden mb-4">
                <div className="h-[50vh] w-[100vw] relative">
                    <Image
                        fill={true}
                        style={{ objectFit: "cover" }}
                        src={banner}
                        alt="banner"
                        className=" grayscale "
                    />
                    {/* Gradient overlay for fading effect at the bottom 10% */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2%] bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-2  mt-20 sm:mt-0 text-center">
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-xl md:text-4xl font-bold tracking-tight text-white">
                            {params.slug.replace(/\./g, "/").replace(/-/g, " ").replace(/%26/g, "&")}
                        </h1>
                        <p className="font-semibold text-xs sm:text-base text-white">
                            {details}
                        </p>
                    </div>
                </div>
            </section>
            <div className="md:w-[70vw] mb-4  mx-auto justify-center space-y-6 ">
                <div className="space-y-20 px-2">
                    {subcategory && Object.keys(subcategory).map((key, index) => (
                        index % 2 === 0 ?
                            (<div key={key} className="sm:flex ">
                                <div className="relative h-[30vh]  flex-1">
                                    <Image fill={true} objectFit="cover" src={subcategory[key].image} alt="image" />
                                </div>
                                <div className="flex-1 flex flex-col p-4 justify-center space-y-3">
                                    <p className="text-lg font-semibold text-read">{key}</p>
                                    <p className="text-read">
                                        {subcategory[key].description}
                                    </p>
                                    <Link className="flex items-center" href={`/services/details/${params.slug.replace(/\s/g, "-")
                                        .replace("/", ".")}/${key
                                            .replace(/\s/g, "-")
                                            .replace("/", ".")}`}>
                                        <p className="flex gap-3 items-center w-full justify-center rounded-md cursor-pointer bg-primary border-2 border-primary hover:bg-white hover:text-primary transition-all py-2 px-3 text-white text-medium text-center mt-4">
                                            <span>Book Now</span>
                                            <BsArrowRight className="ml-2" size={15} />
                                        </p>
                                    </Link>
                                </div>
                            </div>) :
                            (<div key={key} className="sm:flex ">
                                <div className="relative h-[30vh] sm:hidden block w-[100vw] flex-1">
                                    <Image fill={true} objectFit="cover" src={subcategory[key].image} alt="image" />
                                </div>
                                <div className="flex-1 flex flex-col p-4 justify-center space-y-3">
                                    <p className="text-lg font-semibold text-read">{key}</p>
                                    <p className="text-read">
                                        {subcategory[key].description}
                                    </p>
                                    <Link className="flex items-center" href={`/services/details/${params.slug.replace(/\s/g, "-")
                                        .replace("/", ".")}/${key
                                            .replace(/\s/g, "-")
                                            .replace("/", ".")}`}>
                                        <p className="flex gap-3 items-center w-full justify-center rounded-md cursor-pointer bg-primary border-2 border-primary hover:bg-white hover:text-primary transition-all py-2 px-3 text-white text-medium text-center mt-4">
                                            <span>Book Now</span>
                                            <BsArrowRight className="ml-2" size={15} />
                                        </p>
                                    </Link>
                                </div>
                                <div className="relative h-[30vh]  hidden sm:block  flex-1">
                                    <Image fill={true} objectFit="cover" src={subcategory[key].image} alt="image" />
                                </div>
                    </div>)
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;





