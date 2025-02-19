import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import StockChart from "@/components/StockChart";

export default function PcSoftware() {
    return(
        <>
            <Hero
                title="TWJ PC Software"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                description="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}  // Show image instead of counters
                imageSrc="/pcSoftware.jpeg"  // Your image URL
            />
            <div>
                <StockChart />
            </div>
            <Feedbacks />
        </>
    )
}