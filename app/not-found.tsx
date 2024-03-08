import Link from "next/link"
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="h-screen w-screen  flex items-center justify-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 gap-1">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                        Sorry we couldn&apos;t find this page.
                    </p>
                    <p className="mb-8">
                        But don&apos;t worry, you can find plenty of other things on our homepage.
                    </p>
                    <Link href={"/"} className="px-4  py-2 text-sm font-medium   text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue  hover:bg-gray-700">
                    Homepage
                    </Link>
                </div>
                <div className="max-w-lg">
                <Image width={500} height={500}  src="https://img.lovepik.com/element/40021/7866.png_1200.png" alt="404 not found" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;