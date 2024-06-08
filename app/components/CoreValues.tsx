import React from "react";

//ui
import CoreValueCard from "./UI/CoreValueCard";

//vectors
import honestyImage from "../../image/vectors/honesty.jpg";
import qualityImage from "../../image/vectors/quality.jpg";
import credibilityImage from "../../image/vectors/credibility.jpg";
import reliabilityImage from "../../image/vectors/reliable.jpg";
import affordabilityImage from "../../image/vectors/affordability.jpg";
import satisfactionImage from "../../image/vectors/satisfaction.jpg";

const coreValuesDetails = {
  honesty: {
    description:
      "We believe in staying honest and fair towards our customers. We have no hidden charges in regard to HVAC installation or Air Conditioner repair in NYC. Also, we ensure the highest level of customer service.",
    image: honestyImage,
  },
  quality: {
    description:
      "We commit to provide quality services, which have made us the trusted providers of HVAC repair in NYC.",
    image: qualityImage,
  },
  credibility: {
    description:
      "Our quality of services and immediate response to problems help us earn credibility of our customers. This is why our customers trust us blindly for the installation and AC repair in Brooklyn & NYC.",
    image: credibilityImage,
  },
  reliability: {
    description:
      "Our relentless and persistent AC installation NYC & AC repair NYC and maintenance services in Brooklyn from past many years has made us the trusted and reliable providers of the industry.",
    image: reliabilityImage,
  },
  affordability: {
    description:
      "Availing services of installation, maintenance and HVAC repair in NYC & Brooklyn at affordable prices is possible under our roof.",
    image: affordabilityImage,
  },
  satisfaction: {
    description:
      "Everyone wishes to obtain 100% satisfaction guarantee for the services of air conditioner installation NYC and Air conditioner repair in NYC.",
    image: satisfactionImage,
  },
};

const CoreValues = () => {
  return (
    <div className="mt-4">
      <div className="flex mx-auto justify-center items-center w-1/2">
        <div className="flex flex-col justify-center items-center">
          <p className="lg:text-2xl text-xl text-gray-700 text-start  md:font-bold font-bold mb-0.5 uppercase ">
            Core Values
          </p>
          <p className="h-1 w-9/12 bg-primary rounded-full"></p>
        </div>
      </div>
      {/* card  */}
      <div className="grid xl:grid-cols-2 grid-cols-1 md:px-0 px-2">
        {Object.entries(coreValuesDetails).map(([key, value]) => (
          <CoreValueCard
          className="sm:border-none border-b border-gray-200"
            key={key}
            title={key}
            description={value.description}
            image={value.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
