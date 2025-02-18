import Link from "next/link"
import {Search} from "lucide-react"
export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-6 bg-[#024430]">
            <div className="flex items-center gap-6">
                <div>
                    <img src="/twj-logo.jpeg" alt="Trading With Jarit brand logo" />
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

                <Search />
            </div>
        </div>
    )
}