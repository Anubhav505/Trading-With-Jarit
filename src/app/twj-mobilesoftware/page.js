import Popup from "@/components/Popup";
import PcFeedbacks from "@/components/PcFeedbacks";
import Hero from "@/components/Hero";
import StockChart from "@/components/StockChart";
import Mobilebox from "@/components/Mobilebox";

export default function Autobot() {
    return (
        <>
            <Hero
                title="TWJ MOBILE SOFTWARE"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}
                imageSrc="/mobileSoftware.png"
            />
            <StockChart />
            <Popup
                title1="Buy Now in Just ₹ 3499 / $40 Including Installation and Lifetime Access"
                title2="Buy Now in Just ₹4999 / $60 Including Installation And Lifetime access + OTC Markets Also"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/anotherUser"
            />
            <Mobilebox />
            <PcFeedbacks 
                title="Signal Software"
            />
            <Popup/>
        </>
    )
}