import Navbar from "./Navbar"
import { FaFacebookF, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaStackOverflow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";
import 'animate.css'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-white text-center mt-14 text-xl md:text-3xl font-bold font-serif mb-16 animate__animated animate__fadeInDown">Connect With Me</h1>
            <div className="text-slate-200 grid md:p-5 md:grid-cols-2 lg:grid-cols-4 lg:p-0  justify-center max-w-xs md:max-w-5xl items-center mx-auto gap-10  text-sm md:text-base animate__animated animate__fadeInDown">
                <a href="https://github.com/josua-stng" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaGithub className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Github</p>
                    <p>Josua Sitanggang</p>
                </a>
                <a href="https://www.linkedin.com/in/josua-sitanggang-25898b214/" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaLinkedin className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Linkedln</p>
                    <p>Josua Sitanggang</p>
                </a>
                <a href="https://www.instagram.com/josuastng/" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaInstagram className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Instagram</p>
                    <p>@josuastng</p>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009735270078" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaFacebookF className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Facebook</p>
                    <p>Josua Sitanggang</p>
                </a>

                <a href="whatsapp://send?text=Hello Josua &phone=+6288264894239" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaWhatsapp className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Whatsapp</p>
                    <p>+62 882 6489 4239</p>
                </a>
                <a href="https://twitter.com/BasherZorro" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaTwitter className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Twitter</p>
                    <p>Josuaaa</p>
                </a>
                <a href="https://stackoverflow.com/users/16142626/josua" target="_blank" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <FaStackOverflow className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Stackoverflow</p>
                    <p>Josua</p>
                </a>
                <a href="#" className="border-2 border-black p-10  flex flex-col justify-center items-center rounded-lg bg-stone-500 hover:bg-stone-600 cursor-pointer ">
                    <MdEmail className="text-slate-200 h-10 w-10 rounded-full border-2 border-gray-100 p-2" />
                    <p className="mt-4 font-bold">Gmail</p>
                    <p>Josua</p>
                </a>

            </div>
            <Footer />
        </div>
    )
}
export default Contact