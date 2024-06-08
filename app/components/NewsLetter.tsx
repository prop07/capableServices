'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/app/components/UI/Input/InputField";
import Dropdown from "@/app/components/UI/Input/DropDown";
import SubmitButton from "@/app/components/UI/Button/SubmitButton";
import DateField from "./UI/Input/DateField";
import { showLoadingNotification } from "./UI/Notification";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required."),
    email: yup
        .string()
        .email("Invalid email format.")
        .required("Email is required."),
    phone: yup.string()
        .matches(/^\+?\d{1,3}\s?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/, "Must be a valid phone number with optional '+' and spaces.")
        .required("Phone is required."),
    address: yup
        .string()
        .required("Address is required."),
    serviceType: yup
        .string()
        .required("Service type is required."),
    message: yup
        .string(),
    scheduleDate: yup
        .date()
        .min(new Date(), 'Date at least be today or future date.')
        .required("Date is required"),
});

const serviceTypeList = [
    { id: 1, type: "Heating and Cooling Repair" },
    { id: 2, type: "System Installation" },
    { id: 3, type: "Maintenance" },
    { id: 4, type: "Others" },
];

const NewsLetter = () => {
    const [service, setService] = useState("");
    const [date, setDate] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting },
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
    });

    useEffect(() => {
        setValue("serviceType", service.type);
        clearErrors("serviceType");
    }, [service]);

    useEffect(() => {
        setValue("scheduleDate", date);
    }, [date]);

    const submit = async (data) => {
        // Show loading notification
        const updatingToast = showLoadingNotification("Processing...");
    
        try {
            // Simulate an API call with a timeout
            await new Promise((resolve) => setTimeout(resolve, 2000));  // Just for demonstration
    
            // This should be your actual success call
            updatingToast.success("Submission successful!");
            console.log(data);
        } catch (error) {
            // On error
            updatingToast.error("Something went wrong. Try again!");
        } finally {
            setService("");
            setDate(null);
            reset();
        }
    };

    return (
        <div className="md:w-[70vw] mx-auto justify-center mt-6 sm:mt-0 text-gray-900 flex">
            <div className="bg-white lg:border lg:border-gray-100 lg:border-none rounded-lg flex justify-center flex-1">
                <div className="p-8 lg:border-l lg:border-t lg:border-b md:border-gray-100 lg:rounded-tl-lg lg:rounded-bl-lg">
                    <div className="space-y-6">
                        <h1 className="lg:text-xl text-center text-xl font-bold">
                            Schedule Your HVAC Estimate Today!
                        </h1>
                        <form
                            className="flex flex-col justify-center items-center space-y-6"
                            onSubmit={handleSubmit(submit)}
                        >
                            <InputField
                                name="name"
                                placeholder="Name"
                                errors={errors}
                                register={register}
                            />
                            <InputField
                                name="email"
                                placeholder="Email"
                                errors={errors}
                                register={register}
                            />
                            <InputField
                                name="phone"
                                placeholder="Phone"
                                errors={errors}
                                register={register}
                            />
                            <Dropdown
                                name="serviceType"
                                placeholder="Service Type"
                                options={serviceTypeList}
                                optionLabel="type"
                                value={service}
                                errors={errors}
                                onChange={(e) => {
                                    setService(e.target.value);
                                }}
                            />
                            <InputField
                                name="address"
                                placeholder="Address"
                                errors={errors}
                                register={register}
                            />
                            <DateField
                                name="scheduleDate"
                                value={date}
                                placeholder="Pick Date"
                                onChange={(value) => { setDate(value); clearErrors("scheduleDate"); }}
                                errors={errors}
                            />
                            <InputField
                                name="message"
                                placeholder="Message (optional)"
                                errors={errors}
                                register={register}
                                multiline
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
                    <Image
                        fill
                        style={{ objectFit: "cover", borderTopRightRadius: "8px", borderBottomRightRadius: "8px" }}
                        alt="ac image"
                        src="https://firebasestorage.googleapis.com/v0/b/capableservices-4e5f8.appspot.com/o/otherImage%2FACImage.jpg?alt=media&token=9af70431-467d-4e20-9f02-5f0c05fcf3b2"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
