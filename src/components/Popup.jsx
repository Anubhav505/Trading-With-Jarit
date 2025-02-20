"use client";
import { useState } from "react";
import Link from "next/link";

export default function Popup() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [priceDetails, setPriceDetails] = useState({ priceInINR: "", priceInUSD: "", is3499: false });

    // Function to open the popup with specific price details
    const openPopup = (priceInINR, priceInUSD, is3499) => {
        setPriceDetails({ priceInINR, priceInUSD, is3499 });
        setPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupOpen(false);
    };

    // Redirect function
    const handleRedirect = (price) => {
        if (price === "₹3499") {
            window.location.href = "https://cosmofeed.com/ps/677306526eb1760013163371";
        } else if (price === "$40") {
            window.location.href = "https://pay.hotmart.com/F96941265K?bid=1736494763628";
        } else if (price === "₹4999") {
            window.location.href = "https://cosmofeed.com/ps/67722e96120843001363c4e4";
        } else if (price === "$60") {
            window.location.href = "https://pay.hotmart.com/S96940677S?off=ql8dd6z6&bid=1736494678266";
        }
    };

    return (
        <div>
            {/* Main content */}
            <div className="flex items-center justify-center p-20">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        {/* First price div */}
                        <div
                            className="text-black p-4 text-center bg-white rounded-lg font-semibold text-s4 flex-1 cursor-pointer"
                            onClick={() => openPopup("₹3499", "$40", true)} // Trigger the popup with ₹3499 / $40
                        >
                            <h1>
                                Buy Now in Just ₹3499 / $40 Including Installation and
                                Lifetime Access
                            </h1>
                        </div>

                        {/* Second price div */}
                        <div
                            className="text-black p-4 text-center bg-white rounded-lg font-semibold text-s4 flex-1 cursor-pointer"
                            onClick={() => openPopup("₹4999", "$60", false)} // Trigger the popup with ₹4999 / $60
                        >
                            <h1>
                                Buy Now in Just ₹4999 / $60 Including Installation And Lifetime
                                Access + OTC Markets Also
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-center text-[#fffdde]">
                            NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT
                            UPI, USDT, BTC, SKRILL AND PAYPAL.
                        </h1>
                        <Link className="text-sky-500 underline" href="https://telegram.me/anotherUser">
                            https://telegram.me/anotherUser
                        </Link>
                    </div>
                </div>
            </div>

            {/* Fullscreen Popup */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black"
                    onClick={closePopup}
                >
                    <div
                        className="bg-white p-10 rounded-lg w-full sm:max-w-md md:max-w-4xl max-h-[80vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col mb-4 relative">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center uppercase">Choose Your Payment Option</h1>
                            <h2 className="text-center">Product : PC Software With OTC</h2>
                            <button
                                className="absolute -top-5 right-0 text-2xl"
                                onClick={closePopup}
                            >
                                X
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-evenly gap-4">
                            {priceDetails.is3499 ? (
                                <>
                                    <button
                                        className="px-10 py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg"
                                        onClick={() => handleRedirect("₹3499")}
                                    >
                                        Pay ₹3499 by <br /> UPI/Gpay/Paytm/PhonePe
                                    </button>
                                    <button
                                        className="px-10 py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg"
                                        onClick={() => handleRedirect("$40")}
                                    >
                                        Pay $40 by <br />Visa/Mastercard/PayPal
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="px-10 py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg"
                                        onClick={() => handleRedirect("₹4999")}
                                    >
                                        Pay ₹4999 by <br />UPI/Gpay/Paytm/PhonePe
                                    </button>
                                    <button
                                        className="px-10 py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg"
                                        onClick={() => handleRedirect("$60")}
                                    >
                                        Pay $60 by <br />Visa/Mastercard/PayPal
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
