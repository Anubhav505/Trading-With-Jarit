import Faq from "@/components/Faq";
import PcFeedbacks from "@/components/PcFeedbacks";
import Hero from "@/components/Hero";
import StockChart from "@/components/StockChart";
import Popup from "@/components/Popup";

export default function PcSoftware() {
    return (
        <>
            <Hero
                title="TWJ PC SOFTWARE"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}  // Show image instead of counters
                imageSrc="/pcSoftware.jpeg"
            />
            <div>
                <StockChart />
            </div>
            <div className="flex flex-col md:flex-row allSideShadow my-20 mx-2 p-10 gap-10 h-auto md:h-screen">
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <img src="/mobile2.jpg" alt="mobile" className="object-contain w-full h-full" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center text-lg md:text-2xl">
                    <h1 className="text-xl md:text-xl lg:text-3xl">⚡️ With TWJ LIVE SIGNALS SOFTWARE you will get Real-Time Signal Alerts so that you never miss any good trade opportunity.</h1>
                    <h1 className="text-sm md:text-xl lg:text-3xl">
                        🟢 Compatible With Laptop / Pc / Mac & Android Phones
                    </h1>
                    <h1 className="text-sm md:text-xl lg:text-3xl">🟢 Alert Timeframe is customisable as well – 1 min, 5 min, 10 min, 15 mins etc.</h1>
                </div>
            </div>
            <Popup
                title1="Buy Now in Just ₹ 3499 / $40 Including Installation and Lifetime Access"
                title2="Buy Now in Just ₹4999 / $60 Including Installation And Lifetime access + OTC Markets Also"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/anotherUser"
            />
            <PcFeedbacks
                title="Signal Software"
            />
            <Faq />
            <Popup
                title1="Buy Now in Just ₹ 3499 / $40 Including Installation and Lifetime Access"
                title2="Buy Now in Just ₹4999 / $60 Including Installation And Lifetime access + OTC Markets Also"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/anotherUser"
            />
        </>
    )
}