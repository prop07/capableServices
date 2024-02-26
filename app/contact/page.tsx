import Image from "next/image";

const Contact = () => {
    return (
        <div className=" md:w-9/12  mx-auto justify-center z-20">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <Image
                        width={600}
                        height={600}
                        className="mt-18"
                        src="https://www.onlineoptimism.com/wp-content/uploads/2021/05/hello-contact--600x298.png"
                        alt="hello"
                    />
                </div>
                <h1 className=" text-3xl md:w-1/2 text-center text-gray-800 p-4">
                    The quickest way to get in touch is to give us a call at
                    <span className="text-green-500 hover:text-primary hover:underline  cursor-pointer px-2">
                        504.324.0073
                    </span>{" "}
                    we&apos;ll pick up!
                </h1>
                <div className=" h-0.5 w-5/6 bg-gray-700 mb-4"></div>
                {/* form  */}
                <div className="bg-gray-100 md:w-1/2 p-10">
                    <h1 className=" uppercase text-xl font-semibold">
                        Fill out the form below and we&apos;ll get in touch.
                    </h1>
                    <p className=" text-lg py-2">
                        &ldquo;<span className="text-red-500">*</span>&ldquo; indicates
                        required fields
                    </p>
                    <form>
                        <div className="flex md:flex-row flex-col gap-2">
                            <div className="md:w-1/2">
                                <label
                                    htmlFor="name"
                                    className="block  font-normal text-lg mb-2"
                                >
                                    Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className=" border-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary "
                                    required
                                />
                            </div>
                            <div className="md:w-1/2">
                                <label
                                    htmlFor="email"
                                    className="block  font-normal text-lg mb-2"
                                >
                                    Email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block  font-normal text-lg mb-2"
                            >
                                Message<span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="border-2  border-gray-400   p-2 w-full focus:outline-none focus:border-primary"
                                rows={5}
                            ></textarea>
                        </div>
                        <div>
                            <button className=" cursor-pointer  bg-green-700 hover:bg-primary  py-4 lg:px-8 px-4 text-white hover:text-black text-medium text-center  border-4 border-black  font-extrabold duration-300 ease-in-out   ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
