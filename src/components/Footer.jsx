import React from "react";
import "../index.css";
import Youtube from "../assets/youtube_icon.png";
import twitter from "../assets/twitter_icon.png";
import instagram from "../assets/instagram_icon.png";
import facebook from "../assets/facebook_icon.png";

export default function Footer() {
  return (
    <div className="py-7 px-[4%] max-w-250 my-0 mx-auto ">
      <div className="flex gap-5 my-10 mx-0">
        <img src={Youtube} alt="" className="cursor-pointer size-5" />
        <img src={twitter} alt="" className="cursor-pointer size-5"/>
        <img src={instagram} alt="" className="cursor-pointer size-5"/>
        <img src={facebook} alt=""  className="cursor-pointer size-5"/>
      </div>
      <ul className="grid grid-cols-[auto_auto_auto_auto] gap-4 mb-7">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-gray-300 text-sm">&copy; 1997-2023 Netflix , inc</p>
    </div>
  );
}
