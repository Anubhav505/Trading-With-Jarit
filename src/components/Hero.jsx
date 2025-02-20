'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function Hero({
    title,
    subtitle,
    clientsCount,
    yearsCount,
    description,
    showImage,
    imageSrc,
}) {
    return (
        <div className={`h-screen w-full flex justify-center ${'bg-[#024430]'}`}>
            <div className="w-full sm:w-[85%] lg:w-[74%] flex flex-col sm:items-center sm:justify-center gap-6">
                <div className={`py-10 relative sm:bg-none w-full flex flex-col lg:flex-row gap-10`}>
                    <div className="absolute inset-0 bg-[#024430] opacity-85"></div>

                    <div className="lg:w-1/2 z-10 flex flex-col gap-7 text-center sm:text-left px-4 sm:px-0">
                        <h1 className="text-[#ffde72] sm:text-4xl font-extrabold leading-tight text-4xl lg:text-6xl">{title}</h1>
                        <h2 className="text-base sm:text-lg lg:text-2xl">{subtitle}</h2>
                    </div>

                    <div className="lg:w-1/2 flex lg:flex-col items-center gap-12 justify-start sm:justify-center z-10 px-4">
                        {showImage ? (
                            <div className="flex sm:items-center flex-col gap-2 relative overflow-hidden w-full max-w-full">
                                <img src={imageSrc} alt="TWJ Software" className="w-full object-contain max-h-[400px] rounded-md" />
                            </div>
                        ) : (
                            <>
                                <div className="flex sm:items-center flex-col gap-1 sm:gap-2">
                                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold sm:font-semibold">
                                        <CountUp start={0} end={clientsCount} duration={1.3} separator="," />
                                        +
                                    </h1>
                                    <h2 className="text-lg sm:text-xl font-normal">Satisfied Clients</h2>
                                </div>
                                <div className="flex flex-col sm:items-center gap-1 sm:gap-2">
                                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold sm:font-semibold">
                                        <CountUp start={0} end={yearsCount} duration={2.5} />
                                        +
                                    </h1>
                                    <h2 className="text-lg sm:text-xl font-normal">Years of Trust</h2>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <p className="text-xl sm:text-2xl text-center sm:text-start px-4 sm:px-0">{description}</p>
                </div>
            </div>
        </div>
    );
}
