import { IoMdSend } from 'react-icons/io';

const NewsLetter = () => {
  return (
  
 <div className="grid md:w-9/12 mx-auto bg-primary mb-4  justify-items-center text-center  align-items-center  text-white">
 <div >
    <div
        className="flex flex-wrap items-center  p-5 mx-auto text-left  xl:flex-nowrap md:p-8 ">
        <div className="flex-1 justify-center items-center  mb-5 md:mb-0 md:pr-5 xl:pr-10 ">
            <span className="mb-2 md:text-2xl text-xl md:font-bold font-normal text-white  p-2 ">Subscribe to Newsletter</span>
            <p className="text-white  md:text-base text-xs mt-2">Provide your email to get email notification
            </p>
        </div>
        <div className="w-full px-1 md:w-auto xl:w-1/2">
            <form >
                <div className="flex flex-col sm:flex-row ">
                    <input type="email" id="email" name="email" placeholder="Enter your email address" className="rounded-md mt-2 flex-1 px-3 py-2 placeholder-black text-black sm:mr-5   "/>
                    <button className="mt-2 cursor-pointer  bg-primary py-4 lg:px-8 px-4 text-white md:text-base text-sm border-2 border-white  text-center font-extrabold rounded-md">
        Subscribe
      </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
   
  );
};

export default NewsLetter;