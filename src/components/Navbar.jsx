"use client"
import { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";
import { EllipsisVertical } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="h-[10vh] sm:h-[23vh] flex items-center">
            <div className="hidden lg:block w-full">
                <div className="flex justify-between items-center px-6">
                    <div className="flex items-center gap-6">
                        <div>
                            <Link href={"/"}><img src="/twj-logo.jpeg" alt="Trading With Jarit brand logo" /></Link>
                        </div>
                        <div>
                            <div className="flex gap-6 text-base">
                                <Link href={"/"}>Home</Link>
                                <Link href={"/twj-p-c-software"}>TWJ PC Software</Link>
                                <Link href={"/autotrading-bot"}>TWJ Auto Trading Bot</Link>
                                <Link href={"/twj-mobilesoftware"}>TWJ Mobile Software</Link>
                                <Link href={"/client-feedbacks-testimonials-2"}>Client Feedback & Testimonial</Link>
                                <Link href={"how-to-use-twj-live-signals-software-in-forex-trading"}>How to use TWJ Live Software in Forex</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Button */}
            <div className="menu lg:hidden w-full flex justify-end p-4" onClick={toggleMenu}>
                <span className="bg-[#1A6C7A] p-3 flex cursor-pointer"><EllipsisVertical />TWJ MENU</span>
            </div>

            {/* Sliding Menu Options */}
            <div
                className={`menuoptions lg:hidden absolute top-0 w-full text-white bg-[#082a20] flex flex-col justify-center gap-4 px-5 font-semibold z-50 overflow-hidden py-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
                    }`}
            >
                <Link href={"/"} onClick={toggleMenu}>Home</Link>
                <Link href={"/twj-p-c-software"} onClick={toggleMenu}>TWJ PC Software</Link>
                <Link href={"/autotrading-bot"} onClick={toggleMenu}>TWJ Auto Trading Bot</Link>
                <Link href={"/twj-mobilesoftware"} onClick={toggleMenu}>TWJ Mobile Software</Link>
                <Link href={"/client-feedbacks-testimonials-2"} onClick={toggleMenu}>Client Feedback & Testimonial</Link>
                <Link href={"how-to-use-twj-live-signals-software-in-forex-trading"} onClick={toggleMenu}>How to use TWJ Live Software in Forex</Link>
                <span className="close absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
                    <RxCrossCircled className="text-3xl" />
                </span>
            </div>
        </div>
    );
}
