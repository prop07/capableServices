'use client'
import React from 'react';
import HowItWorks from '@/app/components/HowItWorks';


const Page = ({ params }: { params: { slug: string } }) => {

  const [category, title] = params.slug

  console.log("params", category , title);
  
  return (
    <div className="md:w-9/12 mx-auto justify-center space-y-6">
      <HowItWorks category={category} />
    </div>
  );
};

export default Page;