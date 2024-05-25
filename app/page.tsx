import Banner from "./components/Banner";
import InfoCard from "./components/InfoCard";
import CompanyInfo from "./components/CompanyInfo";
import ServicesCard from "./components/ServicesCard";
import PatnerCompany from "./components/PatnerCompany";


export default function Home() {
  return (
    <div className=" md:w-[70vw]  mx-auto justify-center ">
      <Banner />
      <CompanyInfo />
      <ServicesCard />
      <InfoCard />
      <PatnerCompany/>
      </div>
    
  );
}
