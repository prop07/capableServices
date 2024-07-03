import React from "react";
import Link from "next/link";
import banner13 from "../../image/banner1-3.png";
import banner12 from "../../image/banner1-2.png";
import banner from "../../image/banner.jpeg";


import Image from "next/image";

const Banner = () => {
  return (
  <section className="w-full relative overflow-hidden mb-4">
  <div className="h-[105vh] w-[100vw] relative">
    <Image
      fill={true}
      style={{ objectFit: "cover" }}
      src={banner}
      alt="banner"
    />
    {/* Gradient overlay for fading effect at the bottom 10% */}
    <div className="absolute bottom-0 left-0 right-0 h-[0.5%] bg-gradient-to-b from-transparent to-white"></div>
  </div>
  <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-4 text-center">
    <div className="space-y-4 max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
        CAPABLE SERVICES
      </h1>
      <p className="text-lg md:text-2xl text-muted-foreground text-white">
      Your Comfort is Our Mission.
      </p>
    </div>
  </div>
</section>
  );
};

export default Banner;
