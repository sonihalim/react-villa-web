import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left lg:cursor-pointer group">
            <h1
              className="py-2 lg:py-7 w-52 lg:w-auto flex justify-between items-center lg:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl lg:hidden inline">
               {heading === link.name ? <IoMdArrowDropup size={25}/> : <IoMdArrowDropdown size={25}/> }
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block">
                  <div className="rounded-b-lg  p-2 bg-white w-36 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm w-56 text-gray-600">
                            <Link
                              to={slink.link}
                              className="flex gap-4 mx-0 px-2 hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                {slinks.sublink.map((slink) => (
                    <div>
                      <h1 className="ml-10">
                        <Link to={slink.link}>{slink.name}</Link>
                      </h1>
                    </div>
                    ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
