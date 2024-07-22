import React from 'react'
import Image from 'next/image'

const PatnerCompany = () => {
  return (
    <section className="w-full py-6  mx-auto justify-center">
      <div className="grid grid-cols-1 xl:grid-cols-9 px-2  sm:mx-auto">
        {/* Centered Text */}
        <div className="col-span-full sm:col-span-4 flex justify-center items-center text-lg text-gray-700 font-bold mb-0.5 capitalize text-center">
        Enhancing our communities with these partners.
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-3 sm:grid-cols-5 col-span-full sm:col-span-5  text-gray-500 justify-items-center">
          <div className="relative h-24 w-24">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr1.png?alt=media&token=c6e4563b-bbdf-49b5-8a14-e4e6c276d93f"}
              alt="partner"
            />
          </div>
          <div className="relative h-24 w-24">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Flg.png?alt=media&token=0eaff373-57ad-4b30-95f3-e44ecf932076"}
              alt="partner"
            />
          </div>
          <div className="relative h-24 w-24 py-2">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fcarrier.png?alt=media&token=b6e780d4-9f46-4967-94d6-af7ad12190fc"}
              alt="partner"
            />
          </div>
          <div className="relative h-24 w-24">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fptnr6.png?alt=media&token=48b4dc2f-9a85-4bd9-9c38-a3ee0d9fde71"}
              alt="partner"
            />
          </div>
          <div className="relative h-24 w-24">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fcoleman.png?alt=media&token=979b9416-1e06-4b82-907e-1951c2161e39"}
              alt="partner"
            />
          </div>
          <div className="relative sm:hidden h-24 w-24">
            <Image
              className="grayscale hover:grayscale-0 transition-all"
              fill={true}
              style={{ objectFit: "contain" }}
              src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/partners%2Fleenox.png?alt=media&token=e537fc46-0dd7-49cc-95d6-1616559d1e5a"}
              alt="partner"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PatnerCompany