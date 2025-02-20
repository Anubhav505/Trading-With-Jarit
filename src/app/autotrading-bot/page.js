import AutobotContainers from "@/components/autobotContainers";
import AutobotFeedbacks from "@/components/AutobotFeedbacks";
import Hero from "@/components/Hero";
import Popup2 from "@/components/Popup2";

export default function Autobot() {
    return (
        <>
            <Hero
                title="TWJ AUTO TRADING BOT"
                subtitle="TWJ AUTOBOT is an automated trading robot for binary options. It automatically trades according to the multiple inbuilt strategies. It has upto 90 to 95% accuracy and you can customise your target, stoploss and trade amount."
                showImage={true}
                imageSrc="/atuoTradingBot.jpg"
            />
            <div className="bg-[#024430] w-full h-auto px-2">

                <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 px-5 md:px-8 py-11 items-center border border-white rounded-lg lg:border-none">
                    <h1 className="text-[#ffde71] md:hidden text-xl font-semibold">WHY ChOOSE TWJ AUTOBOT?</h1>
                    <div className=" w-full md:w-1/2 bg-[#053b2b] rounded-3xl shadow-lg">
                        <video autoPlay loop controls className="w-full h-auto" src="/stockChartVideo.mp4"/>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[#ffde71] text-4xl hidden md:block md:text-4xl lg:text-6xl font-bold mb-4">WHY ChOOSE TWJ AUTOBOT?</h1>
                        <p className="text-lg md:text-xl tracking-wider leading-[1.5rem] text-gray-200">With TWJ Autobot, you gain access to unparalleled accuracy and consistency at prices that are truly unbeatable. Experience the difference today!</p>
                    </div>
                </div>

            </div>
            <AutobotContainers />
            <Popup2/>
            <AutobotFeedbacks
                title="Autobot"
            />
        </>
    )
}