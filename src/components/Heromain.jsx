'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function Heromain({
    title,
    subtitle,
    description,
}) {
    return (
        <div className={`h-screen w-full flex justify-center ${'bg-[#024430]'}`}>
            <div className="w-full sm:w-[85%] lg:w-[74%] flex flex-col sm:items-center sm:justify-center gap-6">
                <div className={`py-10 relative sm:bg-none w-full flex flex-col lg:flex-row gap-10 bg-cover bg-center bg-[url('/hero.jpg')]`}>
                    <div className="absolute inset-0 bg-[#024430] opacity-85"></div>

                    <div className="lg:w-1/2 z-10 flex flex-col gap-7 text-center sm:text-left px-4 sm:px-0">
                        <h1 className="text-[#ffde72] sm:text-4xl font-extrabold leading-tight text-4xl lg:text-6xl">{title}</h1>
                        <h2 className="text-base sm:text-lg lg:text-2xl">{subtitle}</h2>
                    </div>

                    {/* Left side now only contains the counter */}
                    <div className="lg:w-1/2 flex lg:flex-col items-center gap-12 justify-start sm:justify-center z-10 px-4">
                        <div className="flex sm:items-center flex-col gap-1 sm:gap-2">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold sm:font-semibold">
                                <CountUp start={0} end={5000} duration={2.5} separator="," />
                                +
                            </h1>
                            <h2 className="text-lg sm:text-xl font-normal">Satisfied Clients</h2>
                        </div>
                        <div className="flex flex-col sm:items-center gap-1 sm:gap-2">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold sm:font-semibold">
                                <CountUp start={0} end={6} duration={2.5} />
                                +
                            </h1>
                            <h2 className="text-lg sm:text-xl font-normal">Years of Trust</h2>
                        </div>
                    </div>
                </div>

                {/* Description section added back */}
                <div>
                    <p className="text-xl sm:text-2xl text-center sm:text-start px-4 sm:px-0">{description}</p>
                </div>
            </div>
        </div>
    );
}
