import Link from "next/link";

const ServiceCard = ({ title, imageSrc, description, buttonText, link }) => (
    <div className="flex flex-col md:flex-row rounded-lg sm:rounded-3xl overflow-hidden allSideShadow py-6 px-6 lg:px-28 bg-[#032b1f] gap-10">
        <div className="md:w-1/2">
            <img src={imageSrc} alt={title} />
        </div>
        <div className="md:w-1/2 flex flex-col justify-evenly gap-5">
            <h1 className="text-[#ffde72] font-medium sm:font-bold leading-none text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center md:text-left">{title}</h1>
            <h1 className="text-base sm:text-base">{description}</h1>
            <Link href={link} className="allSideShadow flex gap-2 bg-white text-[#024430] font-bold py-4 px-10 text-sm justify-center">
                
                    {buttonText}
              
            </Link>
        </div>
    </div>
);

export default function Services() {
    return (
        <div className="sm:bg-[#154424]">
            <h1 className="text-center text-[#ffde72] font-extrabold leading-none text-[5vw] pt-10">OUR SERVICES</h1>
            <div className="w-full py-10 px-2 md:px-6 lg:p-20 flex flex-col gap-24">
                <ServiceCard
                    title="TWJ AUTO TRADING BOT"
                    imageSrc="atuoTradingBot.jpg"
                    description="TWJ AUTOBOT is an automated trading robot for binary options. It automatically trades according to the multiple inbuilt strategies. It has upto 90 to 95% accuracy and you can customise your target, stoploss and trade amount."
                    buttonText="EXPLORE TWJ AUTO TRADING BOT"
                    link="/autotrading-bot"
                />
                <ServiceCard
                    title="TWJ PC SOFTWARE"
                    imageSrc="pcSoftware.jpeg"
                    description="TWJ LIVE SIGNAL SOFTWARE is the best choice when it comes to Manual Trading in Binary Options using a signal software. With such powerful confirmations and arrows you can give your trading a BOOST!"
                    buttonText="EXPLORE TWJ PC SOFTWARE"
                    link="/twj-p-c-software" 
                />
                <ServiceCard
                    title="TWJ MOBILE SOFTWARE"
                    imageSrc="mobileSoftware.png"
                    description="OUR TWJ LIVE SIGNAL SOFTWARE is compatible with Mobile Phones as well. It supports Android & IOS devices."
                    buttonText="EXPLORE TWJ MOBILE SOFTWARE"
                    link="/twj-mobilesoftware" 
                />
            </div>
        </div>
    );
}
