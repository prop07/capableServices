import Banner from "./components/Banner";
import InfoCard from "./components/InfoCard";
import CompanyInfo from "./components/CompanyInfo";
import ServicesCard from "./components/ServicesCard";
import PatnerCompany from "./components/PatnerCompany";
import { Metadata } from "next";

export const metadata:  Metadata = {
  metadataBase:new URL("https://www.capablehvac.com/"),
  keywords:[],
  title:{
    default:"Capable Hvac",
    template:`%s | Capable Hvac`
  },
  // social media 
  openGraph:{
    description:"Your Comfort is Our Mission.",
    images:[]
  }
}

export default function Home() {
  return (
    <div>
    <Banner />
    <div className=" md:w-[70vw]  mx-auto justify-center ">
      {/* <CompanyInfo /> */}
      <ServicesCard />
      <InfoCard />
      <PatnerCompany />
    </div>
    </div>

  );
}

