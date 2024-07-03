import React from 'react';
import HowItWorks from '@/app/components/HowItWorks';
import Image from 'next/image';
import banner from "../../../../image/bookAQuote.avif"


const Page = ({ params }: { params: { slug: string } }) => {

  const [category, title] = params.slug

  console.log("params", category , title);
  
  return (
    <div>
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
                <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-2  mt-20 sm:mt-0 text-center">
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-xl md:text-4xl font-bold tracking-tight text-white">
                            Book a Quote
                        </h1>
                        <p className="font-semibold text-xs sm:text-base text-white">
                        Discover the seamless process of scheduling an appointment, getting a quote, and enjoying a hassle-free
                        work done.
                        </p>
                    </div>
                </div>
            </section>

    <div className="md:w-[70vw] mb-4 mx-auto justify-center space-y-6">
      <HowItWorks category={category} />
    </div>
    </div>
  );
};

export default Page;