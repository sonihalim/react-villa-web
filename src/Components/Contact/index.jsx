import { FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Contact () {
    return (
    <div className="md:flex-row gap-4 flex flex-col mx-10 pt-40 pb-[450px] md:pb-[600px] xl:mx-32 2xl:mx-52 min-[1918px]:mx-96 min-[1918px]:pb-[700px]"> 
        <div className=" gap-5 flex flex-col">
            <div>
                <h1 className="text-black text-lg font-bold text-justify">Head Office</h1>
                <div className="text-black text-justify">Komplek, Permai Jl. Pd. Belimbing No.2, RT.03/RW.04/RW, Jurang Mangu Barat, Kota Tangerang Selatan, Banten 15233</div>
            </div>
            <div className="text-black flex flex-row gap-5 justify-between">
                <div className="font-bold">Rekening Hanya Atas Nama : Lorem, ipsum.</div>
                <div className="flex flex-row justify-center gap-5">
                    <a href="https://www.instagram.com/thekatavilla" target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center"><FaInstagram size={20}/> </a>
                    <a href="https://api.whatsapp.com/send/?phone=6289612586893&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center"><FaWhatsapp size={20}/> </a>
                    <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=marketing@moonocreative.com"  target="_blank" rel="noreferrer" className="flex flex-row gap-2 items-center"><MdOutlineMail size={20}/> </a>
                </div>
            </div>
        </div>
       
        <iframe title='Maps'  className="sm:h-58 border-2 rounded-xl w-full  lg:h-60" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.87811443238294!2d106.7241326922147!3d-6.257166308342339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12fba275fe9%3A0xfe7820c4ef55dbeb!2sSakuta%20Coffee!5e0!3m2!1sid!2sid!4v1706788950523!5m2!1sid!2sid" allowfullscreen="" loading="lazy"></iframe>
    </div>
    )
}

export default Contact