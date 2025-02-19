import Link from "next/link";

export default function Forex() {
    return (
        <div className=" bg-[#093c27] text-lg md:text-5xl px-2 sm:px-4 flex flex-col">
            <div className="gradiant flex flex-col gap-6 text-base font-light py-10">
                <h1 className="text-[#ffde72] text-xl md:text-4xl lg:text-[2.75rem] font-semibold">How to use TWJ LIVE SIGNALS SOFTWARE to trade in forex market ?</h1>
                <p className="leading-6">You can use TWJ LIVE SIGNALS SOFTWARE in forex with the same confirmations as in binary; however, the timeframe matters a lot. It depends whether you want to take a forex position for a few hours to minutes (known as scalping), intraday, or weekly timeframe</p>
                <p>So this should be your perfect timeframe</p>
                <h1>✅FOR SCALPING- 5 MIN TIMEFRAME</h1>
                <h1>✅INTRADAY – 30 MIN TIMEFRAME</h1>
                <h1>✅SWING TRADE – 4H OR DAILY TIMEFRAME</h1>
            </div>

            <div className="gradiant flex flex-col gap-6 pt-10 pb-20">
                <h1 className="text-[#ffde72] text-xl md:text-4xl lg:text-[2.75rem] font-semibold">How to set target & sl in forex using the software ?</h1>
                <p className="leading-6 text-base font-light">So for this you need to keep 2 things in mind , first one is ( RRR which means risk to reward ratio ) and second one is the important support and resistance zones</p>
            </div>

            <div className="allSideShadow bg-[#032b1f] flex flex-col md:flex-row p-5 gap-5 lg:px-44">
                <div className="md:w-1/2 ">
                    <img src="https://tradingwithjarit.in/wp-content/uploads/2025/02/IMG_20250101_185421_124-2-1024x463-1.jpg" />
                </div>
                <div className="md:w-1/2">
                    <h1 className="leading-6 text-base font-light text-[#fffdde]">
                        The RRR (risk to reward ratio) should be more than 1:2 for better trades. 1:2 to 1:4 are very good ratios. In simple words, if your target is 100 pips away from entry and stop loss is only 25 pips, it means the risk-to-reward ratio is highly good at 1:4.
                    </h1>
                </div>
            </div>
            <Link href={"/twj-pc-software-2"} className="rounded-xl md:rounded-none tracking-widest my-10 py-4 px-10 allSideShadow text-xs font-bold text-center bg-white text-[#024430]">KNOW MORE ABOUT TWJ SIGNAL SOFTWARE</Link>
        </div>

    )
} 