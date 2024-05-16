import Image from "next/image";
const NewsLetter = () => {
    return (
        <div className=" md:w-[80%] px-2 mt-6 sm:mt-0  mx-auto  text-gray-900 flex justify-center">
            <div className="  sm:m-10 bg-white border border-gray-100 lg:border-none  shadow-xl rounded-lg  flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 lg:border-l lg:border-t lg:border-b border-gray-100 lg:rounded-tl-lg">
                    <div>
                        <h1 className="lg:text-xl text-center text-xl font-bold mt-4">
                            Schedule Your HVAC Estimate Today !
                        </h1>
                        <form
                            action="https://fabform.io/f/xxxxx"
                            method="post"
                            className="ml-auo space-y-4 p-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
                            />
                            <div>
                                <p className="w-full text-start ml-2 text-gray-400 text-sm" >
                                    Service Type:
                                </p>
                                <select
                                    className="w-full py-2.5 px-4 rounded-md bg-white border"
                                    name="cars"
                                    id="cars"
                                >
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                name="message"
                                className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
                            ></textarea>
                            <button
                                type="button"
                                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                            >
                                Book It!
                            </button>
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


