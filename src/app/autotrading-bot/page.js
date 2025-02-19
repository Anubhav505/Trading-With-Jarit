import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";

export default function Autobot() {
    return (
        <>
            <Hero
                title="TWJ PC Software"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}  // Show image instead of counters
                imageSrc="/atuoTradingBot.jpg"  // Your image URL
            />
            <Feedbacks />
        </>
    )
}