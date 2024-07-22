import Banner from "./components/Banner";
import InfoCard from "./components/InfoCard";
import ServicesCard from "./components/ServicesCard";
import PatnerCompany from "./components/PatnerCompany";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.capablehvac.com/"),
  keywords: [
    "HVAC services New York",
    "HVAC services New Jersey",
    "heating services New York",
    "heating services New Jersey",
    "cooling services New York",
    "cooling services New Jersey",
    "air conditioning New York",
    "air conditioning New Jersey",
    "vent cleaning New York",
    "vent cleaning New Jersey",
    "power washing New York",
    "power washing New Jersey",
    "HVAC maintenance NY",
    "HVAC maintenance NJ",
    "heating repair NY",
    "heating repair NJ",
    "cooling repair NY",
    "cooling repair NJ",
    "AC repair NY",
    "AC repair NJ",
    "duct cleaning NY",
    "duct cleaning NJ",
    "residential HVAC NY",
    "residential HVAC NJ",
    "commercial HVAC NY",
    "commercial HVAC NJ",
    "emergency HVAC NY",
    "emergency HVAC NJ"],
  title: {
    default: "Capable Hvac",
    template: `%s | Capable Hvac`
  },
  // social media 
  openGraph: {
    description: "Your Comfort is Our Mission.",
    images: ["https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/otherImage%2FsocialBanner.png?alt=media&token=9973964a-74f4-423f-b3a5-e833c50486db"]
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <div className=" md:w-[70vw]  mx-auto justify-center ">
          {/* <CompanyInfo /> */}
          <ServicesCard />
          <InfoCard />
          <PatnerCompany />
        </div>
      </div>
    </>


  );
}

