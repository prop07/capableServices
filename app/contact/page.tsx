import Image from "next/image";
import helloImage from "../../image/hello.png";


const Contact = () => {
    return (
        <div className=" md:w-9/12  mx-auto justify-center z-20">
            <div className="flex flex-col items-center justify-center ">
                <div>
                    <Image
                        width={700}
                        height={400}
                        className="mt-20"
                        src={helloImage}
                        alt="helloImage"
                    />
                </div>
                <h1 className=" text-3xl md:w-1/2 text-center text-gray-800 p-4">
                    The quickest way to get in touch is to give us a
                    <span className="text-blue-600 hover:text-blue-700 hover:underline  cursor-pointer px-2">
                    <a href="tel:+1(201)892-3487">Call</a>
                    </span>
                    we&apos;ll pick up!
                </h1>
                <div className=" h-0.5 w-5/6 bg-gray-700 mb-4"></div>
                {/* form  */}
                <div className="bg-gray-100 xl:w-4/6 2xl:w-3/6 p-10">
                    <h1 className=" uppercase text-xl font-semibold">
                        Fill out the form below and we&apos;ll get in touch.
                    </h1>
                    <p className=" text-lg py-2">
                        &ldquo;<span className="text-red-500">*</span>&ldquo; indicates
                        required fields
                    </p>
                    <form >
                        <div className="flex md:flex-row flex-col gap-2">
                            <div className="md:w-1/2  ">
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
                            <button className=" cursor-pointer rounded-md bg-primary  py-4 lg:px-8 px-4 text-white text-medium text-center   font-extrabold duration-300 ease-in-out   ">
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
