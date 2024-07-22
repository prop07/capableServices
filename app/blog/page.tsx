import React from 'react';
import BlogCard from '../components/Card/BlogCard';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog",
  description: "Your Comfort is Our Mission."
}

const Page = () => {
  return (
    <div className='md:pt-16 pt-24 py-4 md:w-[70vw]  justify-center mx-auto'>
      <div className='grid lg:grid-cols-2  gap-2 '>
          {
            blogData.map((item, index) => {
                return (
                  <BlogCard key={index} id={item.id} title={item.title} author={item.author} postDate={item.date} content={item.content} summary={item.summary} image={item.image} className=" p-2" />
                );
            
            })
          }
        {/* <div>
          {
            blogData.map((item, index) => {
              if (index % 2 === 0) {  
                return (
                  <BlogCard key={index} id={item.id} title={item.title} author={item.author} postDate={item.date} content={item.content} summary={item.summary} image={item.image} className="col-span-1  p-2" />
                );
              } else {
                // Handle odd index if needed
                return null; // or you can render something else
              }
            })
          }
        </div> */}
      </div>
    </div>
  )
}

export default Page


const blogData = [
  {
    "id":1,
    "title": "Maintaining Your HVAC System for Optimal Performance",
    "author": "John Doe",
    "date": "June 15, 2024",
    "content": `<p>
    <strong>Maintaining your HVAC (Heating, Ventilation, and Air Conditioning) system is crucial for ensuring its optimal performance, longevity, and efficiency.</strong> Regular maintenance not only helps in preventing unexpected breakdowns but also improves indoor air quality and reduces energy consumption.
</p>
<p>
    <strong>Key Steps for Effective HVAC Maintenance:</strong>
</p>
<ul>
    <li>
        <strong>Regular Filter Replacement:</strong> The air filter in your HVAC system traps dust, pollen, and other airborne particles. Over time, it can become clogged, reducing airflow and efficiency. Replace or clean the filter every 1-3 months, depending on usage and filter type.
    </li>
    <li>
        <strong>Scheduled Professional Inspections:</strong> It's advisable to have a professional HVAC technician inspect your system at least once a year. They can identify and fix minor issues before they turn into major problems, ensuring your system runs smoothly.
    </li>
    <li>
        <strong>Clean Coils and Fins:</strong> Dust and debris can accumulate on the coils and fins of your HVAC unit, reducing its ability to absorb and release heat. Regular cleaning of these components can significantly improve the system's efficiency.
    </li>
</ul>`,
    "summary": "Learn the best practices.",
    "image": "https://images.unsplash.com/photo-1663602692362-80e4564384c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id":2,
    "title": "Top 10 Tips for Heating System Maintenance",
    "author": "Jane Smith",
    "date": "July 5, 2023",
    "content": `<p>Maintaining your heating system is crucial for ensuring it runs efficiently and effectively throughout the colder months. Regular maintenance can help prevent unexpected breakdowns, improve energy efficiency, and extend the lifespan of your system. Here are the top 10 tips for heating system maintenance:</p>

<ul>
  <li>
    <p><strong>1. Schedule Annual Inspections:</strong> Have a professional HVAC technician inspect your heating system at least once a year. They can identify and fix minor issues before they become major problems.</p>
  </li>
  <li>
    <p><strong>2. Replace Air Filters Regularly:</strong> Dirty air filters can restrict airflow and reduce efficiency. Replace or clean the filters every 1-3 months, depending on usage.</p>
  </li>
  <li>
    <p><strong>3. Clean Ductwork:</strong> Dust and debris can accumulate in the ductwork, reducing airflow and indoor air quality. Have your ducts cleaned every few years.</p>
  </li>
  <li>
    <p><strong>4. Check Thermostat Settings:</strong> Ensure your thermostat is set to the desired temperature and functioning properly. Consider upgrading to a programmable thermostat for better energy management.</p>
  </li>
  <li>
    <p><strong>5. Inspect and Clean Vents:</strong> Make sure all vents are open and unobstructed. Clean them regularly to maintain good airflow.</p>
  </li>
  <li>
    <p><strong>6. Monitor Pilot Light:</strong> If your heating system has a pilot light, ensure it is burning blue. A yellow or orange flame could indicate a problem that needs professional attention.</p>
  </li>
  <li>
    <p><strong>7. Lubricate Moving Parts:</strong> Lubricate the motor and other moving parts of your heating system to reduce friction and wear. This can help improve efficiency and extend the system’s life.</p>
  </li>
  <li>
    <p><strong>8. Check for Leaks:</strong> Inspect your heating system for any signs of leaks, including water and fuel lines. Address any leaks immediately to prevent damage and inefficiency.</p>
  </li>
  <li>
    <p><strong>9. Seal Air Leaks:</strong> Check for and seal any air leaks in your home, including around windows and doors. This can help keep warm air inside and reduce the workload on your heating system.</p>
  </li>
  <li>
    <p><strong>10. Test Safety Controls:</strong> Ensure all safety controls, such as carbon monoxide detectors and emergency shut-offs, are working properly. Regular testing can help prevent accidents and ensure your home stays safe.</p>
  </li>
</ul>

<p>By following these tips, you can keep your heating system in top condition, improve its efficiency, and ensure a comfortable and warm home during the colder months.</p>`,
    "summary": "Discover the top 10 tips for maintaining your heating system for efficiency and reliability.",
    "image": "https://images.unsplash.com/photo-1574334292321-4844f63aefef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhdGluZyUyMGFuZCUyMGNvb2xpbmd8ZW58MHx8MHx8fDI%3D"

  },
  {
    "id":3,
    "title": "How to Improve Your AC's Energy Efficiency",
    "author": "Mike Johnson",
    "date": "August 22, 2023",
    "content": `<ul>
  <li>
    <p><strong>Regular Maintenance:</strong> Schedule regular maintenance with a professional technician to ensure your AC system is running smoothly. Annual inspections can help identify and address issues before they become major problems.</p>
  </li>
  <li>
    <p><strong>Change Air Filters:</strong> Replace or clean your air filters every 1-3 months. Dirty filters can restrict airflow, making your AC work harder and less efficiently.</p>
  </li>
  <li>
    <p><strong>Seal Leaks:</strong> Check for and seal any leaks in your ductwork and around windows and doors. Leaks can cause cool air to escape and warm air to enter, reducing your AC's efficiency.</p>
  </li>
  <li>
    <p><strong>Install a Programmable Thermostat:</strong> A programmable thermostat allows you to set your AC to run less when you are not home, saving energy and reducing wear and tear on the system.</p>
  </li>
  <li>
    <p><strong>Use Ceiling Fans:</strong> Ceiling fans can help circulate cool air throughout your home, allowing you to set your thermostat a few degrees higher without sacrificing comfort.</p>
  </li>
  <li>
    <p><strong>Keep Vents Clear:</strong> Ensure that furniture, curtains, and other objects do not block air vents. This allows for proper airflow and helps your AC cool your home more effectively.</p>
  </li>
  <li>
    <p><strong>Upgrade to a High-Efficiency Unit:</strong> If your AC unit is old, consider upgrading to a more energy-efficient model. Modern AC units are designed to use less energy while providing better cooling performance.</p>
  </li>
</ul>

<p>Enhance your air conditioner's energy efficiency, save money on energy bills, and enjoy a cooler, more comfortable home.</p>`,
    "summary": "Learn how to improve your AC's energy efficiency and reduce your utility bills.",
    "image": "https://images.unsplash.com/photo-1601993198415-19d86ae28424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    "id":4,
    "title": "Signs It's Time to Replace Your HVAC System",
    "author": "John Doe",
    "date": "September 10, 2023",
    "content": `<ul>
  <li>Frequent Repairs: If your HVAC system requires frequent repairs and the costs are adding up, it may be more cost-effective to replace the system with a newer, more reliable model.</li>
  
  <li>Increasing Energy Bills: Older HVAC systems often become less efficient over time, leading to higher energy bills. If you notice a steady increase in your energy costs despite regular maintenance, it might be time for a more energy-efficient system.</li>
  
  <li>Age of the System: HVAC systems typically last between 15-20 years. If your system is approaching or exceeds this age range, replacement might be necessary to avoid sudden breakdowns and inefficiencies.</li>
  
  <li>Inconsistent Temperature: If some rooms in your home are consistently too hot or too cold, it could indicate that your HVAC system is struggling to distribute air evenly. A new system can provide better temperature control.</li>
  
  <li>Noise and Humidity Issues: Excessive noise, rattling, or humidity problems can indicate that your HVAC system is nearing the end of its lifespan. Newer models operate more quietly and effectively manage indoor humidity levels.</li>
  
  <li>Poor Air Quality: If you notice an increase in dust, allergens, or indoor air pollutants despite regular cleaning, your HVAC system may no longer be effectively filtering the air. A new system can improve indoor air quality.</li>
  
  <li>Technology and Efficiency: Advances in HVAC technology have led to more energy-efficient systems with improved features and controls. Upgrading to a newer model can result in significant energy savings and enhanced comfort.</li>
</ul>`,
    "summary": "Identify the signs that indicate it's time to replace your HVAC system.",
    "image": "https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },

]
