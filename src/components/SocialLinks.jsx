import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillYoutube } from 'react-icons/ai'

export default function SocialLinks() {
    return(
        <div className='flex flex-col gap-10 mb-10'>
            <div className='bg-[#0088cc] flex flex-col justify-center items-center py-8 mx-2 gap-2'>
                <h1 className='text-3xl font-medium text-center'>JOIN US ON TELEGRAM</h1>
                <img src="/telegram.webp" alt="Telegram Link" className='h-32 w-32 sm:h-[10vw] sm:w-[10vw]' />
                <div className='bg-white text-[#024430] py-4 px-10 font-semibold w-[75%] flex justify-center'>
                    <a href="https://telegram.me/olymptradehelper" target='_blank' className='flex items-center gap-2 text-sm'>
                        JOIN US ON TELEGRAM <FaTelegramPlane />
                    </a>
                </div>
            </div>

            <div className='bg-[#c30000] flex flex-col justify-center items-center py-8 mx-2 gap-2'>
                <h1 className='text-3xl font-medium uppercase text-center'>SUBSCRIBE TWJ ON YOUTUBE</h1>
                <img src="/youtube.webp" alt="Telegram Link" className='h-32 w-32 sm:h-[10vw] sm:w-[10vw]' />
                <div className='bg-white text-[#024430] py-4 px-10 font-semibold w-[75%] flex justify-center'>
                    <a href="https://www.youtube.com/@tradingwithjarit" target='_blank' className='flex items-center gap-2 text-sm'>
                        SUBSCRIBE <AiFillYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
}