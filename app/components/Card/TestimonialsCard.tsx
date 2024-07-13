import { FaCircleUser } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ id, name, content, ...props }) => {
  return (
    <div className="" >
      <FontAwesomeIcon icon={faQuoteLeft} size='lg text-read'/>
        <figcaption className="flex  items-center justify-center space-x-3">
          <div>
            <p className=" text-base text-center   text-gray-900 max-w-sm  ">{content}&quot;</p>
            <div className="flex items-center justify-center gap-3  divide-gray-500 ">
              <FaCircleUser className="text-read" size={20} />
              <p className="font-semibold   text-read ">{name}</p>
            </div>
          </div>
        </figcaption>
      </div>
  );
};

export default TestimonialCard;