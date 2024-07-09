// "use client";
// import React, { useState } from "react";
// import Tiny from "../../components/Tiny";

// const AdminHomePage = () => {
//     const [editorValue, setEditorValue] = useState<string | undefined>();

//     return (
//         <div className=" pt-24 w-9/12 mx-auto justify-center ">
//             <div className=" m-4  bg-white text-primary  p-6 text-xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black  ">
//                 Add Service
//             </div>
//             <div className="flex gap-2">
//                 <div className="flex w-1/2 flex-col gap-2">
//                     <div className="w-full ">
//                         <label htmlFor="title" className="block  font-normal text-lg mb-2">
//                             Service Title<span className="text-red-500">*</span>
//                         </label>
//                         <input
//                             type="text"
//                             id="title"
//                             name="title"
//                             className="w-10/12 border-b-2  border-gray-400   p-2  focus:outline-none focus:border-primary "
//                             required
//                         />
//                     </div>
//                     <div className="w-full">
//                         <label htmlFor="imageUrl" className="block  font-normal text-lg mb-2">
//                             imageUrl
//                         </label>
//                         <input
//                             type="text"
//                             id="imageUrl"
//                             name="imageUrl"
//                             className="w-10/12 border-b-2   border-gray-400   p-2  focus:outline-none focus:border-primary"
//                         />
//                     </div>
//                 </div>
//                 <div className="w-1/2">
//                     <Tiny editorValue={editorValue ? editorValue : ""} setEditorValue={setEditorValue} />
//                 </div>
//             </div>
//             <span className="bg-green-500 p-2">Rich Text output:</span>
//             <div
//                 className=" p-6 rendered-form  "
//                 dangerouslySetInnerHTML={{ __html: editorValue }}
//             />
//             <p>{editorValue}</p>
//         </div>
//     );
// };

// export default AdminHomePage;


import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page
