import { FaCircle } from "react-icons/fa6";


export default function About() {
    return (
        <>
            <div className="w-full min-h-screen flex justify-center bg-[#f3f9fb] pt-11 pb-36">
                <div className="bg-white w-full max-w-4xl h-auto p-8 rounded-lg shadow-lg border mt-10 mx-4 sm:mx-10 mb-10 pt-20 border-gray-300">
                    <h1 className="font-bold text-3xl mb-6 text-[#000000]">About Us</h1>

                    <p className="text-l mb-6 text-justify text-gray-700">We are a dedicated platform committed to empowering people with the tools they need to make informed decisions in the fast-paced world of trading. Our mission is to provide users with reliable, easy-to-use software solutions that help simplify the complexities of analysis, enabling traders to focus on what matters most—achieving their goals.</p>

                    <p className="text-l mb-6 text-justify text-gray-700">At <strong className="text-black">Trading with Jarit</strong>, we understand that trading requires accuracy, timing, and insight. Our software is designed with these needs in mind, offering high-quality data analytics and predictive tools for informational purposes only. We strive to maintain high accuracy levels, but also encourage users to make informed decisions and understand that no tool is 100% foolproof.</p>

                    <h1 className="font-bold text-2xl mt-8 mb-6 text-black">Why Choose Us?</h1>
                    <ul className="list-disc pl-8 mb-6 text-black">
                        <li className="mb-3"><strong>Quality:</strong> Our software is crafted with a focus on accuracy and efficiency, helping users streamline your information.</li>
                        <li className="mb-3"><strong>Customer-First Approach:</strong> We’re here for you every step of the way. Whether you need technical support, have questions, or seek guidance, our team is committed to providing top-notch customer service.</li>
                        <li className="mb-3"><strong>Privacy:</strong> We value your privacy and do not sell or distribute your personal data. Our focus is on serving our users, not third parties, ensuring a secure experience.</li>
                    </ul>
                    <p className="text-l mt-4 text-justify text-black">Whether you’re just starting out or are an experienced trader, <strong className="text-black">Trading with Jarit</strong> is here to support you with innovative solutions. We invite you to explore our platform, try our software, and experience the difference that informed trading can make.</p>
                </div>
            </div>
        </>
    );
}