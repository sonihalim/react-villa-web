import React from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaBed, FaBath, FaCar, FaWifi, FaTv, FaSwimmer } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./jakarta.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'
import { DateRange } from "react-date-range"
import {format} from "date-fns"

function Jakarta() {
  const [open, setOpen] = React.useState(false);
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <>
      <div className="text-black mx-10 pt-20 pb-60 md:pt-24 lg:pt-28 xl:mx-32 2xl:mx-52 2xl:pt-24 2xl:pb-10 min-[1918px]:mx-96 min-[1918px]:pb-72">
        <div className="overflow-hidden rounded-lg border-1 grid mt-5 relative grid-cols-5 gap-2 sm:gap-2 justify-items-stretch">
            <img className="h-52 sm:h-96 object-cover col-span-3 row-span-3" src="./img/Bintaro/1.png"></img>
            <img className="h-16 sm:h-28 object-cover" src="./img/Bintaro/2.jpg"></img>
            <img className="h-16 sm:h-28 object-cover" src="./img/Bintaro/3.jpg"></img>
            <img className="h-16 sm:h-32 object-cover" src="./img/Bintaro/8.jpeg"></img>
            <img className="h-16 sm:h-32 object-cover" src="./img/Bintaro/5.jpg"></img>
            <img className="h-16 sm:h-32 object-cover" src="./img/Bintaro/6.jpeg"></img>
            <img className="h-16 sm:h-32 object-cover" src="./img/Bintaro/11.jpeg"></img>
            <button
              onClick={() => setOpen(true)}
              className="absolute mx-2 my-2 rounded-md w-24 p-1 text-[8px] bg-white sm:w-36 sm:p-3 sm:text-sm sm:rounded-lg bottom-0 right-0 sm:mx-5 sm:my-5"
            >
              See all photo
            </button>
        </div>
        <h1 className="text-sm sm:text-xl font-bold mt-2 mb-5">
          The Kata Villa Sakuta (Bintaro, South Tangerang)
        </h1>
            <div className="hidden my-4 2xl:flex flex-row rounded-lg shadow-md p-5 gap-12 text-sm justify-center border-gray-200 border-2 shadow-slate-400  ">
              <p className="grid justify-items-center gap-1">
                <FaBed size={20} />2 Bed Rooms ( King Size Bed )
              </p>
              <p className="grid justify-items-center gap-1">
                <FaBath size={20} />2 Bath Room
              </p>
              <p className="grid justify-items-center gap-1">
                <FaCar size={20} />
                Parking Lot
              </p>
              <p className="grid justify-items-center gap-1">
                <FaWifi size={20} />
                Wifi
              </p>
              <p className="grid justify-items-center gap-1">
                <FaSwimmer size={20} />
                Private Swimming Pool{" "}
              </p>
              <p className="grid justify-items-center gap-1">
                <GiCookingPot size={20} />
                Kitchen & Dining Table
              </p>
              <p className="grid justify-items-center gap-1">
                <FaTv size={20} />
                Smart TV
              </p>
              <p className="grid justify-items-center gap-1">
                <CgSmartHomeRefrigerator size={20} />
                Refrigerator
              </p>
            </div>
          {/* test */}
          {/* responsive 1 */}
            <div className="2xl:hidden collapse collapse-arrow  my-4 rounded-lg shadow-md border-gray-200 border-2 shadow-slate-400 ">
              <input  type="checkbox" /> 
              <div className="collapse-title text-[10px] sm:text-xs grid pl-5 pr-10 sm:px-10 py-4 grid-cols-3 sm:grid-cols-4 gap-4 justify-items-center md:grid-cols-5">
                <p className="hidden 2xl:flex gap-2 flex-col items-center text-center">
                  <FaBed size={20} />2 Bed Rooms ( King Size Bed )
                </p>
                <p className="flex gap-2  flex-col  items-center text-center">
                  <FaBath size={20} />2 Bath Room
                </p>
                <p className="flex  gap-2  flex-col  items-center text-center">
                  <FaCar size={20} />
                  Parking Lot
                </p>
                <p className="hidden sm:flex  gap-2  flex-col  items-center text-center">
                  <FaWifi size={20} />
                  Wifi
                </p>
                <p className="hidden xl:flex gap-2 flex-col  items-center text-center">
                  <FaSwimmer size={20} />
                  Private Swimming Pool{" "}
                </p>
                <p className="hidden md:flex gap-2 flex-col items-center text-center">
                  <CgSmartHomeRefrigerator size={20} />
                  Refrigerator
                </p>
                <p className="xl:hidden flex gap-2 flex-col items-center text-center">
                  <FaTv size={20} />
                  Smart TV
                </p>
              </div>
              <div className="collapse-content text-[10px] sm:text-xs font-medium grid pl-5 pr-10 sm:px-10 grid-rows-2 grid-cols-3 sm:grid-cols-4 sm:grid-rows-none md:grid-cols-5 gap-4 justify-items-center"> 
                <p className="flex 2xl:hidden gap-2 flex-col items-center text-center">
                  <FaBed size={20} />2 Bed Rooms ( King Size Bed )
                </p>
                <p className="flex gap-2 flex-col items-center text-center">
                  <GiCookingPot size={20} />
                  Kitchen & Dining Table
                </p>
                <p className="hidden xl:flex gap-2 flex-col items-center text-center">
                  <FaTv size={20} />
                  Smart TV
                </p>
                <p className="md:hidden flex gap-2 flex-col items-center text-center">
                  <CgSmartHomeRefrigerator size={20} />
                  Refrigerator
                </p>
                <p className="flex gap-2 flex-col items-center text-center xl:hidden">
                  <FaSwimmer size={20} />
                  Private Swimming Pool{" "}
                </p>
                <p className="sm:hidden flex  gap-2  flex-col  items-center text-center">
                  <FaWifi size={20} />
                  Wifi
                </p>
              </div>
            </div>
        <div className="relative flex-col sm:flex-row flex gap-3 sm:gap-5 justify-center">
          <div className="gap-3 sm:gap-5 flex flex-col">
            <div className="flex  flex-row gap-2 sm:flex-col sm:gap-5">
              <div className="bg-black text-xs sm:text-base  sm:h-20 w-full sm:w-80 items-center text-white text-center p-4 rounded-lg">
                <p>Weekdays : Rp 1.500.000 / night</p>
                <p>Weekend : Rp 1.900.000 / night</p>
              </div>
              <button href="https://api.whatsapp.com/send/?phone=6289612586893&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="font-bold items-center text-center w-28 px-3 text-xs border-2 sm:text-base border-gray-300 rounded-lg sm:w-80 sm:px-16 py-4  shadow-slate-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white">
                Booking Now
              </button>
            </div>
              {/* <div className="h-12 text-xs sm:text-base w-full border-2 border-gray-300 rounded-lg px-2 py-2 sm:w-80 sm:h-16 flex gap-2 justify-center items-center">
                <SlCalender size={20} />
                <span onClick={()=> setOpenDate(!openDate)}>
                  {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
                </span>
         
              </div>
              {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="absolute -left-5 bottom-56 sm:-left-2 rounded-md sm:bottom-16 border-2"
                  />} */}
            </div>
           
            <iframe title='Maps'  className="sm:h-58 border-2 rounded-xl w-full  lg:h-60" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.87811443238294!2d106.7241326922147!3d-6.257166308342339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12fba275fe9%3A0xfe7820c4ef55dbeb!2sSakuta%20Coffee!5e0!3m2!1sid!2sid!4v1706788950523!5m2!1sid!2sid" allowfullscreen="" loading="lazy"></iframe>
        </div>
          {/* Pop Up photo */}
        <Lightbox
          open={open}
          plugins={[Counter, Thumbnails]}
          close={() => setOpen(false)}
          slides={[
            { src: "./img/Bintaro/2.jpg" },
            { src: "./img/Bintaro/1.png" },
            { src: "./img/Bintaro/3.jpg" },
            { src: "./img/Bintaro/5.jpg" },
            { src: "/img/Bintaro/6.jpeg" },
            { src: "./img/Bintaro/8.jpeg" },
            { src: "./img/Bintaro/9.jpeg" },
            { src: "./img/Bintaro/10.jpeg" },
            { src: "./img/Bintaro/11.jpeg" },
          ]}
        />
      </div>
    </>
  );
}

export default Jakarta;
