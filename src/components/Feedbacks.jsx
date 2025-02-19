"use client";
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
    "/feedbacks/1.png", "/feedbacks/2.png", "/feedbacks/3.png",
    "/feedbacks/4.png", "/feedbacks/5.jpg", "/feedbacks/6.jpg",
    "/feedbacks/7.jpg", "/feedbacks/8.jpg", "/feedbacks/9.jpg",
    "/feedbacks/10.jpg", "/feedbacks/11.jpg", "/feedbacks/12.png",
    "/feedbacks/13.png", "/feedbacks/14.png",
];

export default function Feedbacks() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 });

    const scroll = (direction) => emblaApi && (direction === 'prev' ? emblaApi.scrollPrev() : emblaApi.scrollNext());

    return (
        <div className="feedbackGradiant flex flex-col items-center justify-center py-20 gap-6">
            <h1 className="text-[#ffde72] text-xl font-semibold sm:text-6xl text-center">
                TWJ Software Feedbacks
            </h1>
            <div className="relative mx-2">
                <button
                    onClick={() => scroll('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-md z-10"
                >
                    <IoIosArrowBack />
                </button>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {images.map((image, index) => (
                            <div key={index} className="embla__slide">
                                <img
                                    src={image}
                                    alt={`Feedback ${index + 1}`}
                                    className="w-full h-auto object-cover rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => scroll('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full shadow-md z-10"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}
