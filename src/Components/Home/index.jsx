import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaBed, FaBath, FaCar, FaWifi, FaTv, FaSwimmer } from "react-icons/fa";
import { GiCookingPot, GiKidSlide, GiPingPongBat } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { IoMdBonfire } from "react-icons/io";
import { MdOutdoorGrill } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Home() {
    const navigate = useNavigate()

    return ( 
        <div className="text-black">
            {/* Bintaro */}
            <div className= "mx-10 pt-16 mb-10 md:pt-20 lg:pt-28 xl:mx-32 2xl:mx-52 2xl:pt-32 2xl:pb-10 min-[1918px]:mx-96">
                {/*container*/}
                <div className="flex flex-col justify-center lg:flex-row">
                    <img className="shadow-md shadow-slate-300 mt-5 rounded-lg w-full h-64 sm:h-96 object-cover lg:shadow-slate-400 lg:shadow-lg  lg:h-[336px]  lg:w-96 lg:mt-0" src="./img/Bintaro/1.png"></img>
                    <div className="flex flex-col">
                        <h1 className="  hidden font-bold lg:text-xl 2xl:text-2xl lg:ml-5 lg:block lg:mb-1 ">The Kata Villa Sakuta</h1>
                        <div className="hidden lg:ml-5 lg:mb-5 text-sm mt-1 lg:flex flex-row  text-right justify-between">
                                <a href="" className="flex text-lg text-blue-500 items-center gap-1"><IoLocationSharp size={20}/>Bintaro, Tangerang Selatan</a>
                                <p className="font-bold text-lg text-right w-max text-red-600">Rp 1.500.000 / night</p>   
                        </div>
                        <div className="hidden h-0 w-0 lg:flex flex-col ml-4 lg:h-auto lg:w-auto">
                            {/* 2xl */}
                            <div className="flex flex-row">
                                <div className="  shadow-md border-gray-200 border-2 shadow-slate-400 rounded-lg p-6 flex flex-row p-25 gap-10 mb-3 w-full ">
                                    <div className='flex flex-col gap-4'>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaBed size={23}/>2 Bed Rooms ( King Size Bed )</p>
                                        <p className="  flex w-max gap-2 items-center text-base"><FaBath size={23}/>2 Bath Rooms</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaCar size={23}/>Parking Lot</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaWifi size={23}/>Wifi</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                    <p className=" flex w-max gap-2 items-center text-base"><GiCookingPot size={23}/>Kitchen & Dining Table</p>
                                    <p className=" flex w-max gap-2 items-center text-base"><FaTv size={23}/>Smart TV</p>
                                    <p className=" flex w-max gap-2 items-center text-base"><CgSmartHomeRefrigerator size={23}/>Refrigerator</p>
                                    <p className=" flex w-max gap-2 items-center text-base"><FaSwimmer size={23}/>Private Swimming Pool </p>
                                    </div>                                
                                </div>
                               
                            </div>
                            <div className="flex flex-col w-full ">
                                    <button onClick={() => navigate('/the-kata-villa-sakuta')}  className=" border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Booking Now</button>
                                    {/* <button className="border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Location</button> */}
                                </div>
                            {/* <div className="shadow-md shadow-slate-400 bg-black text-white w-72 text-center p-2 rounded-lg">
                                <p>Weekdays : Rp 1.500.000 / night</p>
                                <p>Weekend : Rp 1.900.000 / night</p>
                            </div> */}
                        </div>  
                    </div>                            
                    {/* Responsive mobile */}
                    <div className="lg:hidden lg:h-0 lg:w-0">
                        <h1 className="  font-bold text-lg mt-5 ">The Kata Villa Sakuta</h1>
                        <div className=" w-full text-[12px] mt-1 flex flex-row  text-right justify-between">
                                <a href="" className="flex text-blue-500"><IoLocationSharp size={18}/>Bintaro, Tangerang Selatan</a>
                                <p className="text-right w-max font-bold text-red-600">Rp 1.500.000 / night</p>   
                        </div>
                        <div className="flex flex-wrap mt-5 items-center justify-between">
                            <h1 className="font-bold">Fasilitas</h1>
                            <button  onClick={() => navigate('/the-kata-villa-sakuta')} className="text-xs ">Lihat Semua > </button>
                        </div>
                        <div className='   shadow-md shadow-slate-400  border-gray-200 border-2 rounded-lg p-4 lg:hidden lg:h-0 lg:w-0 mt-2 mb-5 text-center flex flex-row gap-4'>
                            <p className="flex flex-col text-[10px] w-80 gap-2 items-center"><FaBed size={23}/>2 Bed Rooms</p>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaBath size={23}/>2 Bath Rooms</p>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaCar size={23}/>Parking Lot</p>
                            <p className="flex flex-col text-[10px] w-80 gap-2 items-center"><FaWifi size={23}/>Wifi</p>
                        </div>
                        {/* <div className="mb-4 shadow-md shadow-slate-400 bg-black text-white w-full text-center p-2 rounded-lg">
                            <p>Weekdays : Rp 1.500.000 / night</p>
                            <p>Weekend : Rp 1.900.000 / night</p>
                        </div> */}
                        <div className="flex flex-col w-full gap-4 lg:ml-4 2xl:w-72 ">
                            <button onClick={() => navigate('/the-kata-villa-sakuta')}  className=" border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Booking Now</button>
                            {/* <button className="border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Location</button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Puncak */}
            <div className="mx-10 mt-10 pb-10 md:mt-16 lg:mt-20 xl:mx-32 2xl:mx-52 2xl:mt-20 2xl:mb-10 min-[1918px]:mx-96">
                {/*container*/}
                <div className="flex flex-col justify-center lg:flex-row">
                    <img className="shadow-md shadow-slate-300 mt-5 rounded-lg w-full h-64 sm:h-96 object-cover lg:shadow-slate-400 lg:shadow-lg  lg:h-[460px]  lg:w-96 lg:mt-0" src="./img/Puncak/1.jpg"></img>           
                    <div className="flex flex-col">
                        <h1 className="   hidden font-bold lg:text-xl 2xl:text-2xl lg:ml-5 lg:block lg:mb-1 ">The Kata Villa Puncak</h1>
                        <div className="hidden lg:ml-5 lg:mb-5 text-sm mt-1 lg:flex flex-row  text-right justify-between">
                                <a href="" className="flex text-lg text-blue-500 items-center gap-1"><IoLocationSharp size={20}/>Cisarua, Bogor</a>
                                <p className="font-bold text-lg text-right w-max text-red-600">Rp 6.500.000 / night</p>   
                        </div>
                        <div className="hidden h-0 w-0 lg:flex flex-col ml-4 lg:h-auto lg:w-auto">
                            {/* 2xl */}
                            <div className="flex flex-row">
                                <div className="  shadow-md border-gray-200 border-2 shadow-slate-400 rounded-lg p-6 flex flex-row p-25 gap-10 mb-3 w-full ">
                                    <div className='flex flex-col gap-4'>
                                        <p className="  flex w-max gap-2 items-center text-base"><FaBed size={23}/>5 Bed Rooms ( King Size Bed )</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaBath size={23}/>4 Bath Room</p>
                                        <p className=" flex w-max  gap-2 items-center text-base"><FaCar size={23}/>Parking Lot</p>
                                        <p className="  flex w-max gap-2 items-center text-base"><FaWifi size={23}/>Wifi</p>
                                        <p className="  flex w-max gap-2 items-center text-base"><FaSwimmer size={23}/>Private Swimming Pool</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><GiKidSlide size={23}/>Kids Playground</p> 
                                        <p className=" flex w-max gap-2 items-center text-base"><MdOutdoorGrill size={23}/>BBQ Grill</p>     
                                    </div>
                                    <div className='flex flex-col gap-4 '>
                                        <p className="  flex w-max gap-2 items-center text-base"><GiCookingPot size={23}/>Kitchen & Dining Table</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaTv size={23}/>Smart TV</p>
                                        <p className="  flex w-max gap-2 items-center text-base"><CgSmartHomeRefrigerator size={23}/>Refrigerator</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><FaSwimmer size={23}/>Private Swimming Pool </p>
                                        <p className="  flex w-max gap-2 items-center text-base"><GiCookingPot size={23}/>Kitchen & Dining Table</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><GiPingPongBat size={23}/>Pingpong Table</p>
                                        <p className=" flex w-max gap-2 items-center text-base"><IoMdBonfire size={23}/>Fire Pit</p>
                                    </div>                                
                                </div>
                               
                            </div>
                            <div className="flex flex-col w-full ">
                                    <button onClick={() => navigate('/the-kata-villa-puncak')}  className=" border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Booking Now</button>
                                    {/* <button className="border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Location</button> */}
                                </div>
                            {/* <div className="shadow-md shadow-slate-400 bg-black text-white w-72 text-center p-2 rounded-lg">
                                <p>Weekdays : Rp 1.500.000 / night</p>
                                <p>Weekend : Rp 1.900.000 / night</p>
                            </div> */}
                        </div>  
                    </div>                            
                    {/* Responsive mobile */}
                    <div className="lg:hidden lg:h-0 lg:w-0">
                        <h1 className="  font-bold text-lg mt-5 ">The Kata Villa Puncak</h1>
                        <div className=" w-full text-[12px] mt-1 flex flex-row  text-right justify-between">
                                <a href="" className="flex text-blue-500"><IoLocationSharp size={18}/>Cisarua, Bogor</a>
                                <p className="text-right w-max font-bold text-red-600">Rp 6.500.000 / night</p>   
                        </div>
                        <div className="flex flex-wrap mt-5 items-center justify-between  ">
                            <h1 className="font-bold">Fasilitas</h1>
                            <button  onClick={() => navigate('/the-kata-villa-puncak')} className=" text-xs">Lihat Semua > </button>
                        </div>
                        <div className=' shadow-md shadow-slate-400  border-gray-200 border-2 rounded-lg p-4 lg:hidden lg:h-0 lg:w-0 mt-2 mb-5 text-center flex flex-row gap-4'>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaBed size={23}/>5 Bed Rooms</p>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaBath size={23}/>4 Bath Rooms</p>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaCar size={23}/>Parking Lot</p>
                            <p className=" flex flex-col text-[10px] w-80 gap-2 items-center"><FaWifi size={23}/>Wifi</p>
                        </div>
                        {/* <div className="mb-4 shadow-md shadow-slate-400 bg-black text-white w-full text-center p-2 rounded-lg">
                            <p>Weekdays : Rp 1.500.000 / night</p>
                            <p>Weekend : Rp 1.900.000 / night</p>
                        </div> */}
                        <div className="flex flex-col w-full gap-4 lg:ml-4 2xl:w-72 ">
                            <button onClick={() => navigate('/the-kata-villa-puncak')}  className="border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Booking Now</button>
                            {/* <button className="border-2 border-gray-400 font-bold text-gray-700 rounded-lg p-2 shadow-md shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">Location</button> */}
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="mx-40 my-10">   
                <h1 className="text-2xl font-bold mb-5">The Kata Villa Sakuta (Bintaro, South Tangerang)</h1>
                <div className="flex justify-center">
                    <div>
                        <img className="rounded-xl w-96 h-96 object-cover" src="./img/Puncak/1.jpg"></img>
                    </div>
                    <div className="flex flex-col ml-16">
                        <div className="flex flex-wrap p-25 gap-2 mb-10">
                            <div className='flex flex-col gap-4'>
                                <p className="flex w-80 gap-2 items-center text-lg"><FaBed size={25}/>5 Bed Rooms ( 10 Queen Size Bed )</p>
                                <p className="flex w-80 gap-2 items-center text-lg"><FaBath size={25}/>4 Bath Room</p>
                                <p className="flex w-80 gap-2 items-center text-lg"><FaCar size={25}/>Parking Lot</p>
                                <p className="flex w-80 gap-2 items-center text-lg"><FaWifi size={25}/>Wifi</p>
                                <p className="flex w-80 gap-2 items-center text-lg"><FaSwimmer size={25}/>Private Swimming Pool</p>
                                <p className="flex w-80 gap-2 items-center text-lg"><GiKidSlide size={25}/>Kids Playground</p>                                
                            </div>
                            <div className='flex flex-col gap-4'>
                            <p className="flex w-72 gap-2 items-center text-lg"><GiCookingPot size={25}/>Kitchen & Dining Table</p>
                            <p className="flex w-72 gap-2 items-center text-lg"><FaTv size={25}/>Smart TV</p>
                            <p className="flex w-72 gap-2 items-center text-lg"><CgSmartHomeRefrigerator size={25}/>Refrigerator</p>
                            <p className="flex w-72 gap-2 items-center text-lg"><GiPingPongBat size={25}/>Pingpong Table</p>
                            <p className="flex w-72 gap-2 items-center text-lg"><IoMdBonfire size={25}/>Fire Pit</p>
                            <p className="flex w-72 gap-2 items-center text-lg"><MdOutdoorGrill size={25}/>BBQ Grill</p>
                            
                            </div>
                        </div>
                        <div className="-bottom-8 relative bg-black text-white w-72 text-center p-2 rounded-lg">
                            <p>Weekdays : Rp 6.500.000 / night</p>
                            <p>Weekend : Rp 8.500.000 / night</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button onClick={() => navigate('/the-kata-villa-sakuta')}  className="border-2 border-black rounded-lg p-2">Check Schedule</button>
                        <button className="border-2 border-black rounded-lg p-2">Location</button>
                    </div>
                </div>
            </div> */}
        </div>   
    )
}

export default Home;
