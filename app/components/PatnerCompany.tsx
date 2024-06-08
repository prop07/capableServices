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
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr4.png?alt=media&token=a99c61fb-f979-407e-914d-cf55032c9dea"} alt="partner"/>
            </p> 
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr6.png?alt=media&token=48b4dc2f-9a85-4bd9-9c38-a3ee0d9fde71"} alt="partner"/>
            </p>  
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr2.png?alt=media&token=97cf308a-1f5d-45cf-bc48-78815216f37c"} alt="partner"/>
            </p>
            <p className="relative h-16">
            <Image fill={true} style={{ objectFit: "contain"}}   src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr3.png?alt=media&token=1de14b5d-4895-488e-9d01-d77841dcf64c"} alt="partner"/>
            </p>                   
        </div>
    </div>
</section>
  )
}

export default PatnerCompany