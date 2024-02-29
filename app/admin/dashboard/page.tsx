"use client";
import React, { useState } from "react";
import CkEditor from "../../components/CkEditor";

const AdminHomePage = () => {
    const [editorValue, setEditorValue] = useState();

    return (
        <div className=" pt-24 w-9/12 mx-auto justify-center ">
            <div className=" m-4  bg-white text-primary  p-6 text-xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black     ">
                Add Service
            </div>
            <div className="flex  flex-col gap-2">
                <div className="w-full ">
                    <label htmlFor="title" className="block  font-normal text-lg mb-2">
                        Service Title<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className=" border-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary "
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
                        className="border-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary"
                    />
                </div>
            </div>
            <div>
                <CkEditor editorValue={editorValue} setEditorValue={setEditorValue} />
            </div>
        </div>
    );
};

export default AdminHomePage;
