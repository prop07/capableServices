import React from 'react'
import { GiLoveMystery } from "react-icons/gi";

const CoreValues = () => {
  return (
  <div >
    <div className="flex mx-auto justify-center items-center w-1/2">
      <p className="lg:text-2xl text-xl text-gray-700 text-start  md:font-bold font-bold mb-2 uppercase ">
      Core Values
      </p>
    </div>
    {/* card  */}
    <div className=' flex gap-2'>
<GiLoveMystery size={40}/>
<div className=' w-48 text-gray-600'>
    <h1 className=' font-bold '>Honesty</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam impedit pariatur doloribus in nulla! </p>
</div>



    </div>
  </div>
  )
}

export default CoreValues