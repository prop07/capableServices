import React from 'react'
import Image from 'next/image'

const PatnerCompany = () => {
  return (
    <section >
    <div className="py-4 mt-1  ">
        <h2 className="lg:text-2xl text-xl text-gray-700 text-center  md:font-bold font-bold mb-0.5 uppercase">A Few of our Past & Present Patener</h2>
        <div className="h-1 m-auto w-2/12 bg-primary rounded-full mb-2"></div>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 ">
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr1.png?alt=media&token=c6e4563b-bbdf-49b5-8a14-e4e6c276d93f"} alt="partner"/>
            </p> 
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Flg.png?alt=media&token=0eaff373-57ad-4b30-95f3-e44ecf932076"} alt="partner"/>
            </p> 
            <p className="relative h-16 py-2">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fcarrier.png?alt=media&token=b6e780d4-9f46-4967-94d6-af7ad12190fc"} alt="partner"/>
            </p> 
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr6.png?alt=media&token=48b4dc2f-9a85-4bd9-9c38-a3ee0d9fde71"} alt="partner"/>
            </p>  
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fcoleman.png?alt=media&token=979b9416-1e06-4b82-907e-1951c2161e39"} alt="partner"/>
            </p>
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fleenox.png?alt=media&token=e537fc46-0dd7-49cc-95d6-1616559d1e5a"} alt="partner"/>
            </p>                   
        </div>
    </div>
</section>
  )
}

export default PatnerCompany