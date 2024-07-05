import Image from "next/image";
import banner from "../../image/contact.jpg"


const Contact = () => {
    return (
       <div className="">
        <section className="w-full relative overflow-hidden mb-4">
                <div className="h-[50vh] w-[100vw] relative">
                    <Image
                        fill={true}
                        style={{ objectFit: "cover" }}
                        src={banner}
                        alt="banner"
                        className=""
                    />
                    {/* Gradient overlay for fading effect at the bottom 10% */}
                    <div className="absolute bottom-0 left-0 right-0 h-[0.5%] bg-gradient-to-b from-transparent to-white"></div>
                </div>
                <div className="absolute inset-0 bg-background/50 dark:bg-background/70 flex items-center justify-center p-2  mt-20 sm:mt-0 text-center backdrop-blur-sm">
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-xl md:text-4xl font-bold tracking-tight text-white">
                            Contact Us
                        </h1>
                        <p className="font-semibold text-xs sm:text-base text-white">
                            Our team will reach out to you soon
                        </p>
                    </div>
                </div>
            </section>
       </div> 
    );
};

export default Contact;
