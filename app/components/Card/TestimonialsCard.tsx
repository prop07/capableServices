import { FaCircleUser } from "react-icons/fa6";

const TestimonialCard = ({ id, name, content, ...props }) => {
  return (
    <div className="" >
      <svg className="h-8 mx-auto mb-3 text-primary " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
      </svg>
        <figcaption className="flex  items-center justify-center space-x-3">
          <div className="space-y-3">
            <p className=" text-lg sm:text-xl text-center   text-gray-900 max-w-sm  ">&quot;{content}&quot;</p>
            <div className="flex items-center justify-center gap-2  divide-gray-500 ">
              <FaCircleUser className="text-primary" size={25} />
              <p className=" text-lg sm:text-xl   text-read ">{name}</p>
            </div>
          </div>
        </figcaption>
      </div>
  );
};

export default TestimonialCard;