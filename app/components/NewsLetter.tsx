import { IoMdSend } from "react-icons/io";

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
                <div className="flex-1 text-center hidden lg:flex">
                    <div className=" w-full  bg-center bg-no-repeat sm:rounded-tr-lg sm:rounded-br-lg" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/trained-engineer-tasked-with-servicing-outdoor-air-conditioner-internal-components-checking-freon-level-calibrating-thermostats-skilled-technician-looking-maintenance-plan-laptop_482257-75187.jpg?t=st=1714873254~exp=1714876854~hmac=4ef4a7f527c1ef5ae6b5337d28f03678e5d6cee1ba5ccbc7b5fa5f3b0111eae5&w=1380')" }}>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NewsLetter;


{/* <div>
<h1 className="lg:text-2xl text-xl font-bold mt-4">
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
            <option  value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
    <textarea
        placeholder="Message"
        rows="4"
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
</div> */}
