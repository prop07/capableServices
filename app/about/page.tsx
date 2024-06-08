import React from "react";
import Image from "next/image";
import CoreValues from "../components/CoreValues";
import abousUSVector from "../../image/vectors/aboutUsCard.jpg"

const Page = async () => {
  return (
    <div className=" md:w-9/12  mx-auto justify-center z-10">
      <div className=" mt-4">
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
      <div className="mt-4 sm:mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Why Us?</h2>
          <p className="mt-4 text-xl text-gray-500">Our Commitment to Excellence</p>
        </div>
        <div className="mt-10 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3">
          <div>
            <div className="flow-root bg-white rounded-lg px-6 py-8 ">
              <div className="-mt-6">
                <div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Our Commitment to Excellence</h3>
                  <p className="mt-2 text-base text-gray-500">
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
            <div className="flow-root bg-white rounded-lg px-6 py-8 ">
              <div className="-mt-6">
                <div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Shared Goals for Success</h3>
                  <p className="mt-2 text-base text-gray-500">
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
            <div className="flow-root bg-white rounded-lg px-6 py-8 ">
              <div className="-mt-6">
                <div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Trust in Quality Service</h3>
                  <p className="mt-2 text-base text-gray-500">
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
  );
};

export default Page;
