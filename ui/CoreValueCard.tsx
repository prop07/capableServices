import React from 'react'
import Image from "next/image"



interface cardDetails {
   title: string,
   description: string,
   image: string
}

const CoreValueCard = ({title, description, image }:cardDetails) => {
    return (
        <div className='flex sm:flex-row  flex-col  justify-center sm:items-start items-center '>
            <div>
                <Image
                    src={image}
                    height={300}
                    width={300}
                    alt='honesty'
                />
            </div>
            <div className='py-4  space-y-2 xl:w-5/12 w-9/12 mt-6 '>
                <h1 className='text-primary text-xl font-bold capitalize'>
                    {title}
                </h1>
                <p className='text-gray-600'>
                {description}
                </p>
            </div>
            {/* <hr className='bg-gray-700 h-0.5 w-5/6 sm:hidden block' /> */}
        </div>
    )
}

export default CoreValueCard