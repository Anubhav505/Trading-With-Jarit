"use client";
import { useState } from "react";
import Link from "next/link";

export default function Popup() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [priceDetails, setPriceDetails] = useState({
        priceInINR: "",
        priceInUSD: "",
        subscriptionLength: "",  // Add this new field
        is4299: false
    });

    // Function to open the popup with specific price details
    const openPopup = (priceInINR, priceInUSD, subscriptionLength, is4299) => {
        setPriceDetails({ priceInINR, priceInUSD, subscriptionLength, is4299 });
        setPopupOpen(true);
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupOpen(false);
    };

    // Redirect function
    const handleRedirect = (price) => {
        if (price === "₹4299") {
            window.location.href = "https://cosmofeed.com/ps/64753d0724c9b30020e8ab96"; // Replace with your link
        } else if (price === "$50") {
            window.location.href = "https://pay.hotmart.com/X97225241D?bid=1740062662082"; // Replace with your link
        } else if (price === "₹7999") {
            window.location.href = "https://cosmofeed.com/ps/64753eddf68c8e0020329c02"; // Replace with your link
        } else if (price === "$90") {
            window.location.href = "https://pay.hotmart.com/R97225254F?bid=1740062694117"; // Replace with your link
        } else if (price === "₹19999") {
            window.location.href = "https://cosmofeed.com/ps/64753e829ef316001f9626f9"; // Replace with your link
        } else if (price === "$240") {
            window.location.href = "https://pay.hotmart.com/R97225286W?bid=1735203420343"; // Replace with your link
        }
    };

    return (
        <div>
            {/* Main content */}
            <div className="flex items-center justify-center p-6 sm:p-10 lg:p-20">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-10">
                        {/* 1 Month License div */}
                        <div
                            className="text-black p-4 text-center bg-white rounded-lg font-semibold text-sm sm:text-lg flex-1 cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
                            onClick={() => openPopup("₹4299", "$50", "1 Month", true)} // Trigger the popup with ₹4299 / $50
                        >
                            <h1>BUY THE 1 MONTH LICENSE NOW FOR JUST ₹4299 / $50</h1>
                        </div>

                        {/* 3 Month License div */}
                        <div
                            className="text-black p-4 text-center bg-white rounded-lg font-semibold text-sm sm:text-lg flex-1 cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
                            onClick={() => openPopup("₹7999", "$90", "3 Months", false)} // Trigger the popup with ₹7999 / $90
                        >
                            <h1>BUY THE 3 MONTH LICENSE NOW FOR JUST ₹7999 / $90</h1>
                        </div>

                        {/* Yearly License div */}
                        <div
                            className="text-black p-4 text-center bg-white rounded-lg font-semibold text-sm sm:text-lg flex-1 cursor-pointer shadow-lg transform hover:scale-105 transition-transform duration-300"
                            onClick={() => openPopup("₹19999", "$240", "1 Year", false)} // Trigger the popup with ₹19999 / $240
                        >
                            <h1>BUY THE YEARLY LICENSE NOW FOR JUST ₹19999 / $240</h1>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-6 sm:mt-10">
                        <h1 className="text-center text-[#fffdde] text-xs sm:text-lg">
                            NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT
                            UPI, USDT, BTC, SKRILL AND PAYPAL.
                        </h1>
                        <Link className="text-sky-500 underline mt-2 sm:mt-4" href="https://telegram.me/anotherUser">
                            https://telegram.me/anotherUser
                        </Link>
                    </div>
                </div>
            </div>

            {/* Fullscreen Popup */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black"
                    onClick={closePopup} // Close the popup when clicking outside
                >
                    <div
                        className="bg-white p-6 sm:p-10 rounded-lg shadow-2xl w-full max-w-xl sm:max-w-3xl lg:max-w-4xl max-h-full overflow-auto"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside the popup
                    >
                        <div className="flex flex-col mb-4 relative">
                            <h1 className="text-4xl sm:text-6xl font-semibold text-center uppercase">Choose Your Payment Option</h1>
                            <h2 className="text-lg sm:text-xl text-center mt-2">Product : Auto Trading Bot</h2>
                            <h2 className="text-lg sm:text-xl text-center mt-2">Licence: {priceDetails.subscriptionLength}</h2> {/* Show the subscription length dynamically */}
                            <button
                                className="absolute top-0 right-0 text-2xl sm:text-3xl text-red-500 hover:text-red-700"
                                onClick={closePopup}
                            >
                                X
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly gap-4 sm:gap-6">
                            {priceDetails.is4299 ? (
                                <>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("₹4299")}
                                    >
                                        Pay ₹4299 by <br />UPI/Gpay/Paytm/PhonePe
                                    </button>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("$50")}
                                    >
                                        Pay $50 by <br />Visa/Mastercard/PayPal
                                    </button>
                                </>
                            ) : priceDetails.priceInINR === "₹7999" ? (
                                <>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("₹7999")}
                                    >
                                        Pay ₹7999 by <br />UPI/Gpay/Paytm/PhonePe
                                    </button>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("$90")}
                                    >
                                        Pay $90 by <br />Visa/Mastercard/PayPal
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("₹19999")}
                                    >
                                        Pay ₹19,999 by <br />UPI/Gpay/Paytm/PhonePe
                                    </button>
                                    <button
                                        className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#4169e1] border-[#4169e1] border-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                                        onClick={() => handleRedirect("$240")}
                                    >
                                        Pay $240 by <br />Visa/Mastercard/PayPal
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
