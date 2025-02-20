'use client';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { motion } from "framer-motion";

export default function ClientFeedbacksTestimonials2() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "/clientFeedbacks/1.png",
        "/clientFeedbacks/2.jpg",
        "/clientFeedbacks/3.png",
        "/clientFeedbacks/4.png",
        "/clientFeedbacks/5.png",
        "/clientFeedbacks/6.png",
        "/clientFeedbacks/7.png",
        "/clientFeedbacks/8.png",
        "/clientFeedbacks/9.jpg",
    ];

    return (
       <>
            <div className=" bg-[#024430] sm:bg-[#0c3e25] text-white p-4 w-full">
                <div className='allSideShadow bg-[#032b1f] p-2 w-full rounded'>
                    <div className='flex justify-center'>
                        <div className='sm:w-[75%] py-6 flex flex-col gap-2'>
                            <h1 className="text-[#ffde72] text-center md:text-left text-xl sm:text-5xl tracking-tighter leading-1 font-semibold mb-4">
                                Client Feedbacks
                            </h1>
                            <p className="tracking-normal text-sm leading-6 px-2 text-justify">
                                TWJ was founded 6 years ago by Jarit Munjal. Since then, we have satisfied thousands of clients and earned their valuable trust.
                                We are very grateful to our clients for sharing their feedback with us.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Client feedback ${index + 1}`}
                                className="w-full h-auto cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    />
                    <div className='absolute top-5 right-5 flex gap-3'>
                        {/* <span>Zoom</span> */}
                        <span className='cursor-pointer'><RxCross2 className="text-3xl"/></span>
                    </div>
                </motion.div>
            )}
       </>
    )
}