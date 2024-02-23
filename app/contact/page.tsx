"use client"
import React , {useEffect} from 'react'







const Contact = () => {


  return (
    <section className="py-16 bg-gray-100 ">
    <div className="max-w-6xl px-4 mx-auto">
        <div className="p-6   rounded-lg   ">
            <div className="pb-6   ">
                <h2 className="text-xl font-bold text-gray-800 md:text-3xl ">
                    Contact us
                </h2>
                <p className="text-xs font-medium text-gray-500">
                    Lorem ipsum dor amet set ispicuous
                </p>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-base font-semibold text-gray-700 ">
                                Name
                            </p>
                        </div>
                        <div className="w-full p-3 md:w-1/3">
                        
                            <input
                                className="w-full px-4  py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                type="text" placeholder="Web Designer"/>
                      
                        </div>
                        <div className="w-full p-3 md:w-1/3">
                       
                            <input
                                className="w-full px-4  py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                type="text" placeholder="Web Designer"/>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-base font-semibold text-gray-700 ">
                                Email address
                            </p>
                        </div>
                        <div className="w-full p-3 md:flex-1">
                            <input
                                className="w-full px-4 py-2.5  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                type="email" placeholder="adam@gmail.com"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-base font-semibold text-gray-700 ">
                                Country
                            </p>
                        </div>
                        <div className="w-full p-3 md:flex-1">
                            <select
                                className="appearence-none   w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                                name="" id="">
                                <option>US</option>
                                <option>Canada</option>
                                <option>Portugal</option>
                                <option>Nepal</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-sm font-semibold text-gray-800 ">Title</p>
                        </div>
                        <div className="w-full p-3 md:flex-1">
                        <div className="w-full p-3 md:flex-1">
                            <input
                                className="w-full px-4  py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                type="text" placeholder="Web Designer"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-sm font-semibold text-gray-800 ">Message</p>
                        </div>
                        <div className="w-full p-3 md:flex-1">
                            <textarea rows="4" type="message" placeholder="your text here.." required
                                className="block w-full px-4 py-4 leading-tight placeholder-gray-400 border rounded  "></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b border-gray-100 ">
                <div className="w-full md:w-9/12">
                    <div className="flex flex-wrap -m-3">
                        <div className="w-full p-3 md:w-1/3">
                            <p className="text-sm font-semibold text-gray-800 ">Role</p>
                        </div>
                        <div className="w-full p-3 md:flex-1">
                            <input
                                className="w-full px-4  py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                                type="text" placeholder="Web Designer"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-6 flex-wrap -m-1.5">
                <div className="w-full md:w-auto ">
                <p className="flex flex-row py-4 px-8  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 rounded  cursor-pointer text-center">Submit</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact