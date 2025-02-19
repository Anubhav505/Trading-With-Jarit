import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='bg-white text-[#214b62]'>
            <div className='py-12 flex flex-col sm:flex-row items-center justify-center gap-2 underline font-light text-sm sm:text-base'>
               
                <Link href={"/about-us"}>About Us</Link>
                <Link href={"/return-policy"}>Return Policy</Link>
                <Link href={"/terms-conditions"}>Terms & Conditions</Link>
             
            </div>
            <div className='py-7 border-t border-[#214b62]'>
                <h1 className='text-center font-light text-xs px-10'>
                    Copyright © 2025 Trading With Jarit | Powered by Trading With Jarit
                </h1>
            </div>
        </div>
    );
}
