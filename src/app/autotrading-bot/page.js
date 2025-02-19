import AutobotContainers from "@/components/autobotContainers";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";

export default function Autobot() {
    return (
        <>
            <Hero
                title="TWJ PC Software"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}  // Show image instead of counters
                imageSrc="/atuoTradingBot.jpg"  // Your image URL
            />
            <div className="bg-[#024430] w-full h-auto px-2">

                <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 px-5 md:px-8 py-11 items-center border border-white rounded-lg lg:border-none">
                    <h1 className="text-[#ffde71] md:hidden text-xl font-semibold">WHY ChOOSE TWJ AUTOBOT?</h1>
                    <div className=" w-full md:w-1/2 bg-[#053b2b] rounded-3xl shadow-lg">
                        <video autoPlay loop controls className="w-full h-auto" src="/StockChartVideo.mp4"/>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[#ffde71] text-4xl hidden md:block md:text-4xl lg:text-6xl font-bold mb-4">WHY ChOOSE TWJ AUTOBOT?</h1>
                        <p className="text-lg md:text-xl tracking-wider leading-[1.5rem] text-gray-200">With TWJ Autobot, you gain access to unparalleled accuracy and consistency at prices that are truly unbeatable. Experience the difference today!</p>
                    </div>
                </div>

            </div>
            <AutobotContainers />
            <Popup
                title1="BUY THE 1 MONTH LICENSE NOW FOR JUST ₹4299 / $50"
                title2="BUY THE 3 MONTH LICENSE NOW FOR JUST ₹7999 / $90"
                title3="BUY THE YEARLY LICENSE NOW FOR JUST ₹19,999 / $240"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/jaritmunjal12"
            />
            <Feedbacks />
        </>
    )
}