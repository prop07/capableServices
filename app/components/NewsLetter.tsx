'use client'
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/app/components/UI/Input/InputField";
import Dropdown from "@/app/components/UI/Input/DropDown";
import SubmitButton from "@/app/components/UI/Button/SubmitButton";
import { useEffect, useState } from "react";


const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required."),
    email: yup
        .string()
        .email("Invalid email format.")
        .required("Email is required."),
    subject: yup
        .string()
        .required("Subject is required."),
    serviceType: yup
        .string()
        .required("serviceType is required."),
    message: yup
        .string()
        .required("Message is required."),
});

const serviceTypeList = [
    { id: 1, type: "Heating and Cooling Repair" },
    { id: 2, type: "System Installation" },
    { id: 3, type: "Maintanance" },
    { id: 4, type: "Others" },
]




const NewsLetter = () => {
    
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors, dirtyFields, isSubmitting },
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
    });


    const [serviceType, setServiceType] = useState([]);

    useEffect(() => {
        setValue("serviceType", serviceType.type)
    }, [serviceType])
    

    const submit = async (data) => {
        console.log("data", data);
        reset();
    }

    return (
        <div className=" md:w-[70vw]  mx-auto justify-center  mt-6 sm:mt-0    text-gray-900 flex ">
            <div className=" bg-white lg:border lg:border-gray-100 lg:border-none   rounded-lg   flex justify-center flex-1">
                <div className="p-8 lg:border-l lg:border-t lg:border-b md:border-gray-100 lg:rounded-tl-lg lg:rounded-bl-lg">
                    <div className=" space-y-6">
                        <h1 className="lg:text-xl text-center text-xl font-bold ">
                            Schedule Your HVAC Estimate Today !
                        </h1>
                        <form
                            className="flex flex-col justify-center items-center space-y-6"
                            action="#"
                            onSubmit={handleSubmit(submit)}
                        >
                            <InputField
                                name="name"
                                placeholder="Name *"
                                errors={errors}
                                type={"name"}
                                // onChange={(e) => setValue("email", e.target.value)}
                                // onFocus={() => clearErrors("email")}
                                register={register}
                            />
                            <InputField
                                name="email"
                                placeholder="Email *"
                                errors={errors}
                                // onChange={(e) => setValue("email", e.target.value)}
                                // onFocus={() => clearErrors("email")}
                                register={register}
                            />
                            <Dropdown
                                name="serviceType"
                                placeholder="Service Type *"
                                options={serviceTypeList}
                                optionLabel="type"
                                value={serviceType}
                                errors={errors}
                                onChange={(e) => {
                                    setServiceType(e.target.value);
                                }}
                                onFocus={() => clearErrors("serviceType")}
                            />
                            <InputField
                                name="subject"
                                placeholder="Subject *"
                                errors={errors}
                                // onChange={(e) => setValue("email", e.target.value)}
                                // onFocus={() => clearErrors("email")}
                                register={register}
                            />
                            <InputField
                                name="message"
                                placeholder="Message *"
                                errors={errors}
                                register={register}
                                multiline={true}
                            />
                            <SubmitButton
                                placeholder="Submit"
                                disabled={isSubmitting}
                                isLoading={isSubmitting}
                            />
                        </form>
                    </div>
                </div>
                <div className="flex-1 relative text-center hidden lg:flex">
                    <Image fill={true} style={{ objectFit: "cover", borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }} alt="ac image" src={"https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/otherImage%2FACImage.jpg?alt=media&token=9af70431-467d-4e20-9f02-5f0c05fcf3b2"} />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;


