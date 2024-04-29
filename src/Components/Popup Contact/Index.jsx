import { FaInstagram, FaWhatsapp  } from "react-icons/fa";


function Popup () {
    return (
        <a  href="https://api.whatsapp.com/send/?phone=6289612586893&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="z-10 fixed bg-green-500 p-4 mx-7 my-7 rounded-full bottom-0 right-0"><FaWhatsapp size={25} color="white"/> </a>
    )
}

export default Popup