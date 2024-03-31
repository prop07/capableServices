import React from "react";
import Image from "next/image";
import CoreValues from "../components/CoreValues";
import abousUSVector from "../../image/vectors/aboutUsCard.jpg"

const Page = async () => {
  return (
    <div className=" md:w-9/12  mx-auto justify-center z-10">
      <div
        className="relative  flex flex-col items-center justify-center text-center text-white "
        style={{ height: "40vh" }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Image
            height={800}
            width={800}
            className="min-w-full min-h-full absolute object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
          />
        </div>
        <div className=" space-y-2 z-10">
          <span className="  bg-white text-primary rounded-md  p-2 md:text-4xl text-xl text-center  font-extrabold      ">
            About us
          </span>
        </div>
      </div>
      <div className="pt-8 mt-4">
        <span className="bg-primary md:text-2xl sm:text-xl text-base sm:font-bold font-normal p-2 text-white">
          ABOUT CAPABLE SERVICE
        </span>
      </div>
      {/* about  */}
      <div className="text-gray-600 body-font ">
        <div className=" mx-auto mt-4 flex  2xl:flex-row flex-col items-start">
          <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-cente 2xl:w-1/2">
          <p className="mb-4 md:pl-0  pl-2 pr-2 text-xs md:text-base">
              Capable Service stands as a beacon of reliability and excellence
              in the HVAC industry, serving as a trusted partner for residents
              across New Jersey. With a mantra centered on{" "}
              <span className=" text-lg text text-black font-medium">
                &quot;Quality Services is Our Guarantee&quot;
              </span>{" "}
              the company takes immense pride in delivering top-notch HVAC
              solutions tailored to meet the unique needs of each customer. From
              swift and effective repairs for both heating and cooling systems
              to expert installations and meticulous maintenance packages,
              Capable Service ensures peak performance and unparalleled comfort
              throughout the year. Their team of dedicated professionals
              prioritizes customer satisfaction above all else, going above and
              beyond to exceed expectations with every service offered.
            </p>
            <p className="mb-4 md:pl-0  pl-2 pr-2 text-xs md:text-base">
              What sets Capable Service apart is their unwavering commitment to
              quality, affordability, and trustworthiness in every aspect of
              their operations. With over a{" "}
              <span className=" text-lg text-black font-medium">
                decade of expertise backing their services,
              </span>{" "}
              they have established themselves as leaders in the industry,
              standing proudly at the forefront among all HVAC companies in New
              Jersey. Whether it&apos;s installing a new heating system,
              repairing ducts and vents, or providing regular maintenance to
              optimize system efficiency, Capable Service guarantees dependable
              solutions that prioritize the comfort and peace of mind of their
              valued customers. By choosing Capable Service, clients not only
              invest in superior HVAC care but also secure a lasting partnership
              built on a foundation of excellence and unparalleled service
              quality.
            </p>
          </div>
          <div className="2xl:block hidden lg:max-w-lg lg:w-full">
            <Image
              height={350}
              width={350}
              className=" object-center"
              alt="hero"
              src={abousUSVector}
            />
          </div>
        </div>
      </div>
      <CoreValues/>

    </div>
  );
};

export default Page;
