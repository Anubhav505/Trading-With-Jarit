'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function Hero({ title, subtitle, clientsCount, yearsCount, description, showImage, imageSrc }) {
    return (
        <div className="bg-[#024430] h-screen w-full flex justify-center">
            <div className="w-full sm:w-[74%] flex flex-col sm:items-center sm:justify-center text-justify gap-6">
                <div className="py-10 relative bg-[url('/hero.jpg')] sm:bg-none bg-cover bg-center sm:flex-row w-full flex flex-col gap-10">
                    <div className="absolute inset-0 bg-[#024430] opacity-85"></div>

                    <div className="sm:w-1/2 z-10 flex flex-col gap-7 text-center sm:text-left p-2">
                        <h1 className="text-[#ffde72] text-5xl font-extrabold leading-none sm:text-6xl">{title}</h1>
                        <h1 className="text-xl sm:text-2xl">{subtitle}</h1>
                    </div>

                    {/* Conditional Rendering: Show Image or Counters */}
                    <div className="sm:w-1/2 flex sm:flex-col items-center gap-12 justify-start sm:justify-center z-10 px-4">
                        {showImage ? (
                            <div className="flex sm:items-center flex-col gap-2">
                                <img src={imageSrc} alt="TWJ Software" className="w-full sm:w-3/4 object-contain" />
                            </div>
                        ) : (
                            <>
                                <div className="flex sm:items-center flex-col gap-1 sm:gap-2">
                                    <h1 className="text-4xl sm:text-7xl font-bold sm:font-semibold">
                                        <CountUp start={0} end={clientsCount} duration={1.3} separator="," />
                                        +
                                    </h1>
                                    <h1 className="text-lg font-normal">Satisfied Clients</h1>
                                </div>
                                <div className="flex flex-col sm:items-center gap-1 sm:gap-2">
                                    <h1 className="text-4xl sm:text-7xl font-bold sm:font-semibold">
                                        <CountUp start={0} end={yearsCount} duration={2.5} />
                                        +
                                    </h1>
                                    <h1 className="text-lg font-normal">Years of Trust</h1>
                                </div>
                            </>
                        )}
                    </div>

                </div>
                <div>
                    <h1 className="text-xl sm:text-2xl text-center sm:text-start px-2">{description}</h1>
                </div>
            </div>
        </div>
    );
}
