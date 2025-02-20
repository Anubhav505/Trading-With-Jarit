export default function Mobilebox() {
    return (
        <div className="flex flex-col md:flex-row allSideShadow my-20 mx-2 p-10 gap-10 h-auto md:h-screen">
            <div className="w-full md:w-1/2 relative overflow-hidden">
                <img src="/mobile.jpg" alt="mobile" className="object-contain w-full h-full" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center text-lg md:text-2xl">
                <h1 className="text-xl md:text-xl lg:text-3xl">🟢 Make TWJ LIVE SIGNALS SOFTWARE your Most Valuable Asset !!</h1>
                <h1 className="text-sm md:text-xl lg:text-3xl">
                    ⚡ For every trader who actively trades in the binary options market & spends hours of time in analyzing charts, drawing price action levels- Support, Resistance, Trendline etc which can be done in just a single click with our software. On top of that you get real-time signal alerts with arrows for all live and otc pairs.
                </h1>
                <h1 className="text-sm md:text-xl lg:text-3xl">🟢 Alert Timeframe is customisable as well – 1 min, 5 min, 10 min, 15 mins etc</h1>
            </div>
        </div>
    );
}
