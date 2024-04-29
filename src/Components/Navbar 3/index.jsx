import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { IoClose, IoMenu  } from "react-icons/io5";

const Navigationbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="z-50 fixed">
      <div className="flex fixed top-0 bg-white items-center w-full font-medium justify-around">
        <div className="z-50 p-5 lg:w-auto w-full flex justify-between">
          <Link to="/">
              <img src='./katavillalogo.png'alt="logo" className="lg:cursor-pointer h-9" />
          </Link>
          <div className="text-black text-3xl lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <IoClose size={25}/> : <IoMenu size={25}/>}
          </div>
        </div>
        <ul className="text-black lg:flex hidden  items-center gap-8 font-[Segoe UI]">
          <li>
            <Link to="/" className="m-0 py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
          <NavLinks />
          </li>
          <li>
            <Link to="/about" className="m-0 py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="m-0 py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`text-black
        lg:hidden bg-white fixed text-lg w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "-right-20" : "right-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-2 px-3 m-0 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/about" className="py-2 px-3 m-0 inline-block">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="py-2 px-3 m-0 inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigationbar2;
