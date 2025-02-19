import Link from "next/link"
import { Search, EllipsisVertical } from "lucide-react"
export default function Navbar() {
    return (
        <div className=" h-[10vh] sm:h-[23vh] flex items-center">
            <div className="hidden md:block w-full">
                <div className="flex justify-between items-center px-6">
                    <div className="flex items-center gap-6">
                        <div>
                            <Link href={"/"}><img src="/twj-logo.jpeg" alt="Trading With Jarit brand logo" /></Link>
                        </div>
                        <div>
                            <div className="flex gap-6 text-base">
                                <Link href={"/"}>Home</Link>
                                <Link href={"/twj-p-c-software"}>TWJ PC Software</Link>
                                <Link href={"/autotrading-bot"}>TWJ Auto Trading Bot</Link>
                                <Link href={"/twj-mobilesoftware"}>TWJ Mobile Software</Link>
                                <Link href={"/client-feedbacks-testimonials-2"}>Client Feedback & Testimonial</Link>
                                <Link href={"how-to-use-twj-live-signals-software-in-forex-trading"}>How to use TWJ Live Software in Forex</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Search className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="md:hidden w-full flex justify-end p-4">
                <span className="bg-[#1A6C7A] p-3 flex"><EllipsisVertical />TWJ MENU</span>
            </div>
        </div>
    )
}