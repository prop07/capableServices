'use client'
import React , {useEffect, useState} from "react";

//firebase
// import { ref, onValue, get, child, remove } from "firebase/database";
// import { database } from "../../config/app";



const Services = () => {
  const [serviceDetails, setServiceDetails] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userRef = ref(database, "services/");
  //       onValue(userRef, (snapshot) => {
  //         const data = snapshot.val();
  //         setServiceDetails(data);
          
  //       });
  //     } catch (error) {
  //       console.error("Error fetching order data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  
  // if ( Object.keys(serviceDetails).length === 0) {
  //   return (
  //     <div className=" h-screen w-screen  backdrop-blur-sm bg-white/30 "> <div className="flex h-full items-center justify-center space-x-2">
  //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
  //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
  //       <div className="w-2 h-2 rounded-full animate-pulse bg-neutral-700"></div>
  //     </div></div>
  //   )
  // }


  return (
    <div className=" md:w-10/12  mx-auto justify-center z-10">
    <div className="relative  flex flex-col items-center justify-center text-center text-white " style={{height:"60vh"}}>
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <img className="min-w-full min-h-full absolute object-cover"
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="service" />
    </div>
    <div className="video-content space-y-2 z-10">
    <span className=" cursor-pointer  bg-white text-primary  p-6 text-4xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black     ">
       Services
      </span>
    </div>
</div>
<div className="pt-8 mt-4">
<span className="bg-primary text-4xl font-bold p-4 text-white  uppercase">Core Capabilities</span>
<p className="mt-8 w-10/12"> Capable Service stands as a beacon of reliability and excellence in the HVAC industry, serving as a trusted partner for residents  Service stands as a beacon of reliability and excellence in the HVAC industry, serving as a trusted partner for reside across New Jersey. With a mantra centered on</p>
</div>
{/* cards  */}
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">



    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* <!-- CARD 1 --> */}
        <div className=" overflow-hidden flex flex-col">
            <div>
            <img className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
            </div>
            <div className="bg-primary text-white font-extrabold text-xl p-2 ">Simplest Salad Recipe ever</div>
        </div>

        <div className=" overflow-hidden flex flex-col">
            <div>
            <img className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
            </div>
            <div className="bg-primary text-white font-extrabold text-xl p-2   ">Simplest Salad Recipe ever</div>
        </div>

        <div className=" overflow-hidden flex flex-col">
            <div>
            <img className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
            </div>
            <div className="bg-primary text-white font-extrabold text-xl p-2   ">Simplest Salad Recipe ever</div>
        </div>


        <div className=" overflow-hidden flex flex-col">
            <div>
            <img className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
            </div>
            <div className="bg-primary text-white font-extrabold text-xl p-2 ">Simplest Salad Recipe ever</div>
        </div>


        <div className=" overflow-hidden flex flex-col">
            <div>
            <img className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1682088024868-09d8cbc8659f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sunset in the mountains"/>
            </div>
            <div className="bg-primary text-white font-extrabold text-xl p-2  ">Simplest Salad Recipe ever</div>
        </div>
    </div>

</div>

</div>
   
  );
};

export default Services;


// { Object.keys(serviceDetails).map((key) => (
//   <div
//     key={key}
//     className="relative bg-white rounded-2xl shadow-baseShadow hover:shadow-hoverShadow shadow-gray-400 hover:shadow-gray-400 duration-500 ease-in-out "
//   >
//     <div>
//       <div className="p-4">
//         <div className="mb-3">
//           <h2 className="text-2xl font-semibold ">{serviceDetails[key].serviceTitle}</h2>
//         </div>
//         <p className="pb-8 text-base font-base text-gray-700 ">
//           {serviceDetails[key].serviceDescription}
//         </p>
//       </div>
//       <div className="flex items-center justify-end mt-2 ">
//         <a
//           href="#"
//           className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-secondary rounded-tl-2xl rounded-br-2xl hover:bg-gray-900 hover:text-gray-100"
//         >
//           Book now
//         </a>
//       </div>
//     </div>
//   </div>
// ))}
