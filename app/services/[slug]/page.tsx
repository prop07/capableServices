'use client'
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceContext } from "@/context/ServiceProvider";
import TextHeader from "@/app/components/UI/text/TextHeader";


type Services = {
    [id: string]: {
        image: string;
        serviceDescription: string;
        serviceTitle: string;
        subCatagory: object
    };
};


const Page = ({ params }: { params: { slug: string } }) => {
    const serviceDetails = useContext<Services>(ServiceContext);


    const subcategory = Object.values(serviceDetails).find(service => service.serviceTitle === params.slug.replace(/\./g, "/").replace(/-/g, " "))?.subCatagory;




    return (
        <div className="md:w-[70vw] mb-4  mx-auto justify-center space-y-6 ">
            <TextHeader title={params.slug.replace(/\./g, "/").replace(/-/g, " ").replace(/%26/g, "&")} />
            {/* details  */}
            <div className="px-2 ">
                <p className="text-read">Paragraphs are the building blocks of papers Many students define paragraphs in terms of length a paragraph is a group: of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.</p>
            </div>
            {/* card  */}
            <div className="grid justify-between gap-4 px-2  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {subcategory && Object.keys(subcategory).map((key) => (
                    <Link key={key}
                        href={`/services/details/${params.slug.replace(/\s/g, "-")
                            .replace("/", ".")}/${key
                                .replace(/\s/g, "-")
                                .replace("/", ".")}`}
                    >
                        <div className="group relative overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:scale-105">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    alt="Card header image"
                                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                    height={192}
                                    src={subcategory[key].image}
                                    style={{
                                        aspectRatio: "384/192",
                                        objectFit: "cover",
                                    }}
                                    width={384}
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-md font-bold  text-gray-600">{key}</h3>
                                <div className="absolute inset-0 bg-primary opacity-0  p-4 transition-all duration-300 group-hover:opacity-90">
                                    <p className="text-white">
                                        {subcategory[key].description}
                                    </p>
                                    <p className="  pt-4  font-semibold text-md rounded-md text-white">Book now &rarr;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;





