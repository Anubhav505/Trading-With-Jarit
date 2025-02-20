'use client';

import React from 'react';

export default function Hero({
    title,
    subtitle,
    imageSrc,
}) {
    return (
        <div className={`py-16 w-full flex justify-center ${'bg-[#024430]'}`}>
            <div className="w-full sm:w-[85%] lg:w-[74%] flex flex-col sm:items-center sm:justify-center gap-6">
                <div className={`py-10 relative sm:bg-none w-full flex flex-col lg:flex-row gap-10`}>
                    <div className="absolute inset-0 bg-[#024430] opacity-85"></div>
                    <div className="lg:w-1/2 z-10 flex flex-col gap-7 text-center sm:text-left px-4 sm:px-0">
                        <h1 className="text-[#ffde72] sm:text-4xl font-extrabold leading-tight text-4xl lg:text-6xl">{title}</h1>
                        <h2 className="text-base sm:text-lg lg:text-2xl">{subtitle}</h2>
                    </div>
                    <div className="lg:w-1/2 flex lg:flex-col items-center gap-12 justify-start sm:justify-center z-10 px-4">
                        <div className="flex sm:items-center flex-col gap-2 relative overflow-hidden w-full max-w-full">
                            <img src={imageSrc} alt="TWJ Software" className="w-full object-contain max-h-[400px] rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
