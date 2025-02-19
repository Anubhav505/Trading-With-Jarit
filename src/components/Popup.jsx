import Link from "next/link";

export default function Popup({ title1, title2, title3, note, telegramLink }) {
    return (
        <div className="flex items-center justify-center p-20">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="text-black p-4 text-center bg-white rounded-lg font-semibold text-s4 flex-1">{title1}</div>
                    <div className="text-black p-4 text-center bg-white rounded-lg font-semibold text-s4 flex-1">{title2}</div>
                    {title3 && (
                        <div className="text-black p-4 text-center bg-white rounded-lg font-semibold text-s4 flex-1">
                            {title3}
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-[#fffdde]">{note}</h1>
                    <Link className="text-sky-500 underline" href={telegramLink}>
                        {telegramLink}
                    </Link>
                </div>
            </div>
        </div>
    );
}
