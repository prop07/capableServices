import React from 'react'
import Image from 'next/image'

const detailsPage = () => {
  return (
    <div className='md:w-9/12  mx-auto justify-center z-10' >
      <div
                className="relative  flex flex-col items-center justify-center text-center text-white "
                style={{ height: "60vh" }}
            >
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image
                        height={1400}
                        width={1400}
                        className="min-w-full min-h-full absolute object-cover"
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="service"
                    />
                </div>
                <div className="video-content space-y-2 z-10">
                    <span className=" cursor-pointer  bg-white text-primary  p-6 text-4xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black     ">
                    Details
                    </span>
                </div>
            </div></div>
  )
}

export default detailsPage