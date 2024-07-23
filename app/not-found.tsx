import Link from "next/link"
import Image from "next/image";
import banner from "./../image/notFound.webp"

const NotFound = () => {
    return (
        <div className="h-screen w-screen  flex items-center justify-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-read gap-1">
                <div className="max-w-md space-y-2">
                    <div>
                    <div className="text-5xl  font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                        Sorry we couldn&apos;t find this page.
                    </p>
                    </div>
                    <p className="mb-8 text-read">
                        But don&apos;t worry, you can find plenty of other things on our <Link href={"/"}><span className="text-blue-600">homepage</span></Link>.
                    </p>
                </div>
                <div className="max-w-lg">
                <Image width={500} height={500}  src={banner} alt="404 not found" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;