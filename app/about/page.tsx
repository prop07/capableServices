import React from "react";
import Image from "next/image";
import CoreValues from "../components/CoreValues";
import abousUSVector from "../../image/vectors/aboutUsCard.jpg"
import banner from "../../image/about.webp"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "Your Comfort is Our Mission."
}

const Page = async () => {
  return (
    <div className="">
      <section className="w-full relative overflow-hidden mb-4">
        <div className="h-[50vh] w-[100vw] relative">
          <Image
            fill={true}
            style={{ objectFit: "cover" }}
            src={banner}
            alt="banner"
            className=""
          />
          {/* Gradient overlay for fading effect at the bottom 10% */}
          <div className="absolute bottom-0 left-0 right-0 h-[0.5%] bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-2  mt-20 sm:mt-0 text-center ">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-xl md:text-4xl font-bold tracking-tight text-white">
              ABOUT CAPABLE SERVICE
            </h1>
            <div className="grid gap-4  grid-cols-2 lg:grid-cols-4   text-white  px-4 md:justify-between justify-center items-center">
              <div className="flex flex-col justify-center items-center ">
                <p className=" font-medium text-xl">
                  5+
                </p>
                <p className='text-center text-sm'>
                  Years Business
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  ">
                <p className=" font-medium text-xl">
                  5k+
                </p>
                <p className='text-center text-sm'>
                  Project Complete
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  ">
                <p className=" font-medium text-xl">
                  5k+
                </p>
                <p className='text-center text-sm'>
                  Happy Client
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  ">
                <p className=" font-medium text-xl ">
                  24/7
                </p>
                <p className='text-center text-sm'>
                  Always Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about  */}
      <div className="md:w-[70vw] mb-4  mx-auto justify-center space-y-6">
        {/* <div className="text-gray-600 body-font ">
          <div className=" mx-auto mt-4 flex  2xl:flex-row flex-col items-start">
            <div className="lg:flex-grow  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-cente 2xl:w-1/2">
              <p className="mb-2 2xl:pl-0 pl-2 pr-2">
                Capable Service is a reliable HVAC company serving New Jersey. With a mantra of <span className=" text-black font-medium">&quot;Quality Services is Our Guarantee&quot;</span>, they deliver top-notch HVAC solutions tailored to customer needs. From swift repairs to expert installations, Capable Service ensures year-round performance and comfort, prioritizing customer satisfaction with every service.
              </p>
              <p className="hidden 2xl:block mb-2 md:pl-0 pl-2 pr-2">
                What sets Capable Service apart is their commitment to quality, affordability, and trustworthiness. With over a <span className=" text-black font-medium">decade of expertise,</span> they lead the industry in New Jersey. Whether installing heating systems, repairing ducts, or providing maintenance, Capable Service guarantees dependable solutions for customer comfort and peace of mind. Clients invest in superior HVAC care and a lasting partnership built on excellence.
              </p>
            </div>
            <div className="2xl:block hidden">
              <Image
                height={250}
                width={250}
                className=" object-center"
                alt="hero"
                src={abousUSVector}
              />
            </div>
          </div>
        </div> */}
        <CoreValues />
        <div className="mt-2 sm:mt-0">
          <div className="max-w-7xl mx-auto">
            <div className="">
              <h2 className="lg:text-2xl text-xl text-gray-700 t md:font-bold font-bold mb-0.5 uppercase text-center">Why Us?</h2>
              <p className="h-1 w-[7%] bg-primary rounded-full mx-auto mt-2"></p>
            </div>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3">
              <div>
                <div className="flow-root bg-white rounded-lg px-6  ">
                  <div className="-mt-6">
                    <div>
                      <h3 className="mt-5 text-lg font-medium text-gray-900">Our Commitment to Excellence</h3>
                      <p className="mt-2 text-base text-read">
                        At Capable Service, we understand that the reputation of a good service is built on the foundation
                        of satisfied customers and their positive experiences with our company. We take pride in
                        consistently exceeding customer expectations and providing tailored solutions to address specific
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flow-root bg-white rounded-lg px-6 ">
                  <div className="-mt-6">
                    <div>
                      <h3 className="mt-5 text-lg font-medium text-gray-900">Shared Goals for Success</h3>
                      <p className="mt-2 text-base text-read">
                        Our goal, shared with our valued customers, is to provide effective solutions to any HVAC-related
                        challenges. Whether it&apos;s heater repair, system installation, fan motor replacement, or any other
                        service, our dedicated team is committed to delivering results that align with your unique
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flow-root bg-white rounded-lg px-6  ">
                  <div className="-mt-6">
                    <div>
                      <h3 className="mt-5 text-lg font-medium text-gray-900">Trust in Quality Service</h3>
                      <p className="mt-2 text-base text-read">
                        We believe in the power of trust when it comes to HVAC installations and repairs. When you choose
                        Capable Service, you can trust that the time and energy invested in the installation process ensure
                        a reliable and efficient system. Our aim is to get it right the first time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
