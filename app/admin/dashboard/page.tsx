"use client";
import React, { useState } from "react";
import CkEditor from "@/app/components/CkEditor";

const AdminHomePage = () => {
    const [editorValue, setEditorValue] = useState<string | undefined>();

    return (
        <div className=" pt-24 w-9/12 mx-auto justify-center ">
            <div className=" m-4  bg-white text-primary  p-6 text-xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black     ">
                Add Service
            </div>
            {/* <div className="flex gap-2">
            <div className="flex w-1/2 flex-col gap-2">
                <div className="w-full ">
                    <label htmlFor="title" className="block  font-normal text-lg mb-2">
                        Service Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className=" border-b-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary "
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="imageUrl" className="block  font-normal text-lg mb-2">
                        imageUrl
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        className="border-b-2   border-gray-400   p-2 w-full focus:outline-none focus:border-primary"
                    />
                </div>
            </div>  
            <div className="w-1/2">
            <CkEditor editorValue={editorValue ? editorValue : ""} setEditorValue={setEditorValue} />
            </div>
            </div> */}
            </div>
    );
};

export default AdminHomePage;
