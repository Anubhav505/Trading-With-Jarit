export default function StockChart() {
    const chartItems = [
        {
            imgSrc: "/stockChart/1.jpg",
            altText: "stock Chart 1",
            description: "Buy/Sell arrows as confirmation – New & Powerful 100% Non Repaint Arrows – 1st pair of arrows will give signals based on TREND REVERSAL – 2nd pair of arrows will give signals based on both TREND REVERSAL & CONTINUATION"
        },
        {
            imgSrc: "/stockChart/2.jpg",
            altText: "stock Chart 2",
            description: "Trendline – Price action based tool for identifying retests & breakouts automatically"
        },
        {
            imgSrc: "/stockChart/3.jpg",
            altText: "stock Chart 3",
            description: "Last confirmation- Present at the bottom of setup our buy sell indicator which works as a confirmation for a sureshot trade – When it creates blue bar it works as a confirmation for call trade & when it creates orange bar then its confirmation for a put trade (refer to the image)"
        },
        {
            imgSrc: "/stockChart/4.jpg",
            altText: "stock Chart 4",
            description: "Buy/Sell arrows as confirmation – New & Powerful 100% Non Repaint Arrows – 1st pair of arrows will give signals based on TREND REVERSAL – 2nd pair of arrows will give signals based on both TREND REVERSAL & CONTINUATION"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 justify-center">
            {/* First chart item */}
            <div className="allSideShadow w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={chartItems[0].imgSrc} alt={chartItems[0].altText} className="w-full h-auto object-cover" />
                <div className="p-4 text-center">
                    <h1 className="text-lg sm:text-base lg:text-xl text-gray-800">{chartItems[0].description}</h1>
                </div>
            </div>

            {/* Second chart item */}
            <div className="allSideShadow w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={chartItems[1].imgSrc} alt={chartItems[1].altText} className="w-full h-auto object-cover" />
                <div className="p-4 text-center">
                    <h1 className="text-lg sm:text-base lg:text-xl text-gray-800">{chartItems[1].description}</h1>
                </div>
            </div>

            {/* Third chart item */}
            <div className="allSideShadow w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={chartItems[2].imgSrc} alt={chartItems[2].altText} className="w-full h-auto object-cover" />
                <div className="p-4 text-center">
                    <h1 className="text-lg sm:text-base lg:text-xl text-gray-800">{chartItems[2].description}</h1>
                </div>
            </div>

            {/* Fourth chart item */}
            <div className="allSideShadow w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img src={chartItems[3].imgSrc} alt={chartItems[3].altText} className="w-full h-auto object-cover" />
                <div className="p-4 text-center">
                    <h1 className="text-lg sm:text-base lg:text-xl text-gray-800">{chartItems[3].description}</h1>
                </div>
            </div>
        </div>
    );
}
