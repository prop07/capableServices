'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "@/app/components/UI/Input/InputField";
import SubmitButton from "@/app/components/UI/Button/SubmitButton";
import { showLoadingNotification } from "../components/UI/Notification";
import CheckboxField from "../components/UI/Input/CheckBoxField";
import Link from "next/link";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required."),
    message: yup
        .string()
        .required("Review is required."),
    email: yup
        .string()
        .email("Invalid email format.")
        .required("Email is required."),
});

const NewsLetter = () => {
  const [checked, setChecked] = useState(false);


    const {
        control,
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        formState: { errors, isSubmitting },
        clearErrors,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
    });



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
            setChecked(false);
            reset();
        }
    };


    return (
        <div className="md:w-[70vw] mx-auto justify-center p-8 pt-24 md:pt-20  text-gray-900 flex   min-h-[72vh]">
            <div className="bg-white lg:border lg:border-gray-100 lg:border-none rounded-lg flex justify-center flex-1">
                <div className="p-8 flex items-center lg:border-l lg:border-t lg:border-b md:border-gray-100 lg:rounded-tl-lg lg:rounded-bl-lg">
                    <div className="space-y-6 ">
                        <h1 className="text-lg text-center font-bold">
                            Testimonial Form
                        </h1>
                        <form
                            className="flex flex-col justify-center items-center space-y-4"
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
                                name="message"
                                placeholder="Review"
                                errors={errors}
                                register={register}
                                multiline
                            />
                            <div className="flex items-center">
                                <CheckboxField
                                checked={checked}
                                setChecked={setChecked}
                                />
                                <p className="text-xs">
                                    I agree to the <Link className="text-blue-500" href="/">Terms & Conditions</Link>.
                                </p>
                            </div>
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
                        src="https://img.freepik.com/free-photo/close-up-heat-pump-outside-home_23-2149250243.jpg?w=1380&t=st=1719905948~exp=1719906548~hmac=187af6882534175d774bcb4d55d3a9ce88a52a7f9ded8534d7c143f57130dc82"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
