"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqItems = [
    {
        id: 1,
        question: "In which brokers can I use the software?",
        answer:
            "You can use it in any binary broker like Quotex, Binomo, OlympTrade, IQ Option, Pocket Option.",
    },
    {
        id: 2,
        question: "Is there any difference between mobile & pc software?",
        answer:
            "There is no difference, the software is the same; just the installation process is different, which can be done through AnyDesk or TeamViewer app.",
    },
    {
        id: 3,
        question: "How much signals does it give & any specific time?",
        answer: "You can use our software anytime as it works 24 hours & gives unlimited signals.",
    },
    {
        id: 4,
        question: "What is the accuracy and do you use martingale?",
        answer:
            "Software accuracy is up to 90-95%+ and martingale is not required as it gives direct winning sureshot signals.",
    },
    {
        id: 5,
        question: "What is the software cost?",
        answer:
            "The software cost is $40 / Rs 3499 including installation and lifetime access. With OTC market access, it’s $60 / Rs 4999.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    const handleToggle = (id) => setOpen(open === id ? null : id);

    return (
        <div className="allSideShadow m-2 bg-[#032b1f] py-[20px] px-1 flex flex-col gap-2">
            <h1 className="text-center text-xl md:text-5xl font-bold text-[#FFDE72]">
                Frequently Asked Questions
            </h1>
            <div className="flex-col flex justify-center">
                {faqItems.map(({ id, question, answer }) => (
                    <div key={id} className="relative p-3">
                        <h1
                            className="cursor-pointer bg-[#38584e] font-semibold text-base flex items-center justify-between p-5"
                            onClick={() => handleToggle(id)}
                        >
                            {question}
                            <span className="ml-2 text-xl">
                                {open === id ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        </h1>
                        <div
                            className={`transition-all duration-500 ease-in-out bg-[#38584e] p-4 ${open === id
                                    ? "max-h-screen opacity-100 py-4"
                                    : "max-h-0 opacity-0 overflow-hidden py-0"
                                }`}
                            style={{
                                maxHeight: open === id ? "500px" : "0",
                                transitionProperty: "max-height, opacity, padding",
                            }}
                        >
                            <div>{answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
