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
    content: 'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard',
    name: "Rames jskas"
  },
  {
    id: 2,
    content: 'I love the clean and modern design of Flowbite. It makes building websites and applications a breeze',
    name: "Emily Johnson"
  },
  {
    id: 3,
    content: 'As a developer, I appreciate the flexibility and customization options that Flowbite offers.',
    name: "Michael Thompson"
  },
  {
    id: 4,
    content: 'Flowbite has become an essential part of my workflow. The consistent design system and responsive components make it a pleasure to work with.',
    name: "Sarah Wilson"
  },
  {
    id: 5,
    content: 'I recently used Flowbite for a client project, and they were thrilled with the end result',
    name: "David Lee"
  }
];

const Testimonial = () => {
  return (
    <div className=' md:w-9/12  mx-auto justify-center '>
    <div className="px-3 mb-3">
      <p className="font-semibold text-center tracking-tight text-gray-900 text-2xl mb-0.5">Testimonial</p>
      <div className="h-1 m-auto w-2/12 bg-primary rounded-full mb-4"></div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
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
              <TestimonialCard  id={item.id} name={item.name} content={item.content} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
</div>
  );
}

export default Testimonial;
