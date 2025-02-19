import Popup from "@/components/Popup";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";

export default function Autobot() {
    return (
        <>
            <Hero
                title="TWJ PC Software"
                subtitle="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                description="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                showImage={true}
                imageSrc="/mobileSoftware.png"
            />
            <Popup
                title1="Buy Now in Just ₹ 3499 / $40 Including Installation and Lifetime Access"
                title2="Buy Now in Just ₹4999 / $60 Including Installation And Lifetime access + OTC Markets Also"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/anotherUser"
            />
            <Feedbacks />
            <Popup
                title1="Buy Now in Just ₹ 3499 / $40 Including Installation and Lifetime Access"
                title2="Buy Now in Just ₹4999 / $60 Including Installation And Lifetime access + OTC Markets Also"
                note="NOTE: YOU CAN ALSO BUY DIRECTLY FROM US ON TELEGRAM. WE ACCEPT UPI, USDT, BTC, SKRILL AND PAYPAL."
                telegramLink="https://telegram.me/anotherUser"
            />
        </>
    )
}