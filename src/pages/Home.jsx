import React from "react";
import NavBar from "../components/NavBar";
import TitleCards from "../components/TitleCards";
import "../index.css";
import Footer from "../components/Footer";
import Heroimg from "../assets/hero_banner.jpg";
import Herotitle from "../assets/hero_title.png";
import Play from "../assets/play_icon.png"
import info from "../assets/info_icon.png"
function Home() {
  return (
    <div>
      <NavBar />
      <div className="relative">
        <img
          src={Heroimg}
          alt=""
          className="w-screen   mask-image:linear-gradient(to_right,transparent,black_75%)
    [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]  "
        />
        <div className="absolute w-full bottom-5 pl-[6%]">
          <img src={Herotitle} alt="" className="max-w-122.5 w-[90%] mb-5"/>
          <p className="max-w-175 text-xl text-gray-300 mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2.5 mb-3">
            <button className=" bg-white border-0 outline-0 text-black inline-flex gap-2.5 items-center py-2 px-5 rounded-sm text-sm font-medium hover:bg-gray-300   cursor-pointer"><img src={Play} alt=""  className="size-5"/>Play</button>
            <button className="inline-flex items-center gap-1 rounded-sm bg-[#6d6d6deb] py-2 px-5 hover:bg-[#414040eb]"><img src={info} alt="" className="size-5 "/>More Info</button>
          </div>
          <TitleCards />
        </div>
        
      </div>
      <div className="pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"top_rated"}/>
        <TitleCards title={"Top Pics for You"} category={"upcoming"}/>
         
      </div>
      

<Footer />
    </div>
  );
}

export default Home;
