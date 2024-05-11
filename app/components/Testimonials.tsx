"ise client"
import React, { useState, useEffect } from 'react';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      content: 'Flowbite has become an essential part  workflow. The consistent design system and responsive components make it a pleasure to work with.',
      name: "Sarah Wilson"
    },
    {
      id: 5,
      content: 'I recently used Flowbite for a client project, and they were thrilled with the end result',
      name: "David Lee"
    }
  ];

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? userReview.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === userReview.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative lg:w-8/12 sm:w-9/12 w-11/12 mx-auto">
      <div className="carousel flex overflow-hidden">
        {userReview.map((review, index) => (
          <div
            key={review.id}
            className={`carousel-item flex-none w-full ${index === currentSlide ? 'block' : 'hidden'
              }`}
          >
            <div className="flex items-center mx-auto lg:w-8/12 sm:w-9/12 w-10/12 justify-center h-96  text-gray-800 text-3xl">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg className="h-12 mx-auto mb-3 text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                  </svg>
                  <blockquote>
                    <p className="  text-lg   sm:text-2xl font-medium text-gray-900  ">&quot;{review.content}&quot;</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                      <div className="pr-3  text-xl sm:text-2xl  sm:font-medium text-gray-900 ">{review.name}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full"
        onClick={goToPrevSlide}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full"
        onClick={goToNextSlide}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
