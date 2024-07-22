import React from 'react';
import TestimonialCard from './Card/TestimonialsCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const userReview = [
  {
    id: 1,
    content: 'Absolutely stellar service! The team was professional, efficient, and got my AC up and running in no time. Highly recommend!',
    name: "John Smith"
  },
  {
    id: 2,
    content: 'My heater was on the fritz, and these guys came through like superheroes. Friendly staff and top-notch service. I’m definitely a fan!',
    name: "Linda Davis"
  },
  {
    id: 3,
    content: 'Had a great experience with this HVAC company. They were on time, knowledgeable, and left everything neat and tidy. Five stars!',
    name: "Carlos Rodriguez"
  },
  {
    id: 4,
    content: 'Best HVAC service I’ve ever used! They took the time to explain everything and didn’t try to upsell me. Honest and reliable!',
    name: "Michelle Brown"
  },
  {
    id: 5,
    content: 'Exceptional service from start to finish. They fixed my AC quickly and the cost was reasonable. I couldn’t be happier!',
    name: "James Williams"
  },
  {
    id: 6,
    content: 'The team went above and beyond to ensure my HVAC system was working perfectly. I couldn’t ask for better service!',
    name: "Jennifer Wilson"
  },
  {
    id: 7,
    content: 'Quick, friendly, and professional. They fixed my furnace in no time, and it’s been running smoothly ever since.',
    name: "Chris Johnson"
  },
  {
    id: 8,
    content: 'Amazing service! The technicians were courteous and efficient, and they left no mess behind. Highly recommended!',
    name: "Patricia Martinez"
  },
  {
    id: 9,
    content: 'I had a fantastic experience with this company. They are knowledgeable, friendly, and reasonably priced. Will use them again!',
    name: "Robert Anderson"
  },
  {
    id: 10,
    content: 'Fast and efficient! The HVAC team came out, diagnosed the issue, and had my AC running better than ever.',
    name: "Sarah Taylor"
  },
  {
    id: 11,
    content: 'Professional, courteous, and efficient. The technician did a great job explaining the issue and fixing it promptly. Highly satisfied!',
    name: "Michael Clark"
  },
  {
    id: 12,
    content: 'Top-notch service! The team arrived on time, fixed the issue quickly, and were super friendly. Would definitely recommend!',
    name: "Emily Hernandez"
  },
  {
    id: 13,
    content: 'Great service! The techs were professional and respectful of my home. They fixed my heater in no time and at a reasonable price.',
    name: "Daniel Lewis"
  },
  {
    id: 14,
    content: 'I’m impressed with their quick response and excellent service. The technicians were friendly and got the job done right.',
    name: "Jessica Walker"
  },
  {
    id: 15,
    content: 'Outstanding service from a knowledgeable team. They fixed my AC promptly and provided helpful maintenance tips.',
    name: "David Hall"
  },
  {
    id: 16,
    content: 'Reliable, professional, and friendly. They diagnosed the issue quickly and had my heating system running smoothly again.',
    name: "Susan Allen"
  },
  {
    id: 17,
    content: 'Fantastic experience! The team was punctual, professional, and did a thorough job fixing my HVAC system.',
    name: "Mark Young"
  },
  {
    id: 18,
    content: 'The best HVAC company I’ve ever dealt with. They were prompt, courteous, and provided high-quality service.',
    name: "Karen King"
  },
  {
    id: 19,
    content: 'Friendly and knowledgeable technicians. They explained everything clearly and fixed my AC efficiently. Highly recommend!',
    name: "Brian Scott"
  },
  {
    id: 20,
    content: 'They went above and beyond to ensure my satisfaction. The technicians were friendly, professional, and did a great job.',
    name: "Amanda Green"
  }
];


const Testimonial = () => {
  return (
    <div className=' md:w-[70vw] py-4   mx-auto justify-center '>
      <div className="px-3 sm:px-0 mb-3 ">
        <div className="font-semibold flex justify-center text-center items-center tracking-tight text-read text-lg  py-2 w-full mb-2 ">People leader love the Capable service experiance</div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          // Uncomment and configure for different screen sizes if needed
          breakpoints={{
            640: { slidesPerView: 1 },
            641: { slidesPerView: 2 },
            1500: { slidesPerView: 3 },
          }}
        >
          {
            userReview.map((item) => (
              <SwiperSlide className="bg-gray-50 border border-gray-100 p-3 rounded-lg" key={item.id}>
                <TestimonialCard id={item.id} name={item.name} content={item.content} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
