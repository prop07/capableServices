import React from 'react';
import BlogCard from '../components/Card/BlogCard';
import { Metadata } from "next";


export const metadata: Metadata={
    title:"Blog",
    description:"Your Comfort is Our Mission."
  }

const Page = () => {
    return (
        <div className='md:pt-16 pt-24 py-4 md:w-[70vw]  justify-center mx-auto'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                {
                    blogData.map((item,index)=>{
                        return(
                            <BlogCard key={index} title={item.title} author={item.author} postDate={item.date} content={item.content} summary={item.summary} className="col-span-1 border-b border-gray-200 p-2" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page


const blogData= [
    {
      "title": "Maintaining Your HVAC System for Optimal Performance",
      "author": "John Doe",
      "date": "June 15, 2024",
      "content": "Maintaining your HVAC system is crucial for ensuring optimal performance, energy efficiency, and a comfortable living environment. In this blog post, we'll explore the key steps you can take to keep your HVAC system in top shape. By following these best practices for HVAC maintenance, you can ensure that your system runs smoothly, efficiently, and provides a comfortable living environment for years to come. If you have any questions or need assistance, don't hesitate to contact our team of experts.",
      "summary": "Learn the best practices for keeping your HVAC system running smoothly and efficiently."
    },
    {
      "title": "Top 10 Tips for Heating System Maintenance",
      "author": "Jane Smith",
      "date": "July 5, 2024",
      "content": "Heating system maintenance is essential for keeping your home warm during the colder months. In this blog post, we'll cover the top 10 tips for maintaining your heating system, from regular inspections to cleaning and replacing filters. By following these tips, you can ensure your heating system operates efficiently and reliably.",
      "summary": "Discover the top 10 tips for maintaining your heating system for efficiency and reliability."
    },
    {
      "title": "How to Improve Your AC's Energy Efficiency",
      "author": "Mike Johnson",
      "date": "August 22, 2024",
      "content": "Improving your AC's energy efficiency can lead to lower utility bills and a more comfortable home. This blog post provides practical advice on how to enhance your AC's performance, including proper maintenance, using programmable thermostats, and ensuring good insulation. Implement these tips to make your AC more efficient and save on energy costs.",
      "summary": "Learn how to improve your AC's energy efficiency and reduce your utility bills."
    },
    {
      "title": "Signs It's Time to Replace Your HVAC System",
      "author": "John Doe",
      "date": "September 10, 2024",
      "content": "Knowing when to replace your HVAC system can save you money and prevent unexpected breakdowns. This blog post outlines the signs that indicate it might be time for a new HVAC system, such as frequent repairs, high energy bills, and inconsistent temperatures. If you notice these signs, it might be time to consider an upgrade.",
      "summary": "Identify the signs that indicate it's time to replace your HVAC system."
    },
    {
      "title": "The Benefits of Regular HVAC Maintenance",
      "author": "Jane Smith",
      "date": "October 18, 2024",
      "content": "Regular HVAC maintenance offers numerous benefits, including improved energy efficiency, extended system lifespan, and better indoor air quality. In this blog post, we discuss the advantages of scheduling regular maintenance and how it can help you avoid costly repairs and ensure your system runs smoothly year-round.",
      "summary": "Explore the benefits of regular HVAC maintenance for your home."
    },
    {
      "title": "How to Troubleshoot Common AC Problems",
      "author": "Mike Johnson",
      "date": "November 2, 2024",
      "content": "AC problems can be frustrating, but many common issues can be resolved with simple troubleshooting steps. This blog post covers how to identify and fix common AC problems, such as poor airflow, strange noises, and refrigerant leaks. Learn how to troubleshoot your AC and when to call a professional for help.",
      "summary": "Learn how to troubleshoot and fix common AC problems yourself."
    },
    {
      "title": "Preparing Your Heating System for Winter",
      "author": "John Doe",
      "date": "December 1, 2024",
      "content": "As winter approaches, it's important to prepare your heating system to ensure it operates efficiently and reliably. This blog post provides a checklist for getting your heating system ready for winter, including steps like inspecting the system, cleaning components, and testing the thermostat. Follow these steps to stay warm all winter long.",
      "summary": "Prepare your heating system for winter with our comprehensive checklist."
    },
    {
      "title": "Understanding Different Types of HVAC Filters",
      "author": "Jane Smith",
      "date": "January 10, 2025",
      "content": "HVAC filters play a crucial role in maintaining indoor air quality and system efficiency. This blog post explains the different types of HVAC filters, their benefits, and how to choose the right one for your system. Understand the importance of regular filter replacement to keep your HVAC system running smoothly.",
      "summary": "Learn about different types of HVAC filters and their benefits."
    },
    {
      "title": "How to Extend the Life of Your Cooling System",
      "author": "Mike Johnson",
      "date": "February 20, 2025",
      "content": "Extending the life of your cooling system can save you money and ensure reliable performance. This blog post offers tips on how to maintain and care for your cooling system, including regular maintenance, cleaning, and addressing issues promptly. Follow these tips to prolong the life of your cooling system.",
      "summary": "Discover tips to extend the life of your cooling system and save money."
    },
    {
      "title": "The Importance of Proper HVAC Sizing",
      "author": "John Doe",
      "date": "March 15, 2025",
      "content": "Proper HVAC sizing is essential for achieving optimal performance and energy efficiency. This blog post discusses the importance of correctly sizing your HVAC system, the consequences of improper sizing, and how to ensure your system is the right size for your home. Learn why HVAC sizing matters and how to get it right.",
      "summary": "Understand the importance of proper HVAC sizing for performance and efficiency."
    },
    {
      "title": "How to Reduce Heating Costs This Winter",
      "author": "Jane Smith",
      "date": "April 5, 2025",
      "content": "Reducing heating costs during the winter can help you save money while keeping your home comfortable. This blog post provides tips on how to lower your heating expenses, such as sealing drafts, using programmable thermostats, and performing regular maintenance. Implement these strategies to reduce your heating costs this winter.",
      "summary": "Learn how to reduce heating costs and keep your home comfortable this winter."
    },
    {
      "title": "Common Cooling System Issues and Solutions",
      "author": "Mike Johnson",
      "date": "May 12, 2025",
      "content": "Cooling system issues can arise unexpectedly, but many common problems have straightforward solutions. This blog post covers typical cooling system issues, such as refrigerant leaks, frozen coils, and thermostat malfunctions, and provides solutions to address them. Learn how to handle common cooling system problems effectively.",
      "summary": "Find solutions to common cooling system issues in this blog post."
    },
    {
      "title": "The Role of Thermostats in HVAC Efficiency",
      "author": "John Doe",
      "date": "June 8, 2025",
      "content": "Thermostats play a critical role in the efficiency and performance of your HVAC system. This blog post explores the different types of thermostats, their features, and how they can help you save energy and improve comfort. Understand the role of thermostats in HVAC efficiency and choose the best one for your needs.",
      "summary": "Explore how thermostats contribute to HVAC efficiency and energy savings."
    },
    {
      "title": "Preparing Your AC for the Summer Heat",
      "author": "Jane Smith",
      "date": "July 20, 2025",
      "content": "Preparing your AC for the summer heat is essential for staying cool and comfortable. This blog post provides a guide on how to get your AC ready for the hot months, including cleaning, maintenance checks, and setting the right thermostat temperature. Follow these steps to ensure your AC performs well all summer long.",
      "summary": "Get your AC ready for summer with our preparation guide."
    },
    {
      "title": "The Benefits of Duct Cleaning for Your HVAC System",
      "author": "Mike Johnson",
      "date": "August 30, 2025",
      "content": "Duct cleaning offers several benefits for your HVAC system, including improved air quality, enhanced system efficiency, and extended equipment life. This blog post discusses the importance of duct cleaning, how it is performed, and the benefits it provides. Consider scheduling duct cleaning to keep your HVAC system in top condition.",
      "summary": "Discover the benefits of duct cleaning for your HVAC system."
    }
  ]
  