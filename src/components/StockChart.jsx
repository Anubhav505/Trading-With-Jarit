export default function StockChart() {
    const chartItems = [
        {
            imgSrc: "/stockChart/1.jpg",
            altText: "stock Chart 1",
            description: 'Buy/Sell arrows as confirmation – New & Powerful 100 % Non Repaint Arrows',
            description1: '– 1st pair of arrows will give signals based on TREND REVERSAL',
            description2: '– 2nd pair of arrows will give signals based on both TREND REVERSAL & CONTINUATION',
        
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
        <div className="bg-[#134225] flex flex-col gap-20 md:gap-40 p-4 md:p-20 justify-center text-[#fffdde] md:text-white mt-5">

            <div className="flex md:gradiant flex-col lg:flex-row gap-20 md:gap-32">
                <div className="bg-[#032b1f] allSideShadow w-full rounded-xl md:rounded-3xl overflow-hidden shadow-md p-8 flex flex-col md:flex-row lg:flex-col">
                    <img src={chartItems[0].imgSrc} alt={chartItems[0].altText} className="w-full md:w-1/2 lg:w-full  h-auto object-cover" />
                    <div className=" md:w-1/2 lg:w-full p-4 text-center">
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[0].description}</h1>
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[0].description1}</h1>
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[0].description2}</h1>
                    </div>
                </div>
                <div className="bg-[#032b1f] allSideShadow w-full rounded-xl md:rounded-3xl overflow-hidden shadow-md p-8 flex flex-col md:flex-row lg:flex-col">
                    <img src={chartItems[1].imgSrc} alt={chartItems[1].altText} className="w-full md:w-1/2 lg:w-full  h-auto object-cover" />
                    <div className=" md:w-1/2 lg:w-full p-4 text-center">
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[1].description}</h1>
                    </div>
                </div>
            </div>

            <div className="flex md:gradiant flex-col lg:flex-row gap-20 md:gap-32">
                <div className="bg-[#032b1f] allSideShadow w-full rounded-xl md:rounded-3xl overflow-hidden shadow-md p-8 flex flex-col md:flex-row lg:flex-col">
                    <img src={chartItems[2].imgSrc} alt={chartItems[2].altText} className="w-full md:w-1/2 lg:w-full  h-auto object-cover" />
                    <div className="md:w-1/2 lg:w-full p-4 text-center">
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[2].description}</h1>
                    </div>
                </div>
                <div className="bg-[#032b1f] allSideShadow w-full rounded-xl md:rounded-3xl overflow-hidden shadow-md p-8 flex flex-col md:flex-row lg:flex-col">
                    <img src={chartItems[3].imgSrc} alt={chartItems[3].altText} className="w-full md:w-1/2 lg:w-full  h-auto object-cover" />
                    <div className="md:w-1/2 lg:w-full p-4 text-center">
                        <h1 className="text-base sm:text-base lg:text-2xl text-left">{chartItems[3].description}</h1>
                    </div>
                </div>
            </div>

        </div>
    );
}
