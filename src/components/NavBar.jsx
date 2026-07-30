import React from "react";
import "../index.css";
import logo from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import Bell from "../assets/bell_icon.svg";
import profileicon from "../assets/profile_img.png";
import dropdown from "../assets/caret_icon.svg";
const NavBar = () => {
  return (
    <div className="w-screen py-5 px-[6%] flex justify-between fixed z-10 text-sm bg-[linear-gradient(180deg,rgba(0,0,0,0.8),transparent)]">
      <div className="flex items-center gap-12.5">
        <img src={logo} alt="" className="w-22.5" />
        <ul className="flex list-none gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse By Languages</li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img src={search} alt="" className="size-4" />
        <p>Children</p>
        <img src={Bell} alt="" className="size-4" />
        <div className="flex items-center relative group gap-1.5">
          <img src={profileicon} alt="" className="size-6 rounded-sm" />
          <img src={dropdown} alt="" className="size-4 cursor-pointer" />
          <div className="absolute top-full right-0 w-max px-4 py-5 bg-gray-900 text-sm text-gray-400 hover:text-white rounded-xl z-1 cursor-pointer hidden group-hover:block">
            <p className="cursor-pointer underline">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
