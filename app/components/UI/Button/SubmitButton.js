import * as React from "react";

export default function SubmitButton({
    placeholder,
    isLoading,
    disabled,
    isSubmitting,

    ...props
}) {
    return (
        <>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-100 disabled:text-gray-400"
                disabled={disabled}
                onClick={props.onClick}
            >
                {isLoading ? (
                    <>
                        {" "}
                        <i className=" animate-spin bi bi-arrow-counterclockwise"></i>
                    </>
                ) : (
                    <>{placeholder}</>
                )}
            </button>
        </>
    );
}
